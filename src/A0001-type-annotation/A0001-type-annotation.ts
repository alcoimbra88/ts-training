
// Tipos básicos (aqui ocorre inferencia de tipos)
let nome: string = 'Alan'; // Qualquer tipo de strings: '' "" ``
let idade: number = 30; // 10, 1.5 , -5.55 , 0xf00d, 0b1010, 0o7744
let adulto: boolean = true; // true ou false
let simbolo: symbol = Symbol('qualquer-symbol'); // symbol
// let big: bigint = 10n; // bigint

// Arrays

let arrayDeNumeros: Array<number> = [1, 2, 3];
let arrayDeNumeros2: number[] = [1, 2, 3];
let arrayDeStrings: Array<string> = ['um', 'dois', 'tres']
let arrayDeStrings2: string[] = ['um', 'dois', 'tres']

// Objetos
let pessoa: { nome: string, idade: number, adulto?: boolean } = {
  nome: 'Alan',
  idade: 33,
  adulto: true
}

// Funções
function soma(x: number, y: number) {
  return x + y;
}
const result = soma(2, 2);

const soma2: (x: number, y: number) => number = (x, y) => x + y;



// =================================================================
console.log(pessoa, result);
