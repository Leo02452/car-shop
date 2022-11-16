<h1 align="center">Car Shop</h1>


## Índice

- [Descrição](#page_facing_up-descrição)
- [Próximos passos](#construction-próximos-passos)
- [Habilidades desenvolvidas](#bulb-habilidades-desenvolvidas)
- [Funcionalidades](#sparkles-funcionalidades)
- [Ferramentas](#hammer_and_wrench-ferramentas)
- [Como usar a aplicação](#computer-como-usar-a-aplicação)
- [Autor](#memo-autor)


## :page_facing_up: Descrição

Esse projeto foi desenvolvido durante o módulo de backend na [Trybe](https://www.betrybe.com/). O desafio foi criar uma API para gerenciar uma loja de veículos utilizando NODE.js e Typescript com MongoDB e Mongoose para mapear o banco.

Além disso, a proposta era ter mais reaproveitamento de código com POO e SOLID.

O projeto original foi entregue, mas entendendo que há espaço para melhorias, coloquei na seção de próximos passos tarefas extras que quero implementar.


## :construction: Próximos passos
<details>
  <summary><strong>Ver mais</strong></summary>

- [ ] Criar uma documentação Swagger para a API.
- [ ] Terminar os testes unitários para cobrir 100% da aplicação (cobertura atualmente em 70%)
</details>


## :bulb: Habilidades desenvolvidas
<details>
  <summary><strong>Ver mais</strong></summary>

- Criar classes mais genericas para reaproveitamento de código

- Catálogo de erros

- Testes unitários com Typescript

- Criar uma API com MongoDB (e Mongoose para mapeamento)
</details>


## :sparkles: Funcionalidades
<details>
  <summary><strong>Ver mais</strong></summary>

:heavy_check_mark: Criar um carro

:heavy_check_mark: Editar um carro

:heavy_check_mark: Listar todos os carros

:heavy_check_mark: Listar apenas um carro

:heavy_check_mark: Deletar um carro

:heavy_check_mark: Criar uma moto

:heavy_check_mark: Editar uma moto

:heavy_check_mark: Listar todas as motos

:heavy_check_mark: Listar apenas uma moto

:heavy_check_mark: Deletar uma moto
</details>


## :hammer_and_wrench: Ferramentas
<details>
  <summary><strong>Ver mais</strong></summary>

* [NODE.js](https://nodejs.org/en/)
* [Typescript](https://www.typescriptlang.org/)
* [Express](https://expressjs.com/pt-br/) para criar a API
* [Express-async-errors](https://www.npmjs.com/package/express-async-errors) para capturar erros
* [Eslint](https://eslint.org/) para padronizar o código e evitar code-smells
* [Nodemon](https://nodemon.io/) para monitorar a aplicação em tempo real durante o desenvolvimento
* [Zod](https://zod.dev/) para validar dados vindos de requisições e criar interfaces
* [Dotenv](https://www.npmjs.com/package/dotenv) para usar variáveis de ambiente
* [Mocha](https://mochajs.org/), [Chai](https://www.chaijs.com/) e [Sinon](https://sinonjs.org/) para testar a aplicação
* [Istanbul](https://istanbul.js.org/) para medir a cobertura de testes da aplicação
* [Mongoose](https://mongoosejs.com/) para mapear o banco de dados
* [MongoDB](https://www.mongodb.com/) para banco de dados
</details>


## :computer: Como usar a aplicação
<details>
  <summary><strong>Pré-requisitos</strong></summary>

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:

- [Node.js (v16)](https://nodejs.org/en/)
- [Git](https://git-scm.com)
- [MongoDB](https://www.mongodb.com/)
</details>

<details>
  <summary><strong>Clone e instale as dependências</strong></summary>
1 - Clone esse repositório para sua máquina com o seguinte comando:

```bash
 git clone git@github.com:Leo02452/car-shop.git
```

2 - Entre na pasta criada:

```
 cd car-shop
```

3 - Instale as dependências:

```
 npm install
```
</details>

<details>
  <summary><strong>Rodando a aplicação localmente</strong></summary>
4 - Inicie a aplicação:

```
 npm start
```
</details>

<details>
  <summary><strong>Rodando a aplicação via docker</strong></summary>

Antes de começar, você vai precisar ter instalado em sua máquina, além de NODE e Git, as seguintes ferramentas:

- [Docker](https://www.docker.com/)
- [Docker-compose](https://docs.docker.com/compose/) na versão igual ou superior a 16.05.0

4 - Construa os containers:

```
 docker-compose up -d
```

5 - Para visualizar o terminal com a aplicação rodando, execute o comando:

```
 docker container run logs car-shop
```
</details>

<details>
  <summary><strong>Outros scripts da aplicação (backend)</strong></summary>

* `npm run dev` para rodar a aplicação com Nodemon e atualizá-la automaticamente após alteração de qualquer arquivo dentro da pasta src;
* `npm run test:dev` para rodar todos os testes com Mocha;
* `npm run test:coverage` para rodar todos os testes e gerar o relatório de cobertura na tela do terminal;
* `npm run lint` para rodar o ESLint;
</details>


## :memo: Autor

Desenvolvido por Leonardo Araujo

Email: leonardo_02452@hotmail.com

Github: https://github.com/Leo02452

LinkedIn: https://www.linkedin.com/in/leo02452/

---
