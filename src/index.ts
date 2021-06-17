import express from 'express';
import routes from './routes';

const app = express();

app.use('/', routes);

app.listen(1337, () => console.log('Server on'));

