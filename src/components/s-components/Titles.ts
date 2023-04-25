import styled from 'styled-components';
import { defaultTheme } from '../../theme';

export const H1 = styled.h1`
  font-size: ${defaultTheme.fontSize.xl};
  font-weight: ${defaultTheme.fontWeight.bold};
  color: ${({ theme }) => theme.colors.text};
  @media (max-width: 900px) {
		font-size: ${defaultTheme.fontSize.ml};
  }
`

export const H3 = styled.h3`
  font-size: ${defaultTheme.fontSize.s};
  font-weight: ${defaultTheme.fontWeight.bold};
  color: ${({ theme }) => theme.colors.text};
  margin: 0;
  @media (max-width: 900px) {
		font-size: ${defaultTheme.fontSize.s};
  }
`

export const TextSm = styled.p`
  font-size: ${defaultTheme.fontSize.xs};
  font-weight: ${defaultTheme.fontWeight.thin};
  color: ${({ theme }) => theme.colors.text};
  margin: 0;
  @media (max-width: 900px) {
		font-size: ${defaultTheme.fontSize.xs};
  }
`

export const Text = styled.p`
  font-size: ${defaultTheme.fontSize.s};
  font-weight: ${defaultTheme.fontWeight.thin};
  color: ${({ theme }) => theme.colors.text};
  margin: 0;
 
`

export const TextClickable = styled.h3`
  font-size: ${defaultTheme.fontSize.s};
  font-weight: ${defaultTheme.fontWeight.thin};
  color: ${({ theme }) => theme.colors.text};
  margin: 0;
  transition: 0.2s;
  background-color: transparent;
  cursor: pointer;
  &:hover {
    font-weight: ${defaultTheme.fontWeight.bold};
    text-shadow: ${({ theme }) => theme.colors.boxShadow};
  }
  @media (max-width: 900px) {
		font-size: ${defaultTheme.fontSize.xs};
  }
`