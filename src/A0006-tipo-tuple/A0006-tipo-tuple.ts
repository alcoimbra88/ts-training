const dadosClientes1: readonly [number, string] = [1, 'Alan'];
const dadosClientes2: [number, string, string] = [1, 'Alan', 'Coimbra'];
const dadosClientes3: [number, string, string?] = [1, 'Aline'];
const dadosClientes4: [number, string, ...string[]] = [1, 'Henrique'];

// Nao pode ser alterado pois é READONLY
//dadosClientes1[0] = 100;
//dadosClientes1[1] = 'Coimbra';

console.log(dadosClientes1);
console.log(dadosClientes2);
console.log(dadosClientes3);
console.log(dadosClientes4);

//readonly
const array1: readonly string[] = ['Alan', 'Coimbra'];
const array2: ReadonlyArray<string> = ['Alan', 'Coimbra'];

console.log(array1, array2);
