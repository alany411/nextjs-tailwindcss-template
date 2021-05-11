import Head from 'next/head';

const Home = (): JSX.Element => {
  return (
    <div className='flex flex-col items-center justify-center min-w-full min-h-screen space-y-16'>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className='flex flex-col items-center justify-center w-full max-w-5xl prose'>
        <h1>
          Welcome to{' '}
          <a href='https://nextjs.org' target='_blank' rel='noopener noreferrer'>
            Next.js
          </a>
          {' and '}
          <a href='https://tailwindcss.com/' target='_blank' rel='noopener noreferrer'>
            Tailwind CSS!
          </a>
        </h1>
        <p>
          Get started by editing <code className='px-2 py-3 bg-gray-100'>pages/index.js</code>
        </p>
      </main>
    </div>
  );
};

export default Home;
