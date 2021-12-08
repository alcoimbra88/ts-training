export function muliplicaArgs(...args: Array<number>): number{
  return args.reduce((ac,valor)=> ac* valor, 1)
}

export function concatenaStrings(...args: string[]): string{
  return args.reduce((ac,valor)=> ac + valor)
}


const result = muliplicaArgs(1,2,3);
const contatenacao = concatenaStrings('um','dois', 'tres')

console.log(result, contatenacao);
