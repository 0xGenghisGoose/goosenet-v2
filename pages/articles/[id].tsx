import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import Head from 'next/head';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Article from '@/components/Article';

import { getDoc, DocumentData, doc } from 'firebase/firestore';
import { db } from '@/firebase';

// This will be the specific article page, that renders the article component in the layout (use std layout)
// Also makes the fetch from the db & passes as props to article component
// Essentially the styling for the specific article page
export default function ArticlePage() {
	const [articleData, setArticleData] = useState<DocumentData | undefined>({});
	const router = useRouter();
	const { id } = router.query;

	useEffect(() => {
		async function getArticle() {
			const snappy = await getDoc(doc(db, 'articles', id));
			// To Do: might need to set small timeout here
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

				{/* Hamburger menu for small screens */}

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
