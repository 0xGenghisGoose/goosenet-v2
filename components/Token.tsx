export default function Token({ token }: any) {
	return (
		<>
			<div className='text-center items-center flex flex-col'>
				<div className='border border-green-400'>
					<img
						src={token?.image.large}
						alt='token-img'
						className='border border-purple-300 text-center'></img>
				</div>

				{/* To Do: Grid for items below OR a modal - draw it out */}
				<div className=''>
					<h1 className='text-white'>{token?.name}</h1>
					<h1>{token?.market_data.current_price.usd}</h1>
					<h1>{token?.market_data.total_volume.usd}</h1>
					<h1>{token?.market_data.high_24h.usd}</h1>
					<h1>{token?.market_data.low_24h.usd}</h1>
					<h1>{token?.market_data.ath.usd}</h1>
					<h1>{token?.market_data.ath_change_percentage.usd}</h1>
				</div>
			</div>
		</>
	);
}
