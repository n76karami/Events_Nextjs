import Head from 'next/head'
import { Inter } from '@next/font/google'
import Home_page from '@/src/components/home/Home_page'

const inter = Inter({ subsets: ['latin'] })

export default function Home({data}) {
  return (
    <div>
      <Head>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Home_page data={data} />
    </div>
  );
}

export const getServerSideProps = async () => {

  const {events_categories} = await import('/data/data.json');
  console.log(events_categories) // khoroji dar cmd 
  // const res = await fetch('url'); age api dashtim
  // const data = await res.json(); 
  return {
    props: {
      data: events_categories,
    }
  }
}
