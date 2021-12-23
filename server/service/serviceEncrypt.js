//const encryptData = require('../data/encryptData');

import {indexEncrypt, showEncrypt, storeEncrypt} from '../data/encryptData';
import crypto from 'crypto';

function encrypting(text=""){
    const alg = 'aes-256-ctr';
    const pwd ='shazan2055';
    const cipher = crypto.createCipher(alg,pwd);
    const crypted = cipher.update(text,'utf8','hex');
    
    return crypted;
}


exports.getEncrypt = async(req, res, next)=>{
    const encrypt = await showEncrypt(req.params.id);
    return res.status(200).json({id: encrypt[0].id, encripted_name: encrypt[0].name});
}

exports.postEncrypt = async(req, res, next)=>{
    const {name} = req.body;
    const encrypted_name = encrypting(name);
   
    const encrypt = await storeEncrypt(encrypted_name);
    const id = await indexEncrypt();
   
    return res.status(201).json({id: id[0].id, encripted_name: encrypted_name });
}
