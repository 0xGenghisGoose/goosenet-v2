import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import PercentageTable from './PercentageTable';
import PriceChart from './PriceChart';
import { parseNum } from '@/utils';

dayjs.extend(relativeTime);

export default function Token({ token, id }: any) {
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

			{/* To Do: make styling rule for all these h1s */}
			<div className='border-2 border-purple-500 flex items-center justify-evenly p-14'>
				<div className='border border-green-500 p-16 rounded-xl flex flex-col text-center'>
					{/* <h1>{token?.name} 24 Hour Price Chart</h1> */}
					<PriceChart id={id} />
					<PercentageTable token={token} />
				</div>

				{/* Name */}
				<div className='border border-yellow-500 rounded-xl p-16'>
					<h1 className='text-3xl pb-1 text-center text-red-500 border-b border-dotted border-slate-500/80'>
						{token?.name} Price Statistics
					</h1>

					{/* Current Price */}
					<h1 className='text-lg pb-1 pt-6 border-b border-dotted border-slate-500/80'>
						Current: ${parseNum(token?.market_data.current_price?.usd)}
					</h1>

					{/* High 24h */}
					<h1 className='text-lg py-1 border-b border-dotted border-slate-500/80'>
						High (24h): ${parseNum(token?.market_data.high_24h.usd)}
					</h1>

					{/* Low 24h */}
					<h1 className='text-lg py-1 border-b border-dotted border-slate-500/80'>
						Low (24h): ${parseNum(token?.market_data.low_24h.usd)}
					</h1>

					{/* Total Volume */}
					<h1 className='text-lg py-1 border-b border-dotted border-slate-500/80'>
						Total Volume: ${parseNum(token?.market_data.total_volume.usd)}
					</h1>

					{/* Market Cap */}
					<h1 className='text-lg py-1 border-b border-dotted border-slate-500/80'>
						Market Cap: ${parseNum(token?.market_data?.market_cap.usd)}
					</h1>

					{/* ATH + date */}
					<h1 className='text-lg py-1 border-b border-dotted border-slate-500/80'>
						All Time High: ${parseNum(token?.market_data.ath.usd)}{' '}
						{token?.market_data?.ath_change_percentage > 0 ? (
							<span className='text-green-400 pl-1'>
								{token?.market_data.ath_change_percentage.usd.toFixed(2)}%
							</span>
						) : (
							<span className='text-red-500 pl-1'>
								{token?.market_data.ath_change_percentage.usd.toFixed(2)}%
							</span>
						)}
						<br />
						<span className='text-sm'>
							{dayjs(token?.market_data?.ath_date.usd).format('DD/MM/YYYY')} (
							{dayjs(token?.market_data?.ath_date.usd).fromNow()})
						</span>
					</h1>

					{/* ATL + date */}
					<h1 className='text-lg py-1 border-b border-dotted border-slate-500/80'>
						All Time Low: ${parseNum(token?.market_data.atl.usd)}{' '}
						{
							<span className='text-green-400 pl-1'>
								{parseNum(
									token?.market_data.atl_change_percentage.usd.toFixed(2)
								)}
								%
							</span>
						}
						<br />
						<span className='text-sm'>
							{dayjs(token?.market_data?.atl_date.usd).format('DD/MM/YYYY')} (
							{dayjs(token?.market_data?.atl_date.usd).fromNow()})
						</span>
					</h1>
				</div>
			</div>
		</>
	);
}
