import useSWR from 'swr';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export function useToken(id: string) {
	const { data, error, isLoading } = useSWR('', fetcher);
}

export function parseNum(n: number): string {
	let res;

	if (n > 0.01) {
		res = Number(parseFloat(n.toString()).toFixed(2)).toLocaleString('en');
	} else {
		res = Number(parseFloat(n.toString()).toFixed(4)).toLocaleString('en');
	}

	return res;
}
