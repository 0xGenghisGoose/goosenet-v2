export function parseNum(n: number): string {
	let res;

	if (n >= 0.01) {
		res = Number(parseFloat(n.toString()).toFixed(2)).toLocaleString('en');
	} else {
		res = Number(parseFloat(n.toString()).toFixed(8)).toString();
	}

	return res;
}
