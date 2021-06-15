import express from 'express';
import { Worker } from 'worker_threads';

const app = express();
 
const worker = new Worker('./src/worker.js', {
  workerData: {
    value: 15,
    path: './worker.ts'
  }
});

worker.on('message', (result) => {
  console.log('message - ', result);
});

app.get('/', (req,res) => res.send('Hello from nodejs app'));

app.listen(3000, () => console.log('Server on'));

