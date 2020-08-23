import React from 'react';
import { Answer } from '../atoms';
import styled from 'styled-components';

const answers = [
  { text: 'WEBサイトを制作して欲しい' },
  { text: 'WEBアプリを制作して欲しい' },
  { text: 'WEB自動化ツールを制作して欲しい' },
  { text: 'その他' },
];

const Answers = () => {
  return (
    <Wrapper>
      {answers.map((answer, idx) => (
        <Answer key={idx.toString()} variant="outlined">
          {answer.text}
        </Answer>
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: flex-end;
  height: 192px;
`;

export default Answers;
