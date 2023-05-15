import type { AppProps } from 'next/app'
import { StarknetConfig, InjectedConnector } from '@starknet-react/core'
import { ThemeProvider } from 'styled-components';
import { lightTheme } from '../theme/';
import { UserProvider } from '../context';
import GlobalStyle from '../theme/GlobalStyles';
import '../style/style.css'
import { Suspense } from 'react';

export default function App({ Component, pageProps }: AppProps) {
  const connectors = [
    new InjectedConnector({ options: { id: 'argentX' } }),
  ]
  const theme = lightTheme
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <UserProvider>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <StarknetConfig connectors={connectors}>
            <Component {...pageProps} />
          </StarknetConfig>
        </ThemeProvider>
      </UserProvider>
    </Suspense>
  );
}
