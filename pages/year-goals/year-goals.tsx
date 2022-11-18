import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import { Typography } from 'antd';

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
