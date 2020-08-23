import React from 'react';
import { List } from '@material-ui/core';
import { Chat } from '../molecules';
import styled from 'styled-components';

const chats = [
  {
    text: 'hello',
    type: 'question',
  },
  {
    text: '答えkkkk',
    type: 'answer',
  },
  {
    text: '答えkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk',
    type: 'answer',
  },
  {
    text: '答えkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk',
    type: 'answer',
  },
  {
    text: '答えkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk',
    type: 'answer',
  },
  {
    text: '答えkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk',
    type: 'answer',
  },
  {
    text: '答えkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk',
    type: 'answer',
  },
];

const Chats = () => {
  return (
    <StyledList id="scroll-area">
      {chats.map((chat, idx) => (
        <Chat key={idx.toString()} text={chat.text} type={chat.type} />
      ))}
    </StyledList>
  );
};

const StyledList = styled(List)`
  height: 400px;
  padding: 0;
  overflow: auto;
`;

export default Chats;
