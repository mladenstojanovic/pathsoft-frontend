import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { CssBaseline } from '@mui/material';
import { appWithTranslation } from 'next-i18next';
import type { AppProps } from 'next/app';
import { Header } from '../components/Header';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return <>
    <CssBaseline />
    <Header />
    <Component {...pageProps} /></>;
}

export default appWithTranslation(MyApp);
