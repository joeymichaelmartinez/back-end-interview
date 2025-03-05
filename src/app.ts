import express from 'express';
import projection from './routes/projection.routes';
import index from './routes/index.route';

const app = express();
const PORT = 3000;

app.use('/', express.json());

app.use('/', projection);

app.use('/', index);

app.listen(PORT, (error) => {
    if(!error) {
        console.log('Welcome to my application');
    } else {
        console.log(error);
    }
});