import Head from 'next/head';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { books } from '@/books';

export default function ReadingList() {
	return (
		<>
			<Head>
				<title>goosenet - Reading List</title>
				<meta name='description' content='Goosenet by 0xGenghisGoose' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main className='min-h-screen mx-auto border-red-500 border-4 bg-gray-800 text-white relative'>
				{/* Nav */}
				<Nav />

				<h2 className='text-center text-3xl md:text-4xl text-red-500 font-bold tracking-widest pt-4'>
					READING LIST
				</h2>
				<br />
				<h4 className='text-center text-md lg:text-xl font-semibold tracking-wider pb-4 m-6 mx-72 lg:mx-96 border-b border-dotted border-slate-500/60'>
					All of my <span className='text-red-500'>favorite</span> books in no
					particular order
				</h4>

				<div className='text-center space-y-4'>
					{books.map((book) => (
						<div key={book.title}>
							<Link href={book.link}>
								<span className='text-red-500 font-semibold'>{book.title}</span>
								<br />
								{book.author}
							</Link>
						</div>
					))}
				</div>

				{/* Footer */}
				<Footer />
			</main>
		</>
	);
}
