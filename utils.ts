import useSWR from 'swr';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export function useToken(id: string) {
	const { data, error, isLoading } = useSWR('', fetcher);
}
