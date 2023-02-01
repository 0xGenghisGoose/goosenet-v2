import Head from 'next/head';
import useSWR from 'swr';
import Nav from '@/components/Nav';
import FeedCard from '@/components/FeedCard';
import Footer from '@/components/Footer';
import { coinAPI, fetcher } from '@/utils';

// API call to CoinGecko - maps coins out & passes data to individual component - when token selected, routed to own personal page w/ dynamic routing

export default function PriceFeed() {
	const { data } = useSWR(coinAPI, fetcher);

	return (
		<>
			<Head>
				<title>goosenet</title>
				<meta name='description' content='Goosenet by 0xGenghisGoose' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			{/* To Do: Move nav out of main? */}
			<main className='min-h-screen mx-auto border-red-500 border-4 bg-gray-800 text-white relative'>
				{/* Nav */}
				<Nav />

				<h2 className='text-center text-4xl text-red-500 font-bold tracking-widest pt-4'>
					PRICE FEED
				</h2>
				<br />
				<h4 className='text-center text-xl font-semibold tracking-wider pb-4 m-6 mx-96 border-b border-dotted border-slate-500/60'>
					Top <span className='text-red-500'>100</span> Tokens By Market Cap
				</h4>

				<div className='justify-center'>
					<div className='p-2 pb-8 m-4 text-center text-lg min-w-screen'>
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
