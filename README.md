# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
#Projeto para teste de vaga da Bitwise

Consiste em uma aplicação ReactJS que busca e<br/> 
exibe perfis do Github utilizando GraphQL.

Para testar localmente, é necessário alterar a variável de ambiente REACT_APP_GRAPHQL_KEY
para uma OAuth token válido do GitHub, que contenha os escopos Repo e User selecionados.

Para criar um token, acesse sua conta do Github > Settings > Developer Settings > Personal Access Tokens
-Selecione os escopos repo e user
-Clique em Generate Token
-Copie o token gerado e cole no valor da variável REACT_APP_GRAPHQL_KEY, que se encontra dentro do arquivo .env

Exemplo: REACT_APP_GRAPHQL_KEY=seu_token