import styled, { css } from 'styled-components';

interface CardProps {
  backgroundColor?: string;
  paddingSize?: string;
  height?: string
  isDisabled?: boolean; // New prop for disabling/enabling opacity
}

export const Card = styled.div<CardProps>`
  background-color: ${({ theme, backgroundColor }) =>
    backgroundColor || theme.colors.bgTransparent};
  padding: ${({ theme, paddingSize }) => paddingSize || '27px'};
  border-radius: ${({ theme }) => theme.radius.xl};
  box-shadow: ${({ theme }) => theme.colors.boxShadow};
  width: 100%;
  height: ${({ height }) => height ? height : 'none'};
  display: flex;
  justify-content: center;
  align-items: center;
  /* Apply opacity when isDisabled is true */
  ${({ isDisabled }) =>
    isDisabled &&
    css`
      img, p {
            opacity: 0.3;
      }
    `}
`;

