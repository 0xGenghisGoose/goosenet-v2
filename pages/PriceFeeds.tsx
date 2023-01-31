import Head from 'next/head';
import Nav from '@/components/Nav';
import useSWR from 'swr';

// API call to CoinGecko - maps coins out & passes data to individual component - when token selected, routed to own personal page w/ dynamic routing

// Will need same standard layout
export default function PriceFeeds() {
	const coinAPI =
		'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false';

	const fetcher = (apiURL: string) => fetch(apiURL).then((res) => res.json());
	const { data } = useSWR(coinAPI, fetcher);
	console.log(data);

	return (
		<>
			<Head>
				<title>goosenet</title>
				<meta name='description' content='Goosenet by 0xGenghisGoose' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main className='min-h-screen mx-auto border-red-500 border-4 bg-gray-800 text-white'>
				{/* Nav */}
				<Nav />

				<div className='flex border-2 border-emerald-600 justify-center p-2'>
					<ul>
						{data?.map((token: any) => (
							<li key={token.id} className='text-white h-5'>
								{token.name} - {token.symbol} - {token.market_cap}
							</li>
						))}
					</ul>
				</div>

				{/* Footer */}
			</main>
		</>
	);
}
