import useSWR from 'swr';
import { timeSeries24hAPI, fetcher } from '@/utils';

// To Do: Pull data from API in useEffect - set state with what Recharts needs - dynamically load ID from router to determine which asset to render chart for (pass it from Token page) - render chart to be exported to specific chart page
export default function PriceChart({ id }: any) {
	const { data } = useSWR(timeSeries24hAPI(id), fetcher);
	console.log(data.prices);

	return <div>PriceChart</div>;
}
