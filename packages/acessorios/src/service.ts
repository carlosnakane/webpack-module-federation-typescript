import { Model } from "./model";

const mock = [{
  nome: 'Jogo de capas de proteção',
  preco: 99.80,
  precoPromocional: true,
},
{
  nome: 'Luz de inspeção LED',
  preco: 65.10,
  precoPromocional: true,
},
{
  nome: 'Aromatizador Proauto Framboesa',
  preco: 18.90,
  precoPromocional: true,
},
{
  nome: 'Capa de voltande de couro',
  preco: 120.15,
  precoPromocional: false,
},
{
  nome: 'Rack de bagageiro alumínio',
  preco: 560.32,
  precoPromocional: false,
},
]

const getList = (somentePromocoes: boolean): Promise<Model[]> => {
  return Promise.resolve(!somentePromocoes ?
    mock : mock.filter(m => m.precoPromocional
    ));
}

export { getList };