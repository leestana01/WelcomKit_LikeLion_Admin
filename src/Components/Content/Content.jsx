import React from 'react';
import styled from 'styled-components';

const ContentContainer = styled.div`
  background-color: white;
  padding: 20px;
`;

const Content = () => {
  return (
    <ContentContainer>
      {/* 컨텐츠 내용 */}
      <h3>Content Area</h3>
      <p>This is where the main content will go.</p>
    </ContentContainer>
  );
};

export default Content;
