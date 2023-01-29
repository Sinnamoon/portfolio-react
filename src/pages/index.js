import Head from 'next/head'
import {BsFillMoonStarsFill} from 'react-icons/bs';
import {AiFillTwitterCircle, AiFillLinkedin, AiFillGithub} from 'react-icons/ai';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Joan Glendinning Portfolio</title>
        <meta name="description" content="Joan Glendinning's Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head> 

      <main className='bg-white px-10'>
      <section className='  min-h-screen'>
        <nav className='bg-pink-100 rounded-full px-10 py-10 mb-12 flex justify-between dark:text-white'>
          <h1 className='font-burtons text-xl text-black'> Dev by joni </h1>
            <ul className='flex items-center'>
              <li> <BsFillMoonStarsFill className='text-black'/></li>
              <li> <a className='bg-gradient-to-r from-pink-400 to-teal-400 text-white px-4 py-2 rounded-full ml-8' href='#'> CV </a></li>
            </ul>
        </nav>
        sus
      </section>
      </main>      
    </div>
  );
}
 