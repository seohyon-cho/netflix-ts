import Head from 'next/head';
import type { NextPage } from 'next';
import Header from '@/components/Header';

const Home: NextPage = () => {
	return (
		<div>
			<Head>
				<title>NETFLIX</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Header />
			<main>
				<h1 className=''>MainPage</h1>
			</main>
		</div>
	);
};

export default Home;
