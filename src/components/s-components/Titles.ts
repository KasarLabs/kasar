import styled from "styled-components";
import { defaultTheme } from "../../theme";

export const H1 = styled.h1`
  font-size: ${defaultTheme.fontSize.xl};
  font-weight: ${defaultTheme.fontWeight.normal};
  color: ${({ theme }) => theme.colors.text};
  @media (max-width: 900px) {
    font-size: ${defaultTheme.fontSize.l};
  }
`;

export const H2 = styled.h3`
  font-size: ${defaultTheme.fontSize.l};
  font-weight: ${defaultTheme.fontWeight.normal};
  color: ${({ theme }) => theme.colors.text};
  margin: 0;
  @media (max-width: 900px) {
    font-size: ${defaultTheme.fontSize.s};
  }
`;

export const H3 = styled.h3`
  font-size: ${defaultTheme.fontSize.m};
  font-weight: ${defaultTheme.fontWeight.bold};
  color: ${({ theme }) => theme.colors.text};
  margin: 0;
  @media (max-width: 900px) {
    font-size: ${defaultTheme.fontSize.s};
  }
`;

export const H4 = styled.h4`
  font-size: ${defaultTheme.fontSize.s};
  font-weight: ${defaultTheme.fontWeight.bold};
  color: ${({ theme }) => theme.colors.text};
  margin: 0;
  @media (max-width: 900px) {
    font-size: ${defaultTheme.fontSize.s};
  }
`;

export const TextSm = styled.p`
  font-size: ${defaultTheme.fontSize.s};
  font-weight: ${defaultTheme.fontWeight.thin};
  color: ${({ theme }) => theme.colors.text};
  margin: 0;
  @media (max-width: 900px) {
    font-size: ${defaultTheme.fontSize.xs};
  }
`;

export const Text = styled.p`
  font-size: ${defaultTheme.fontSize.m};
  font-weight: ${defaultTheme.fontWeight.thin};
  color: ${({ theme }) => theme.colors.text};
  margin: 0;
  @media (max-width: 900px) {
    font-size: ${defaultTheme.fontSize.s};
  }
`;

export const TextGrey = styled.p`
  font-size: ${defaultTheme.fontSize.s};
  font-weight: ${defaultTheme.fontWeight.thin};
  color: ${({ theme }) => theme.colors.textGrey};
  margin: 0;
`;

export const TextBold = styled.p`
  font-size: ${defaultTheme.fontSize.s};
  font-weight: ${defaultTheme.fontWeight.bold};
  color: ${({ theme }) => theme.colors.text};
  margin: 0;
`;

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
`;
