import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import Head from 'next/head';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Article from '@/components/Article';

import { getDoc, DocumentData, doc } from 'firebase/firestore';
import { db } from '@/firebase';

export default function ArticlePage() {
	const [articleData, setArticleData] = useState<DocumentData | undefined>({});
	const router = useRouter();
	const { id } = router.query;

	useEffect(() => {
		async function getArticle() {
			// @ts-ignore
			const snappy = await getDoc(doc(db, 'articles', id));
			setArticleData(snappy.data());
			console.log(articleData);
		}
		getArticle();
	}, []);

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

				{/* Article Content */}

				<div className='flex'>
					<Article id={id} article={articleData} />
				</div>

				{/* Footer */}
				<Footer />
			</main>
		</>
	);
}
