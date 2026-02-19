# Stage 1: Dependencies
FROM node:20-alpine AS deps
WORKDIR /app

# Instalar yarn via corepack (já vem com Node.js 20)
RUN corepack enable

COPY package.json yarn.lock* ./
RUN yarn install --frozen-lockfile

# Stage 2: Builder
FROM node:20-alpine AS builder
WORKDIR /app

# Instalar yarn
RUN corepack enable

# Copiar dependências
COPY --from=deps /app/node_modules ./node_modules

# Copiar arquivos do projeto
COPY . .

# Variáveis de ambiente para build
ENV NEXT_TELEMETRY_DISABLED=1
ENV NODE_ENV=production

# Build da aplicação
RUN yarn build

# Stage 3: Runner
FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# Criar usuário não-root
RUN addgroup --system --gid 1001 nodejs && \
  adduser --system --uid 1001 nextjs

# Copiar arquivos necessários do build standalone
COPY --from=builder /app/public ./public

# Copiar arquivos do build standalone
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

CMD ["node", "server.js"]
