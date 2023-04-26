import styled from 'styled-components';
import { defaultTheme } from '../../theme';

export const Input = styled.input`
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: ${defaultTheme.radius.s};
  box-shadow: ${({ theme }) => theme.colors.boxShadow};
  border: none;
  width: 100%;
  height: 50px;
  padding: 10px;
`

  // < Input autoFocus placeholder = '' type = 'text' />
