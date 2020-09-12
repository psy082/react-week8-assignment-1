import React from 'react';

import Contents from '../styles/Contents';
import Title from '../styles/Title';

export default function AboutPage() {
  return (
    <>
      <Title>About</Title>
      <Contents>
        <h2>이 서비스에 대해서...</h2>
        <p>이 서비스는 영국에서 시작되었습니다.</p>
        <p>이 서비스를 보셨다면 주변에 있는 20명에게 추천하셔야 합니다.</p>
      </Contents>
    </>
  );
}
