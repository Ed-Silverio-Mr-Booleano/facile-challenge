import database from '../infra/database';

function indexEncrypt(){
    const obj = {
        id: 1
    };
    return database.query('SELECT Max($1:name) as id FROM $2:name', [obj, 'encripts']);
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

module.exports = {indexEncrypt, showEncrypt, storeEncrypt};