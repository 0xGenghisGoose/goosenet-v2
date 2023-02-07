import { db } from '@/firebase';
import {
	addDoc,
	doc,
	collection,
	onSnapshot,
	serverTimestamp,
} from 'firebase/firestore';
import { faker } from '@faker-js/faker';

export async function runArticleSeed() {
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

runArticleSeed();
