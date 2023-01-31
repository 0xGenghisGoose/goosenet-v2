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
					className='h-8 border flex justify-center border-green-400 mr-24'
				/>

				{/* Name & Symbol */}
				<div className='flex items-center text-center justify-center mr-0 border border-purple-300 w-[25%]'>
					{token?.name} ({token?.symbol})
				</div>

				{/* Current Price Data */}
				<div className='border border-red-500 mr-24 w-[30%]'>
					Current Price: ${token?.current_price.toFixed(2)}
				</div>

				{/* High/Low Price Data */}
				<div className='flex-col w-7/12'>
					High (24h): ${token?.high_24h.toFixed(2)}
					<br />
					Low (24h): ${token?.low_24h.toFixed(2)}
				</div>
			</div>
		</>
	);
}
