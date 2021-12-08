let x = 10; // eslint-disable-line
x = 0b1010;
const y = 10;
let a = 100 as const; // eslint-disable-line
const pessoa = {
  nome: 'Alan' as const,
  sobrenome: 'Coimbra',
};

function escolhaCor(cor: 'vermelho' | 'amarelo' | 'azul'): string {
  return cor;
}

console.log(x, y, pessoa, escolhaCor('vermelho'));

export default 1;
