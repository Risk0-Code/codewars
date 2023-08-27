const zeroFuel = (distanceToPump, mpg, fuelLeft) =>
	distanceToPump < mpg * fuelLeft || distanceToPump === mpg * fuelLeft;

console.log(zeroFuel(50, 9, 5));
