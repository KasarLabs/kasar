import { DefaultTheme } from 'styled-components';

export const defaultTheme = {
  radius: {
    s: '3px',
    m: '0.25rem',
    l: '15px',
    xl: '20px',
    xxl: '50px'
  },
  fontSize: {
    xs: '9px',
    s: '14px',
    m: '22px',
    l: '32px',
    ml: '52px',
    xl: '75px'
  },
  fontWeight: {
    thin: '400',
    normal: '600',
    bold: '800',
  },
  spacing: {
    unset: 'unset',
    '6xs': '2px',
    '5xs': '4px',
    '4xs': '10px',
    '3xs': '12px',
    '2xs': '16px',
    xs: '20px',
    s: '24px',
    m: '32px',
    l: '40px',
    xl: '48px',
    '2xl': '64px',
    '3xl': '80px',
    '4xl': '100px',
    '5xl': '120px',
    '6xl': '140px',
    '7xl': '160px',
    '8xl': '180px'
  },
  boxShadow: {
    regular: '0px 2px 6px rgba(0, 0, 0, 0.1)',
  }
};

export const lightTheme: DefaultTheme = {
  ...defaultTheme,
  colors: {
    black: '#000',
    white: '#FFF',
    grey: '#F5F5F5',
    darkGrey: '#333030',
    lighterBlack: '#1D1C1A',
    primary: '#338CF5',
    green: '#93D788',
    background: '#FFF',
    text: '#000',
    textGrey: "#666",
    bgChange: '#F5F5F5',
    alert: "#D0342C",
    boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.1)'
  }
};

export const darkTheme: DefaultTheme = {
  ...defaultTheme,
  colors: {
    black: '#000',
    white: '#FFF',
    grey: '#F5F5F5',
    darkGrey: '#333030',
    lighterBlack: '#1D1C1A',
    primary: '#338CF5',
    green: '#93D788',
    background: '#03001C',
    text: '#FFF',
    textGrey: "#666",
    bgChange: '#000023',
    alert: "#D0342C",
    boxShadow: '0px 1px 1px rgba(255, 255, 255, 0.5)'
  }
};