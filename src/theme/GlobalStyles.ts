// @ts-nocheck
import { createGlobalStyle, DefaultTheme } from 'styled-components';
import { defaultTheme } from './index';

const GlobalStyle = createGlobalStyle<{ theme: DefaultTheme }>`
	//========================================================================================================
	// GENERAL
	//========================================================================================================
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