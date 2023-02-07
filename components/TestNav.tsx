import Link from 'next/link';
import SearchBar from './SearchBar';

import { db } from '@/firebase';
import {
	addDoc,
	doc,
	collection,
	onSnapshot,
	serverTimestamp,
} from 'firebase/firestore';
import { faker } from '@faker-js/faker';

export default function TestNav() {
	async function runArticleSeed() {
		console.log('Seeding database...');

		const exampleOne = await addDoc(collection(db, 'articles'), {
			title: 'My First Test Article',
			author: faker.name.fullName(),
			avatar: faker.image.avatar(),
			bannerImg:
				'https://g.foolcdn.com/editorial/images/719280/2023-man-pointing-at-an-abstract-stock-chart.jpg',
			timestamp: serverTimestamp(),
			metaTags: ['first', 'test'],
			content: faker.lorem.paragraphs(),
		});

		console.log('First example added, starting second...');

		const exampleTwo = await addDoc(collection(db, 'articles'), {
			title: 'My Second Test Article',
			author: faker.name.fullName(),
			avatar: faker.image.avatar(),
			bannerImg: 'https://cdn.mos.cms.futurecdn.net/YdFsXZgsagfMECEWk7qRTQ.jpg',
			timestamp: serverTimestamp(),
			metaTags: [],
			content: faker.lorem.paragraphs(),
		});

		console.log('Database successfully seeded with 2 articles!');
	}

	return (
		<div className='sticky top-0 w-full h-2/3 p-4 bg-gradient-to-r from-gray-700 via-slate-600 to-slate-700 border-b border-red-400/70'>
			<nav className='flex items-center'>
				<Link href='/'>
					<img src='/goosenet-01.png' alt='' className='h-10'></img>
				</Link>

				<ul className='flex justify-left items-center space-x-16 min-w-1/3 p-4 ml-auto'>
					<li className='hover:text-red-500'>Projects</li>
					<li className='hover:text-red-500'>
						<Link href='/PriceFeed' className='hover:text-red-500'>
							Price Feed
						</Link>
					</li>
					<li className='hover:text-red-500'>Articles</li>
					<SearchBar />
				</ul>
			</nav>
			{/* Test Button for seeding data */}
			<button onClick={runArticleSeed}>Press Me To Seed Database</button>
		</div>
	);
}
