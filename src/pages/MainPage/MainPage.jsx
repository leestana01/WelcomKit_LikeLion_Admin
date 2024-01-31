import React from 'react';
import Sidebar from '../../Components/Sidebar/Sidebar';
import Header from '../../Components/Header/Header';
import Content from '../../Components/Content/Content';
import styled from 'styled-components';

const AppContainer = styled.div`
  display: flex;
  height: 100vh;
`;

const MainContent = styled.div`
  flex-grow: 1;
  padding: 20px;
  background-color: #f1f1f1;
`;

export default function App() {
  return (
    <AppContainer>
      <Sidebar />
      <MainContent>
        <Header />
        <Content />
      </MainContent>
    </AppContainer>
  );
}
