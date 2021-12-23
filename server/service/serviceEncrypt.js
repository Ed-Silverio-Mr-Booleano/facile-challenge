//const encryptData = require('../data/encryptData');

import {indexEncrypts, showEncrypt, storeEncrypt} from '../data/encryptData';


exports.getEncrypts = async(req, res, next)=>{
    const encrypt = await indexEncrypts();
    res.json(encrypt);
   
}

exports.getEncrypt = async(req, res, next)=>{
    const encrypt = await showEncrypt(req.params.id);
    res.json(encrypt);
}

exports.postEncrypt = async(req, res, next)=>{
    const {name} = req.body;
    const encrypt = await storeEncrypt(name);
}