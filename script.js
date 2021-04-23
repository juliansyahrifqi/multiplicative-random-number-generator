const tbody = document.getElementById("result");
const asumsi = document.getElementById("asumsi");
const z0 = document.getElementById("seed");
const a = document.getElementById("a");
const m = document.getElementById("modulus");
const form = document.getElementById("form");
const totalNumber = document.getElementById("total");

function multiplicative(z0, a, m, randomNumbers, totalNumber) {
	randomNumbers[0] = z0;

	for(let i = 1; i < totalNumber; i++) {
		let temp = (randomNumbers[i-1] * a) % m;
 		randomNumbers.push(temp);
	}
}

function getRandomNumbers(z, m, result, totalNumber) {
	for(let i = 1; i < totalNumber; i++) {
		let temp = z[i] / m;
		result.push(temp);
	}
}

// for(let i = 0; i < totalNumber - 1; i++) {
// 	tbody.innerHTML += `
// 	<tr>
// 		<td>${i+1}</td>
// 		<td>${randomNumbers[i]}</td>
// 		<td>Z${i+1} = (${a} * ${randomNumbers[i]}) mod ${m} = ${randomNumbers[i+1]}</td>
// 		<td>U${i+1} = ${randomNumbers[i+1]} / ${m} = ${resultNumbers[i]} </td>
// 	</tr>
// 	`;
// }

// let z0 = 10118322;
// let a = 3500000;
// let m = 8500000;
// let totalNumber = 16;
let randomNumbers = [];
let resultNumbers = [];

// asumsi.innerHTML += `a = ${a}, m = ${m}, z0 = ${z0}`;

// for(let i = 0; i < totalNumber - 1; i++) {
// 	tbody.innerHTML += `
// 	<tr>
// 		<td>${i+1}</td>
// 		<td>${randomNumbers[i]}</td>
// 		<td>Z${i+1} = (${a} * ${randomNumbers[i]}) mod ${m} = ${randomNumbers[i+1]}</td>
// 		<td>U${i+1} = ${randomNumbers[i+1]} / ${m} = ${resultNumbers[i]} </td>
// 	</tr>
// 	`;
// }

form.addEventListener('submit', function(e) {
	e.preventDefault();
	
	multiplicative(z0.value, a.value, m.value, randomNumbers, totalNumber.value+1);
	getRandomNumbers(randomNumbers, m.value, resultNumbers, totalNumber.value+1);

	asumsi.innerHTML += `a = ${a.value}, m = ${m.value}, z0 = ${z0.value}`;

	for(let i = 0; i < totalNumber.value; i++) {
		tbody.innerHTML += `
		<tr>
			<td>${i+1}</td>
			<td>${randomNumbers[i]}</td>
			<td>Z${i+1} = (${a.value} * ${randomNumbers[i]}) mod ${m.value} = ${randomNumbers[i+1]}</td>
			<td>U${i+1} = ${randomNumbers[i+1]} / ${m.value} = ${resultNumbers[i]} </td>
		</tr>
		`;
	}
});