import React from 'react';
import Link from 'next/link';
import { Typography } from 'antd';

const YearGoalsPage = () => {
  const { Title } = Typography;

  return (
    <>
      <Title>Year Goals</Title>
      <Link href="/">Back to home page</Link>
    </>
  );
};
export default YearGoalsPage;
