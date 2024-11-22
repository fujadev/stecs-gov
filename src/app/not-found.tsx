'use client';

import type { FC } from 'react';
import { useRouter } from 'next/navigation';

interface RootLayoutProps {
  params: {
    locale: string;
  };
}

export const NotFound: FC<RootLayoutProps> = ({ params: { locale } }) => {
  const router = useRouter();

  const backHome = (): void => router.push('/');

  return (
    <html lang={locale}>
      <body className='text-center h-screen flex flex-col  lg:max-w-[500px] mx-auto items-center justify-center'>
        <h1 className='mt-10 font-semibold'>404, Page not found.</h1>
        <button
          className='mt-4 bg-dark-700 hover:bg-dark-400 text-white font-bold py-2 px-4 rounded-sm cursor-pointer border-none'
          onClick={backHome}
        >
          Back to home
        </button>
      </body>
    </html>
  );
};

export default NotFound;
