export default function (car) {
	const addressShorten = car.address.split(",").slice(1);

	return addressShorten;
}
