import React, { useEffect } from 'react';
import { Chats } from './components/organisms';
import { Answers } from './components/molecules';
import styled from 'styled-components';

function App() {
  useEffect(() => {
    const scrollArea = document.querySelector('#scroll-area');
    if (scrollArea) {
      scrollArea.scrollTop = scrollArea.scrollHeight;
    }
  });
  return (
    <Wrapper>
      <Box>
        <Chats />
        <Answers />
      </Box>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  position: relative;
  height: 100vh;
  width: 100%;
`;

const Box = styled.div`
  background: #fff;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 4px;
  box-sizing: border-box;
  height: 592px;
  max-width: 432px;
  padding: 0 1rem;
  width: 100%;

  /* Vertical and horizontal center alignment */
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export default App;
