import React from 'react';
import styled from 'styled-components';

const SidebarContainer = styled.div`
  width: 250px;
  background-color: #333;
  color: white;
  padding: 20px;
`;

const Sidebar = () => {
  return (
    <SidebarContainer>
      {/* 사이드바 내용 */}
      <h1>Dashboard</h1>
      <p>Menu Item 1</p>
      <p>Menu Item 2</p>
      <p>Menu Item 3</p>
    </SidebarContainer>
  );
};

export default Sidebar;
