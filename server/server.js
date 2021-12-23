import express from 'express';
import cors from 'cors';

const app = express();
app.use(express.json());


import router from './route/router';

app.use('/encripts', router);

app.use('/encripts',(req, res, next) => {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
    res.header("Access-Control-Allow-Origin", "*");
    app.use(cors());
    

    next();
});

app.listen(3000, ()=>{
    console.log('Server is running');
});