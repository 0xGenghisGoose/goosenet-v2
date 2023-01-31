type TokenResponse = {
	id: string;
	symbol: string;
	image: string;
	current_price: string;
	market_cap_rank: number;
	high_24h: number;
	low_24h: number;
	price_change_24h: number;
	price_change_percentage_24h: number;
};

export default function FeedCard({ token }) {
	return (
		<>
			<li
				id={token.id}
				className='text-white h-10 border border-orange-400 text-center m-8 p-4 flex items-center justify-center'>
				<img src={token.image} className='h-4 border border-green-400' />
				{token?.name}
				{token?.symbol}
				{token?.current_price}
			</li>
		</>
	);
}
