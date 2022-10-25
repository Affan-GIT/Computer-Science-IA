import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <div className='overflow-hidden'>
      <Head>
        <title>Store</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
    </div>
  );
};

export default Home;
