function semRetorno(...args: string[]): void {
  console.log(args.join(' '));
}

const pessoa = {
  nome: 'Alan',
  sobrenome: 'Coimbra',

  exibirNome(): void {
    console.log(this.nome + ' ' + this.sobrenome)
  }
};


semRetorno('Alan', 'Coimbra');
pessoa.exibirNome();

export { pessoa }
