import styled from "styled-components";
import { defaultTheme } from "../../theme";

interface IParamsStyled {
  pressed?: boolean;
}

interface ButtonPrimeProps {
  disabled?: boolean;
}

export const Button = styled.button<ButtonPrimeProps>`
  background-color: ${({ theme, disabled }) =>
    disabled ? "#D3D3D3" : theme.colors.bgChange};
  box-shadow: ${({ theme }) => theme.colors.boxShadow};
  color: ${({ theme }) => theme.colors.text};
  font-size: ${defaultTheme.fontSize.s};
  font-weight: ${defaultTheme.fontWeight.normal};
  padding: ${defaultTheme.spacing["3xs"]} ${defaultTheme.spacing.s};
  border-radius: ${defaultTheme.radius.m};
  border: none;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  transition: all 0.2s ease-in-out;

  &:hover {
    ${({ disabled, theme }) =>
      !disabled &&
      `
        background-color: ${theme.colors.primary};
        color: ${theme.colors.grey};
      `}
  }
`;

type ButtonProps = {
  disabled?: boolean;
};

export const ButtonPrimary = styled.button<ButtonProps>`
  background-color: ${({ theme }) => theme.colors.primary};
  box-shadow: ${({ theme }) => theme.colors.boxShadow};
  color: ${({ theme }) => theme.colors.white};
  font-size: ${defaultTheme.fontSize.s};
  font-weight: ${defaultTheme.fontWeight.normal};
  padding: ${defaultTheme.spacing["3xs"]} ${defaultTheme.spacing.s};
  border-radius: ${defaultTheme.radius.m};
  border: none;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  transition: all 0.2s ease-in-out;

  &:hover {
    ${({ disabled, theme }) =>
      !disabled &&
      `
        background-color: ${theme.colors.black};
        color: ${theme.colors.grey};
      `}
  }
`;

export const ButtonSecondary = styled.button<ButtonProps>`
  background-color: #e6936e;
  box-shadow: ${({ theme }) => theme.colors.boxShadow};
  color: ${({ theme }) => theme.colors.white};
  font-size: ${defaultTheme.fontSize.s};
  font-weight: ${defaultTheme.fontWeight.normal};
  padding: ${defaultTheme.spacing["3xs"]} ${defaultTheme.spacing.s};
  border-radius: ${defaultTheme.radius.m};
  border: none;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  transition: all 0.2s ease-in-out;

  &:hover {
    ${({ disabled, theme }) =>
      !disabled &&
      `
        background-color: ${theme.colors.black};
        color: ${theme.colors.grey};
      `}
  }
`;

export const ButtonOutline = styled.button<IParamsStyled>`
  background-color: ${(props) =>
    props.pressed
      ? ({ theme }) => theme.colors.primary
      : ({ theme }) => theme.colors.bgChange};
  border: 1px solid ${({ theme }) => theme.colors.black};
  box-shadow: ${({ theme }) => theme.colors.boxShadow};
  color: ${(props) =>
    props.pressed
      ? ({ theme }) => theme.colors.white
      : ({ theme }) => theme.colors.text};
  font-size: ${defaultTheme.fontSize.s};
  font-weight: ${defaultTheme.fontWeight.normal};
  padding: ${defaultTheme.spacing["3xs"]} ${defaultTheme.spacing.s};
  border-radius: ${defaultTheme.radius.m};
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.grey};
  }
  @media (max-width: 900px) {
    font-size: ${defaultTheme.fontSize.s};
    padding: ${defaultTheme.spacing["3xs"]};
  }
`;

export const ButtonAlert = styled.button`
  background-color: ${({ theme }) => theme.colors.alert};
  box-shadow: ${({ theme }) => theme.colors.boxShadow};
  color: ${({ theme }) => theme.colors.white};
  font-size: ${defaultTheme.fontSize.s};
  font-weight: ${defaultTheme.fontWeight.normal};
  padding: ${defaultTheme.spacing["3xs"]} ${defaultTheme.spacing.s};
  border-radius: ${defaultTheme.radius.m};
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    background-color: ${({ theme }) => theme.colors.black};
    color: ${({ theme }) => theme.colors.grey};
  }
`;
