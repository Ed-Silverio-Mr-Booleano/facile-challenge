# facile-challenge

# REST API

Este é um desafio de construção de uma API REST.


## Instalar a app

    npm install or yarn
    
## Configurar a base de dados
    
    executar o arquivo `server/infra/create.sql` num servidor PostgreSQL 
    ou
    copiar o código do arquivo `server/infra/create.sql` num servidor PostgreSQL
    
## Executar a app
    npm dev or yarn dev
    

## Build app

    yarn buid or npm build
    yarn start

# REST API

A REST API deste aplicativo é descrita abaixo.

## Get: Lista um registro por ID

### Request

`GET /encripts/`

    'application/json' http://localhost:3000/encripts/12

### Response

    X-Powered-By: Express
    Content-Type: application/json; charset=utf-8
    Content-Length: 41
    ETag: W/"29-yg9ElDIFi3l2DpUh535KUpXmtlg"
    Date: Thu, 23 Dec 2021 10:10:39 GMT
    Connection: keep-alive

    {
      "id": 12,
      "encripted_name": "05f53a6ded9d"
    }

## Criar um novo registro

### Request

`POST /encripts/`

    'Accept: application/json' http://localhost:7000/thing

### Response

    X-Powered-By: Express
    Content-Type: application/json; charset=utf-8
    Content-Length: 41
    ETag: W/"29-WLapzflntobtY4yW3SAOfZgk+8Q"
    Date: Thu, 23 Dec 2021 12:29:49 GMT
    Connection: keep-alive

    {
	"name":"shazam"
    }

