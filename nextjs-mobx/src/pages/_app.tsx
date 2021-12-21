import type { AppProps } from 'next/app';
import GlobalStyle from '../styles/global';
import { ThemeProvider } from 'styled-components';
import theme from '../styles/theme';
import { RootStoreProvider } from '../providers/RootStoreProvider';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider theme={theme}>
            <RootStoreProvider hydrationData={pageProps.hydrationData}>
                <GlobalStyle />
                <Component {...pageProps} />
            </RootStoreProvider>
        </ThemeProvider>
    );
}

export default MyApp;
