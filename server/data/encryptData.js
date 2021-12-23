import database from '../infra/database';

function indexEncrypts(){
    const obj = {
        id: 1,
        name: 2
    };
    return database.query('SELECT $1:name FROM $2:name', [obj, 'encripts']);
}

function showEncrypt(id){
    return database.query('SELECT * From encripts WHERE id = $1', id);
}

function storeEncrypt(name){
    const obj = {
        name: name
    }
    return database.query('INSERT INTO encripts (${this:name}) VALUES (${this:csv})', obj)
}

module.exports = {indexEncrypts, showEncrypt, storeEncrypt};