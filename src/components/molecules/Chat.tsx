import React from 'react';
import { Avatar, ChatText } from '../atoms';
import { ListItem } from '@material-ui/core';
import styled from 'styled-components';

type Props = {
  text: string;
  type: string;
};

type StyleProps = {
  isQuestion: boolean;
};

const Chat = ({ text, type }: Props) => {
  const isQuestion = type === 'question';

  return (
    <>
      <StyledListItem isQuestion={isQuestion}>
        <Avatar isQuestion={isQuestion} />
        <ChatText>{text}</ChatText>
      </StyledListItem>
    </>
  );
};

const StyledListItem = styled(({ isQuestion, ...props }) => (
  <ListItem {...props} />
))<StyleProps>`
  display: flex;
  justify-content: flex-start;
  padding-right: 0 !important;
  flex-direction: ${(p) => (p.isQuestion ? 'row-reverse' : 'row')};
`;
export default Chat;
