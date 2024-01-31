import React from 'react';
import styled from 'styled-components';

const SidebarContainer = styled.div`
  width: 200px;
  background-color: #333;
  color: white;
  padding: 20px;
`;

const Sidebar = () => {
  return (
    <SidebarContainer>
      {/* 사이드바 내용 */}
      <h1>관리 페이지</h1>
      <p>메인 페이지</p>
      <p>내 정보 수정</p>
      <p>팀 관리</p>
    </SidebarContainer>
  );
};

export default Sidebar;
