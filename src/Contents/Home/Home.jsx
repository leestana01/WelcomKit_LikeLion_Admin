import React from 'react';
import styled from 'styled-components';
import CardBox from './CardContainer/CardBox';
import ContainerColumn from '../../Components/Container/ContainerColumn';
import NoticeBlue from '../../Components/Notice/NoticeBlue';
import Manitto from './Manitto';
import DangerButton from './DangerButton';

const ContentContainer = styled(ContainerColumn)`
  gap: 20px;
`;

export default function Home() {
  return (
    <ContentContainer>
      <CardBox/>
      <NoticeBlue>
        권한이 없는 기능은 해당 버튼을 클릭해도 작동하지 않습니다. (ex 마니또 시작/초기화 등)
      </NoticeBlue>
      <Manitto/>

      <DangerButton/>
    </ContentContainer>
  );
};
