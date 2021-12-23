# facile-challenge

# REST API

Este é um desafio de construção de uma API REST

The entire application is contained within the `app.rb` file.

`config.ru` is a minimal Rack configuration for unicorn.

`run-tests.sh` runs a simplistic test and generates the API
documentation below.

It uses `run-curl-tests.rb` which runs each command defined in
`commands.yml`.

## Install

    npm install or yarn

## Run the app
    npm dev or yarn dev
    

## Build app

    yarn buid or npm build

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

## Create a new Thing

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

