import 'dotenv/config';
import pgPromise from "pg-promise";

const pgp = pgPromise({});

//const pgp = require('pg-promise')();

const database  = pgp({
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DB,
    host: process.env.HOST,
    port: process.env.PORT
});


database.connect()
.then((obj)=> {
    console.log('Connected to database');
})
.catch( (error) =>{
    console.error('ERROR:', error.message);
});

export default database;
//module.exports = database;