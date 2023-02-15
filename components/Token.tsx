export default function Token({ token }: any) {
	return (
		<>
			<div className=''>
				<div className='border border-green-400 flex items-center justify-center space-x-6 p-4'>
					<img
						src={token?.image.small}
						alt='token-img'
						className='border border-purple-300 text-center'></img>
					<h1 className='text-2xl text-red-500 tracking-wider'>
						{token?.name} - {token?.symbol.toUpperCase()}
					</h1>
				</div>

				{/* To Do: Grid for items below OR a modal - draw it out */}
				<div className=''>
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
