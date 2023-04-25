import styled from 'styled-components';
import { defaultTheme } from '../../theme';

export const FlexXL = styled.div`
  display: flex;
  gap: ${defaultTheme.spacing.xs};
  @media (max-width: 800px) {
    flex-direction: column;
  }
`

export const Flex = styled.div`
  display: flex;
  gap: ${defaultTheme.spacing['4xs']};
`

export const FlexCol = styled.div`
  display: flex;
  flex-direction: column;
`

export const FlexSm = styled.div`
  display: flex;
  align-items: center;
  gap: ${defaultTheme.spacing['6xs']};
`