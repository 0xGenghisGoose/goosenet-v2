import Head from 'next/head';
import Nav from '@/components/Nav';
import Content from '@/components/Content';
import Footer from '@/components/Footer';

// For testing purposes only
import TestNav from '@/components/TestNav';

export default function Home() {
	return (
		<>
			<Head>
				<title>goosenet</title>
				<meta name='description' content='Goosenet by 0xGenghisGoose' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<main className='min-h-screen mx-auto border-red-500 border-4 bg-gray-800 text-white relative'>
				{/* Nav */}
				<Nav />

				{/* Hamburger menu for small screens */}

				{/* Content */}
				<Content />

				{/* Footer */}
				<Footer />
			</main>
		</>
	);
}
