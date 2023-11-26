import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.scss';
import { Toaster } from 'react-hot-toast';
import { GeneralStateProvider } from '@state/general';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Organiser</title>
        <link rel="shortcut icon" href="/icon.png"></link>
      </Head>
      <main className="app">
        <GeneralStateProvider>
          <Component {...pageProps} />
          <Toaster position={'top-center'} />
        </GeneralStateProvider>
      </main>
    </>
  );
}

export default CustomApp;
