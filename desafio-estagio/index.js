function encontrarNumeroNaoRepetido(array) {
	let freq = {};

	for (let num of array) {
		freq[num] = (freq[num] || 0) + 1;
	}
	let arrayfreq = [];
	for (let key in freq) {
		if (freq[key] !== 3) {
			arrayfreq.push(key);
		}
	}
	return arrayfreq;
}

function verificacaoPalindromo(str) {
	// Remove espaços em branco e converte a string para minúsculas
	str = str.replace(/\s/g, "").toLowerCase();

	// Inverte a string
	const strInvertida = str.split("").reverse().join("");

	// Verifica se a string original é igual à sua versão invertida
	return str === strInvertida;
}

function ordenarParesImpares(lista) {
	// Separa os números pares e ímpares
	const pares = lista.filter((num) => num % 2 === 0);
	const impares = lista.filter((num) => num % 2 !== 0);

	// Ordena os números pares e ímpares separadamente
	pares.sort((a, b) => a - b);
	impares.sort((a, b) => a - b);

	// Concatena os números pares e ímpares ordenados
	return pares.concat(impares);
}

function calcularFatorial(numero) {
	// Se o número for 0 ou 1, o fatorial é 1
	if (numero === 0 || numero === 1) {
		return 1;
	} else {
		// Inicializa o fatorial como 1
		let fatorial = 1;

		// Multiplica todos os números de 1 até o número dado para calcular o fatorial
		for (let i = 2; i <= numero; i++) {
			fatorial *= i;
		}

		return fatorial;
	}
}

function fibonacciComLoop(numero) {
	let fibonacciArray = [];

	// Adiciona os dois primeiros números da sequência
	fibonacciArray.push(1);
	fibonacciArray.push(1);

	// Constrói o restante da sequência
	for (let i = 2; i < numero; i++) {
		fibonacciArray.push(fibonacciArray[i - 1] + fibonacciArray[i - 2]);
	}

	return fibonacciArray;
}

let lista = [
	5, 3, 4, 3, 5, 5, 533, 32, 123123, 1323, 123, 123, 123, 123, 3, 0, 2, 4, 6, 7,
	8,
];

let numeroNaoRepetido = encontrarNumeroNaoRepetido(lista);

console.log("O número não repetido é:", numeroNaoRepetido);

let verificacaoPalindromoResposta = verificacaoPalindromo("arara");

console.log("verificacaoPalindromo: ", verificacaoPalindromoResposta);

let ordenarParesImparesResposta = ordenarParesImpares(lista);

console.log("ordenarParesImpares: ", ordenarParesImparesResposta);

let fatorial = calcularFatorial(6);

console.log("fatorial: ", fatorial);

let fibonaci = fibonacciComLoop(10);

console.log("fibonaci: ", fibonaci);
