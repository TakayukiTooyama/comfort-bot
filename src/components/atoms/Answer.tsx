import styled from 'styled-components';
import { Button } from '@material-ui/core';

const StyledButton = styled(Button)`
  border-color: #ffb549;
  color: #ffb549;
  margin-bottom: 8px;
  font-weight: 600;
  &:hover {
    background-color: #ffb549;
    color: #fff;
  }
`;

export default StyledButton;
