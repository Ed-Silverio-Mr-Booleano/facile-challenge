import express from 'express';
const router = express.Router();
import {getEncrypt, postEncrypt} from '../service/serviceEncrypt';

//router.get('/:id', getEncrypt);
router.get('/:id', getEncrypt);
router.post('/', postEncrypt);

export default router;