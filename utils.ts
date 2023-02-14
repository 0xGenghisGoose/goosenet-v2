// Helper function to display API results properly
export function parseNum(n: number): string {
	let res;

	if (n >= 0.01) {
		res = Number(parseFloat(n.toString()).toFixed(2)).toLocaleString('en');
	} else {
		res = Number(parseFloat(n.toString()).toFixed(8)).toString();
	}

	return res;
}

// Fetcher for SWR
export const fetcher = (apiURL: string) =>
	fetch(apiURL).then((res) => res.json());

// API Endpoint for price feeds
export const fullCoinAPI =
	'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false';

// API Endpoint by ID
export const idCoinAPI = 'https://api.coingecko.com/api/v3/coins';
