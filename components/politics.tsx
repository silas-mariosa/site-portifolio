'use client'

import { Card } from "./ui/card";
import { useTranslations } from "@/hooks/useTranslations";

export default function PoliticaPrivacidade() {
  const { t } = useTranslations();

  return (
    <section id='politica-privacidade' className="flex justify-center items-start p-10">
      <Card className="p-8 max-w-4xl bg-[#151922] text-white space-y-6">
        <h1 className="text-3xl font-bold">{t('privacyPage', 'title')}</h1>

        <p className="text-md leading-relaxed">
          {t('privacyPage', 'intro')}
        </p>

        <h2 className="text-xl font-semibold mt-6">{t('privacyPage', 'dataCollectionTitle')}</h2>
        <p className="text-md leading-relaxed">
          {t('privacyPage', 'dataCollectionText')}
        </p>

        <h2 className="text-xl font-semibold mt-6">{t('privacyPage', 'dataUsageTitle')}</h2>
        <p className="text-md leading-relaxed">
          {t('privacyPage', 'dataUsageText')}
        </p>

        <h2 className="text-xl font-semibold mt-6">{t('privacyPage', 'cookiesTitle')}</h2>
        <p className="text-md leading-relaxed">
          {t('privacyPage', 'cookiesText')}
        </p>

        <h2 className="text-xl font-semibold mt-6">{t('privacyPage', 'thirdPartiesTitle')}</h2>
        <p className="text-md leading-relaxed">
          {t('privacyPage', 'thirdPartiesText')}
        </p>

        <h2 className="text-xl font-semibold mt-6">{t('privacyPage', 'userRightsTitle')}</h2>
        <p className="text-md leading-relaxed">
          {t('privacyPage', 'userRightsText')}
        </p>

        <h2 className="text-xl font-semibold mt-6">{t('privacyPage', 'contactTitle')}</h2>
        <p className="text-md leading-relaxed">
          {t('privacyPage', 'contactText')}
        </p>
      </Card>
    </section>
  );
}
