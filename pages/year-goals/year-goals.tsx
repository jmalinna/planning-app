import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import { Typography } from 'antd';

export async function getStaticProps({ locale }: { locale: string}) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'footer'])),
    },
  };
}

const YearGoalsPage = () => {
  const { t } = useTranslation();
  const { Title } = Typography;
  const pageTitle = t('year_goals');

  return (
    <>
      <Head><title>{pageTitle}</title></Head>
      <Title>{pageTitle}</Title>
      <Link href="/">{t('back_to_home_page')}</Link>
    </>
  );
};
export default YearGoalsPage;
