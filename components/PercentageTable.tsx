export default function PercentageTable({ token }: any) {
	return (
		<>
			<table className='border border-pink-300 mt-8'>
				<tr className='bg-slate-500/50 p-1'>
					<th className='p-1'>24h</th>
					<th>7d</th>
					<th>14d</th>
					<th>30d</th>
					<th>1y</th>
				</tr>

				<tr className='bg-slate-500/70'>
					<td className='p-1 px-3'>
						{parsePercentage(token?.market_data.price_change_percentage_24h)}
					</td>
					<td className='p-1 px-3'>
						{parsePercentage(token?.market_data.price_change_percentage_7d)}
					</td>
					<td className='p-1 px-3'>
						{parsePercentage(token?.market_data.price_change_percentage_14d)}
					</td>
					<td className='p-1 px-3'>
						{parsePercentage(token?.market_data.price_change_percentage_30d)}
					</td>
					<td className='p-1 px-3'>
						{parsePercentage(token?.market_data.price_change_percentage_1y)}
					</td>
				</tr>
			</table>
		</>
	);
}

// Helper function to display price percentages properly
const parsePercentage = (num: number) => {
	if (num) {
		return num > 0 ? (
			<span className='text-green-400'>{num.toFixed(2)}%</span>
		) : (
			<span className='text-red-500'>{num.toFixed(2)}%</span>
		);
	}
};
