import express from 'express';
import mongoose from 'mongoose';
import routes from './routes';
import dotenv from 'dotenv';

dotenv.config();

const port = process.env.PORT;
const connectionString = process.env.DB_CONNECTION_STRING;

const app = express();

app.use('/', routes);

if(connectionString){
    mongoose.connect(connectionString, 
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }, 
        () => {
        console.log('Db connected');
    })
}
else{
    console.error('Can not connect to database')
}


app.listen(port, () => console.log('Server on'));

