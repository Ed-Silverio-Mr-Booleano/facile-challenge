import express from 'express';
const router = express.Router();
import {getEncrypt, postEncrypt} from '../service/serviceEncrypt';
import {checkNameExist} from '../middleware/middleware'

//router.get('/:id', getEncrypt);
router.get('/:id', getEncrypt);
router.post('/', checkNameExist, postEncrypt);

export default router;