import express from 'express';
const router = express.Router();
import {getEncrypt, getEncrypts, postEncrypt} from '../service/serviceEncrypt';

//router.get('/:id', getEncrypt);
router.get('/', getEncrypts);
router.get('/:id', getEncrypt);
router.post('/', postEncrypt);

export default router;