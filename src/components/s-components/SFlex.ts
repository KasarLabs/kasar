import styled from 'styled-components';
import { defaultTheme } from '../../theme';

export const Flex = styled.div`
  display: flex;
  align-items: center;
  gap: ${defaultTheme.spacing['4xs']};
`

export const FlexCol = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const FlexSm = styled.div`
  display: flex;
  align-items: center;
  gap: ${defaultTheme.spacing['6xs']};
`