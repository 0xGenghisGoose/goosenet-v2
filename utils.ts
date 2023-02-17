// Helper function to display API results properly
export function parseNum(n: number): string {
	let res;

	if (n >= 0.01) {
		res = Number(parseFloat(n.toString()).toFixed(2)).toLocaleString('en');
	} else {
		res = Number(parseFloat(n?.toString()).toFixed(8)).toString();
	}

	return res;
}

// Fetcher for SWR
export const fetcher = async (apiURL: string) =>
	await fetch(apiURL).then((res) => res.json());

// API Endpoint for price feeds
export const fullCoinAPI =
	'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false';

// API Endpoint by ID
export const idCoinAPI = 'https://api.coingecko.com/api/v3/coins';

// UNIX => Time Timestamp Converter
export const toTimeFromUNIX = (timestamp: number): string => {
	return new Date(timestamp).toLocaleTimeString();
};

// UNIX => Date Timestamp Converter
export const toDateFromUNIX = (timestamp: number): string => {
	let date = new Date(timestamp).toLocaleDateString();
	console.log(date);
	return date;
};
