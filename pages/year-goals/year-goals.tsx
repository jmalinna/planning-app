import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Typography } from 'antd';

const YearGoalsPage = () => {
  const { Title } = Typography;

  return (
    <>
      <Head><title>Year Goals</title></Head>
      <Title>Year Goals</Title>
      <Link href="/">Back to home page</Link>
    </>
  );
};
export default YearGoalsPage;
