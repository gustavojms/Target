// 2 Questão

function CalculoFibonacci (n) {
    let fibonacci = [];
    fibonacci[0] = 0;
    fibonacci[1] = 1;
    for (let i = 2; i <= n; i++) {
        fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
    }
    return fibonacci[n];
}
let resultado = CalculoFibonacci(10);
console.log(resultado);

// 3 Questão

let faturamento = [
	{
		"dia": 1,
		"valor": 22174.1664
	},
	{
		"dia": 2,
		"valor": 24537.6698
	},
	{
		"dia": 3,
		"valor": 26139.6134
	},
	{
		"dia": 4,
		"valor": 0.0
	},
	{
		"dia": 5,
		"valor": 0.0
	},
	{
		"dia": 6,
		"valor": 26742.6612
	},
	{
		"dia": 7,
		"valor": 0.0
	},
	{
		"dia": 8,
		"valor": 42889.2258
	},
	{
		"dia": 9,
		"valor": 46251.174
	},
	{
		"dia": 10,
		"valor": 11191.4722
	},
	{
		"dia": 11,
		"valor": 0.0
	},
	{
		"dia": 12,
		"valor": 0.0
	},
	{
		"dia": 13,
		"valor": 3847.4823
	},
	{
		"dia": 14,
		"valor": 373.7838
	},
	{
		"dia": 15,
		"valor": 2659.7563
	},
	{
		"dia": 16,
		"valor": 48924.2448
	},
	{
		"dia": 17,
		"valor": 18419.2614
	},
	{
		"dia": 18,
		"valor": 0.0
	},
	{
		"dia": 19,
		"valor": 0.0
	},
	{
		"dia": 20,
		"valor": 35240.1826
	},
	{
		"dia": 21,
		"valor": 43829.1667
	},
	{
		"dia": 22,
		"valor": 18235.6852
	},
	{
		"dia": 23,
		"valor": 4355.0662
	},
	{
		"dia": 24,
		"valor": 13327.1025
	},
	{
		"dia": 25,
		"valor": 0.0
	},
	{
		"dia": 26,
		"valor": 0.0
	},
	{
		"dia": 27,
		"valor": 25681.8318
	},
	{
		"dia": 28,
		"valor": 1718.1221
	},
	{
		"dia": 29,
		"valor": 13220.495
	},
	{
		"dia": 30,
		"valor": 8414.61
	}
];

function menorValor (faturamento) {
    let menor = faturamento[0].valor;
    for (let i = 0; i < faturamento.length; i++) {
        if (faturamento[i].valor < menor && faturamento[i].valor != 0) {	
            menor = faturamento[i].valor;
        }
    }
    return menor;
}

console.log(menorValor(faturamento));

function maiorValor (faturamento) {
    let maior = faturamento[0].valor;
    for (let i = 0; i < faturamento.length; i++) {
        if (faturamento[i].valor > maior && faturamento[i].valor != 0) {	
            maior = faturamento[i].valor;
        }
    }
    return maior;
}

console.log(maiorValor(faturamento));

function diasComValorMaiorMedia (faturamento) {
    let dias = [];
    let media = 0;
    for (let i = 0; i < faturamento.length; i++) {
        media += faturamento[i].valor;
    }
    media = media / faturamento.length;
    for (let i = 0; i < faturamento.length; i++) {
        if (faturamento[i].valor > media) {
            dias.push(faturamento[i].dia);
        }
    }
    return dias;
}

console.log(diasComValorMaiorMedia(faturamento));

// 4 Questão

let SP = (67.836,43)
let RJ = (36.678,66)
let MG = (29.229,88)
let ES = (27.165,48)
let Outros = (19.849,53)
let total = (SP + RJ + MG + ES + Outros)

function porcentagem (valor, total) {
    return (valor * 100) / total;
}

console.log(porcentagem(SP, total));

// 5 Questão

function reverterString (string) {
    let novaString = "";
    for (let i = string.length - 1; i >= 0; i--) {
        novaString += string[i];
    }
    return novaString;
}

console.log(reverterString("target"));