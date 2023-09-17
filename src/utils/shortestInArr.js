export default function shortestInArr(arr) {
	const shortest = arr.reduce((a, b) => (a.length <= b.length ? a : b));

	return shortest;
}
