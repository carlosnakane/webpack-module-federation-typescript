# Webpack Module Federation with Typescript

> Exemplo de implementaçao de Microfrontends com o novo plugin do
> webpack pra federação de módulos javascript.

Utilizando o plugin o webpack não irá reclamar de imports dinâmicos especificados em sua configuração durante o build time. Isso possibilitará importar módulos de outras builds feitas com o webpack em runtime e utiliza-los normalmente como se fossem módulos da aplicação.

Nessa implementação é demonstrada uma forma de fazer com que o typescript conheça o módulo federado em tempo de desenvolvimento e build.

Basicamente é necessário que os projetos *buildados* pelo webpack estejam em um monorepo e os paths no tsconfig.json declare esses módulos federados. Isso é um downside pois normalmente frontends de times diferentes tendem a estarem em repositórios diferentes tornando essa implementação inválida.

Porém com a crescente necessidade de fragmentar frontends é esperado que num horizonte próximo o Typescript compiler ganhe a habilidade de importar arquivos de definição remotamente. Existe uma [issue no repositório do Typescript](https://github.com/microsoft/TypeScript/issues/28985) que detalha essa necessidade

## Como rodar o projeto

    Requer NodeJS 8+ e NPM 5+

Os projetos estão na pasta packages e possuem seus próprios scripts npm porém alguns scripts facilitadores estão presentes na raiz do repositório. Então para rodar o projeto:

 1. Na raiz do repositório rode `npm install`;
 2. Na raiz do diretório rode `npm start`;
 3. Abra o browser no endereço http://localhost:8080

É possível visitar os projetos que exportam módulos federados porém rodando standalone nos endereço:

 - http://localhost:8081
 - http://localhost:8082

## NPM Scripts

Todos scripts podem ser utilizados dentro de cada projeto ou na raiz do repositório

 - `npm run build`: builda otimizado pra produção;
 - `npm run start`: inicia o webpack dev server. Caso rodado na raiz o browser abrirá no endereço da aplicação host;
 - npm run build: builda todos so projetos otimizados pra produção;
 - npm run serve: inicia um servidor http para cada projeto. Requer rodar o `npm run build` antes

## Conclusão

O webpack module federation **que ainda está em beta** é um game changer na jornada de levar os conceitos dos microserviços ao frontend no que se trata à abstração de compartilhamento de módulos javascript. Existem downsides ainda como por exemplo ter que especificar o publicPath com um endereço http durante a build porém o time do webpack vem trabalhando para que a solução seja viável. 

Em contra partida os browsers ainda não estão preparados para trabalhar com os conceitos de microserviços dado que a isolação desses módulos não existe tornando qualquer implementação desse tipo bastante delicada. U

A comunidade veio na frente com o Webpack Module Federation e esperamos ansiosamente que o W3C venha atrás viabilizando o runtime com algum conceito de sandbox (semelhante aos iframes) para módulos federados no browser abrindo de vez os horizontes para que as implementações de microfrontends sejam mais seguras e menos artesanais.

