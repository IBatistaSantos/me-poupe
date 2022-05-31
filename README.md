

#  Me poupe ! 

![](https://mepoupe.com/images/logo.jpg)


[![codecov](https://codecov.io/gh/IBatistaSantos/me-poupe/branch/main/graph/badge.svg?token=NK9YUVJ2CW)](https://codecov.io/gh/IBatistaSantos/me-poupe)

## Objetivo

Criação de uma API que calcule a média de dois números utilizando a estratégia de arredondamento Half Round Up e consulta de CEP utilizando o webservice viaCep


###  Rodando a aplicação

Para rodar a aplicação você precisa ter o nodejs instalado na máquina ou o docker para rodar o container. 

`npm run dev` 

`docker compose up -d `

##Rodando os testes

Existem dois scripts para rodar o teste, sendo o primeiro para executar os testes da aplicação e outro script para o teste de conexão com o webservice. Segue as instruções para execução? 

` npm run test` 

 `npm run test:viacep-api `
 
 Para verificação da cobertura de teste utilize o seguinte instrução 
 
 `npm run test:cov`


## Tecnologias

- Nodejs
- Datadog
- Clean Architecture
- TDD - Test Driver Development
- Typescript

## Documentação

Após a execução da aplicação, você terá uma documentação completa da API no endereço seguinte: 

[http://localhost:3000/api/mepoupe/docs](http://localhost:3000/api/mepoupe/docs)
