# Site Portfólio

Portfólio desenvolvido com Next.js 16, React 19 e TypeScript.

## 🚀 Deploy no Easypanel

### Configuração Importante

Para garantir que o build funcione corretamente no Easypanel:

1. **No painel do Easypanel, vá em Configurações do Projeto**
2. **Desabilite o Nixpacks** (se estiver habilitado)
3. **Force o uso do Dockerfile**:
   - Selecione "Dockerfile" como método de build
   - O Dockerfile já está configurado e pronto para uso

### Configurações do Build

- **Node.js**: 20.x (especificado no Dockerfile e `.node-version`)
- **Package Manager**: Yarn
- **Porta**: 3000 (configurável via variável de ambiente `PORT`)

### Variáveis de Ambiente (Opcional)

No Easypanel, você pode configurar:
- `PORT`: Porta do servidor (padrão: 3000)
- `NODE_ENV`: production (já configurado no Dockerfile)
- `NEXT_TELEMETRY_DISABLED`: 1 (já configurado)

## 📦 Desenvolvimento Local

```bash
# Instalar dependências
yarn install

# Rodar em desenvolvimento
yarn dev

# Build para produção
yarn build

# Rodar build de produção
yarn start
```

## 🐳 Docker

O projeto inclui um Dockerfile otimizado com multi-stage build:

```bash
# Build da imagem
docker build -t site-portifolio .

# Rodar container
docker run -p 3000:3000 site-portifolio
```

## ✅ Verificação

Após o deploy, verifique:
- ✅ Build completa sem erros
- ✅ Aplicação roda na porta configurada
- ✅ Node.js 20 está sendo usado (verificar logs)
