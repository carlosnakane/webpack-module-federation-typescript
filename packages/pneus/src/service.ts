import { Model } from "./model";

const mock = [{
  nome: 'Michellin Primacy 4 17"',
  preco: 350.80,
  precoPromocional: true,
},
{
  nome: 'Pirelli Cinturato 5000 17"',
  preco: 280.10,
  precoPromocional: true,
},
{
  nome: 'Goodyear Contact 17"',
  preco: 350.80,
  precoPromocional: true,
},
{
  nome: 'Bridgestone Turanza 17"',
  preco: 322.80,
  precoPromocional: false,
},
{
  nome: 'Continental Extreme Contact 17"',
  preco: 330.47,
  precoPromocional: false,
},
]

const getList = (somentePromocoes: boolean): Promise<Model[]> => {
  return Promise.resolve(!somentePromocoes ?
    mock : mock.filter(m => m.precoPromocional
    ));
}

export { getList };
