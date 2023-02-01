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
			<div
				id={token.id}
				className='text-white items-center border border-orange-400 p-4 overflow-auto flex content-around'>
				{/* Image */}
				<img
					src={token.image}
					alt=''
					className='h-10 border flex justify-center border-green-400 mr-24'
				/>

				{/* Name & Symbol */}
				<div className='flex items-center text-center justify-center mr-0 border border-purple-300 w-[25%]'>
					{token?.name} ({token?.symbol})
				</div>

				{/* Current Price Data */}
				<div className='border border-red-500 mr-24 w-[30%]'>
					Current Price: $
					{Number(parseFloat(token?.current_price).toFixed(2)).toLocaleString(
						'en'
					)}
				</div>

				{/* High/Low Price Data */}
				<div className='flex-col w-7/12'>
					High (24h): $
					{Number(parseFloat(token?.high_24h).toFixed(2)).toLocaleString('en')}
					<br />
					Low (24h): $
					{Number(parseFloat(token?.low_24h).toFixed(2)).toLocaleString('en')}
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
