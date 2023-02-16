import { parseNum } from '@/utils';

export default function Token({ token }: any) {
	return (
		<>
			<div className='flex items-center justify-center space-x-6 p-4'>
				<img
					src={token?.image.small}
					alt='token-img'
					className='text-center'></img>
				<h1 className='text-2xl text-red-500 tracking-wider'>
					{token?.name} - {token?.symbol.toUpperCase()}
				</h1>
			</div>

			{/* To Do: make the chart div take up as much space as it will, then work through the market data div */}
			{/* To Do: make styling rule for all these h1s */}
			<div className='border-2 border-purple-500 flex items-center justify-evenly p-8'>
				<div className='border border-green-500'>
					<h1>Chart goes here</h1>
				</div>

				<div className='border border-yellow-500 rounded-xl p-16'>
					<h1 className='text-3xl pb-1 text-center text-red-500 border-b border-dotted border-slate-500/80'>
						{token?.name} Price Statistics
					</h1>

					<h1 className='text-lg pb-1 pt-6 border-b border-dotted border-slate-500/80'>
						Current: ${parseNum(token?.market_data.current_price?.usd)}
					</h1>

					<h1 className='text-lg py-1 border-b border-dotted border-slate-500/80'>
						High (24h): ${parseNum(token?.market_data.high_24h.usd)}
					</h1>

					<h1 className='text-lg py-1 border-b border-dotted border-slate-500/80'>
						Low (24h): ${parseNum(token?.market_data.low_24h.usd)}
					</h1>

					<h1 className='text-lg py-1 border-b border-dotted border-slate-500/80'>
						Total Volume: ${parseNum(token?.market_data.total_volume.usd)}
					</h1>

					<h1 className='text-lg'>
						All Time High: ${parseNum(token?.market_data.ath.usd)}{' '}
						{token?.market_data?.ath_change_percentage > 0 ? (
							<span className='text-green-400 pl-1 font-semibold'>
								{token?.market_data.ath_change_percentage.usd.toFixed(2)}%
							</span>
						) : (
							<span className='text-red-500 pl-1 font-semibold'>
								{token?.market_data.ath_change_percentage.usd.toFixed(2)}%
							</span>
						)}
					</h1>
				</div>
			</div>
		</>
	);
}
