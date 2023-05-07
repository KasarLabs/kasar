import { createGlobalStyle } from 'styled-components';
import { defaultTheme } from './index';

export interface DefaultTheme {
	radius: {
		s: string;
		m: string;
		l: string;
		xl: string;
		xxl: string;
	};
	fontSize: {
		xs: string;
		s: string;
		m: string;
		l: string;
		ml: string;
		xl: string;
	};
	fontWeight: {
		thin: string;
		normal: string;
		bold: string;
	};
	spacing: {
		unset: string;
		'6xs': string;
		'5xs': string;
		'4xs': string;
		'3xs': string;
		'2xs': string;
		xs: string;
		s: string;
		m: string;
		l: string;
		xl: string;
		'2xl': string;
		'3xl': string;
		'4xl': string;
		'5xl': string;
		'6xl': string;
		'7xl': string;
		'8xl': string;
	};
	boxShadow: {
		regular: string;
	};
	colors: {
		black: string;
		white: string;
		grey: string;
		darkGrey: string;
		lighterBlack: string;
		primary: string;
		green: string;
		background: string;
		text: string;
		textGrey: string;
		bgChange: string;
		alert: string;
		boxShadow: string;
	};
}

const GlobalStyle = createGlobalStyle<{ theme: DefaultTheme }>`
	* {
		box-sizing: border-box;
		padding: 0;
	}
	*::before {
		box-sizing: border-box;
	}
	*::after {
		box-sizing: border-box;
	}
	body {
		background-color: ${({ theme }) => theme.colors.background};
		margin: 0 auto;
	}

	p {
		font-size: ${defaultTheme.fontSize.s};
	}
	p, h1, h2, h3, h4 {
		font-family: 'Inter', sans-serif;
	}
	button {
		font-family: 'Inter', sans-serif;
	}
`;

export default GlobalStyle;