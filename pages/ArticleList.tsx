import { useState, useEffect } from 'react';
import Head from 'next/head';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import ArticleCard from '@/components/ArticleCard';

import {
	doc,
	getDocs,
	onSnapshot,
	orderBy,
	query,
	collection,
	DocumentData,
} from 'firebase/firestore';
import { db } from '@/firebase';

export default function ArticleList() {
	const [articles, setArticles] = useState<DocumentData[]>([]);

	useEffect(() => {
		async function work() {
			const snappy = await getDocs(collection(db, 'articles'));
			setArticles(snappy.docs);
		}
		work();
	}, []);

	// useEffect(() => {
	// 	onSnapshot(
	// 		query(collection(db, 'articles'), orderBy('timestamp', 'desc')),
	// 		(snapshot) => setArticles(snapshot.docs)
	// 	);
	// }, []);

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

				{articles.length > 0 && (
					<div className='justify-center text-center'>
						<div className='p-8 pb-12 m-4 mx-32 text-center'>
							{articles.map((article: any) => (
								<ArticleCard
									key={article.data().id}
									articles={article}></ArticleCard>
							))}
						</div>
					</div>
				)}

				{/* Footer */}
				<Footer />
			</main>
		</>
	);
}
