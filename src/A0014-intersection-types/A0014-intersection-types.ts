type TemNome = { nome: string };
type TemSobrenome = { sobrenome: string };
type TemIdade = { idade: number };
type Pessoa = TemNome & TemSobrenome & TemIdade;

//type AB = 'A' | 'B';
//type AC = 'A' | 'C';
//type Intersecao = AB & AC;

const pessoa: Pessoa = {
  nome: 'Alan',
  sobrenome: 'Coimbra',
  idade: 33,
};

console.log(pessoa);

export { pessoa };
