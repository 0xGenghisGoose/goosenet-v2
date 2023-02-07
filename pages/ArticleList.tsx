import { useState, useEffect } from 'react';
import Head from 'next/head';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

import {
	doc,
	onSnapshot,
	orderBy,
	query,
	collection,
} from 'firebase/firestore';
import { db } from '@/firebase';

export default function ArticleList() {
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

				<h2 className='text-center text-4xl text-red-500 font-bold tracking-widest py-4 mx-96 border-b border-dotted border-slate-500/60'>
					LATEST ARTICLES
				</h2>

				<div className='justify-center'>
					<div className='p-2 pb-8 m-4 text-center text-lg min-w-screen'>
						{/* {data?.map((token: any) => (
							<FeedCard key={token.id} token={token}></FeedCard>
						))} */}
					</div>
				</div>

				{/* Footer */}
				<Footer />
			</main>
		</>
	);
}
