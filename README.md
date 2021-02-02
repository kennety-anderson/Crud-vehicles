## Setup

### Dependecies
Para iniciar o projeto execute `npm i` para instalar todas as dependecias necessarias.
```js
npm i || npm install
```

### Config Database
E necessario ter um banco pg (Postgres) instalado local em seu ambiente ou via docker, dentro do arquivo `.env` você deve colocar as credenciais do seu banco, como usuario e senha, alem da porta e host do mesmo. 

### Migrations

Apos configurar o banco de dados execute `adonis migration:run` na raiz do projeto, para realizar a criação das tabelas que a aplicação ira utilizar.

```js
adonis migration:run
```

## Endpoints

Para ver todo os endpoints disponiveis basta executar o comando `adonis route:list`.

```js
adonis route:list
```
Ele exibira todas as rotas assim como seus método http.
Todos os endpoints com exceção dos endpoints de listagem da entidade são privados sendo necessário o envio do Header `Authorization` com qualquer valor para conseguir acessar a rota, simulando uma validação de token.
