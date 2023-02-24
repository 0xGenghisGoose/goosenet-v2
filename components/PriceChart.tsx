import useSWR from 'swr';
import { fetcher, toDateFromUNIX, toTimeFromUNIX, parseNum } from '@/utils';
import {
	AreaChart,
	Area,
	ResponsiveContainer,
	CartesianGrid,
	XAxis,
	YAxis,
	Tooltip,
} from 'recharts';

export default function PriceChart({ id }: any) {
	const { data } = useSWR(
		`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=1`,
		fetcher
	);

	const CustomTooltip = ({ active, payload }: any) => {
		if (active && payload && payload.length) {
			return (
				<div className='custom-tooltip p-1'>
					<p className='price'>{`$${parseNum(payload[0].value)}`}</p>
					<p className='date'>{`${toDateFromUNIX(payload[0].payload[0])}`}</p>
					<p className='time'>{`${toTimeFromUNIX(payload[0].payload[0])}`}</p>
				</div>
			);
		}

		return null;
	};

	return (
		<div>
			{data && (
				<ResponsiveContainer
					className='border rounded-lg shadow-xl border-red-500'
					height='100%'
					width='100%'>
					<AreaChart
						data={data?.prices}
						margin={{ top: 15, right: 15, bottom: 5, left: -45 }}>
						<defs>
							<linearGradient id='areaChart' x1='0' y1='0' x2='0' y2='1'>
								<stop offset='70%' stopColor='#fc03d3' stopOpacity={0.8} />
								<stop offset='100%' stopColor='#fc03d3' stopOpacity={0.2} />
							</linearGradient>
						</defs>

						<Area
							type='monotone'
							dataKey='1'
							strokeWidth={0}
							dot={false}
							stroke='#eb34ba'
							fillOpacity={0.8}
							fill='url(#areaChart)'
						/>

						<CartesianGrid
							stroke='#ccc'
							strokeDasharray='3 3'
							horizontal={false}
							vertical={false}
						/>

						<Tooltip content={<CustomTooltip />} />

						<XAxis tick={false} />
						<YAxis type='number' tick={false} domain={['dataMin', 'dataMax']} />
					</AreaChart>
				</ResponsiveContainer>
			)}
		</div>
	);
}
