import Head from 'next/head';
import useSWR from 'swr';
import Nav from '@/components/Nav';
import FeedCard from '@/components/FeedCard';
import Footer from '@/components/Footer';
import { fullCoinAPI, fetcher } from '@/utils';

export default function PriceFeed() {
	const { data } = useSWR(fullCoinAPI, fetcher);

	return (
		<>
			<Head>
				<title>goosenet - Price Feed</title>
				<meta name='description' content='Goosenet by 0xGenghisGoose' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main className='min-h-screen mx-auto border-red-500 border-4 bg-gray-800 text-white relative'>
				{/* Nav */}
				<Nav />

				<h2 className='text-center text-3xl md:text-4xl text-red-500 font-bold tracking-widest pt-4'>
					PRICE FEED
				</h2>
				<br />
				<h4 className='text-center text-md lg:text-xl font-semibold tracking-wider pb-4 m-6 mx-72 lg:mx-96 border-b border-dotted border-slate-500/60'>
					Top <span className='text-red-500'>100</span> Tokens By Market Cap
				</h4>

				<div className='justify-center'>
					<div className='p-2 pb-8 m-4 text-center text-md lg:text-lg min-w-screen'>
						{data?.map((token: any) => (
							<FeedCard key={token.id} token={token}></FeedCard>
						))}
					</div>
				</div>

				{/* Footer */}
				<Footer />
			</main>
		</>
	);
}
