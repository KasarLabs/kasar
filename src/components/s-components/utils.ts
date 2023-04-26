import styled from 'styled-components';
import { defaultTheme } from '../../theme';

export const GradientText = styled.span`
  background: linear-gradient(to right, #338CF5, #4FD1C5);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const SeparatorSM = styled.div`
  padding-top: 20px;
`;


export const SeparatorXL = styled.div`
  padding-top: 100px;
`;

export const Separator = styled.div`
  padding-top: 50px;
`;

export const VericalLine = styled.div`
  left: 50%;
  height: 100px;
  border-left: 2px solid #EAEAEA;
  margin-left: -1px; /* half of the border width */
`