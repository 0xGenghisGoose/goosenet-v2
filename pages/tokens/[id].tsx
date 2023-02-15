import Head from 'next/head';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Token from '@/components/Token';
import useSWR from 'swr';
import { idCoinAPI, fetcher } from '@/utils';
import { useRouter } from 'next/router';

export default function TokenPage() {
	const router = useRouter();
	const { id } = router.query;

	let coinAPI = `${idCoinAPI}/${id}`;
	const { data } = useSWR(coinAPI, fetcher);

	return (
		<>
			<Head>
				<title>{id}</title>
				<meta name='description' content='Goosenet by 0xGenghisGoose' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main className='min-h-screen mx-auto border-red-500 border-4 bg-gray-800 text-white relative'>
				{/* Nav */}
				<Nav />

				<div className='border-2 border-orange-400 flex flex-col h-[100%] w-[100%]'>
					<Token id={id} token={data} />
				</div>

				{/* Footer */}
				<Footer />
			</main>
		</>
	);
}

// To Do: Add serverSideProps for this to make the market data call
