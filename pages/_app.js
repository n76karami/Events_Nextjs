import Main_layout from '@/src/components/layout/main_layout'
import '@/styles/globals.css';
import '@/styles/general.sass';
import Head from 'next/head';


export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Events App</title>
      </Head>
      <Main_layout>
        <Component {...pageProps} />
      </Main_layout>
    </>
  )
}
