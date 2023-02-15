import { useRouter } from 'next/router';
import { parseNum } from '@/utils';

type TokenResponse = {
	id: string;
	symbol: string;
	name: string;
	image: string;
	current_price: number;
	market_cap_rank: number;
	high_24h: number;
	low_24h: number;
	price_change_24h: number;
	price_change_percentage_24h: number;
	fully_diluted_valuation: number;
};

export default function FeedCard({ token }: { token: TokenResponse }) {
	const router = useRouter();

	return (
		<>
			<div
				id={token.id}
				className='text-white items-center border-b border-red-400/75 p-4 overflow-auto flex content-around hover:bg-slate-700'
				onClick={() => router.push(`/tokens/${token.id}`)}>
				{/* Image */}
				<img
					src={token.image}
					alt=''
					className='h-10 flex justify-center mr-24'
				/>

				{/* Name & Symbol */}
				<div className='flex items-center text-center justify-center mr-0 w-[25%]'>
					{token?.name} ({token?.symbol.toUpperCase()})
				</div>

				{/* Current Price Data */}
				<div className='mr-24 w-[30%]'>
					Current Price: ${parseNum(token.current_price)}
				</div>

				{/* High/Low Price Data */}
				<div className='flex-col w-3/12'>
					High (24h): ${parseNum(token?.high_24h)}
					<br />
					Low (24h): ${parseNum(token?.low_24h)}
					<br />
					{token?.price_change_percentage_24h > 0 ? (
						<span className='text-green-400'>
							{token?.price_change_percentage_24h.toFixed(2)}%
						</span>
					) : (
						<span className='text-red-500'>
							{token?.price_change_percentage_24h.toFixed(2)}%
						</span>
					)}
				</div>
			</div>
		</>
	);
}
