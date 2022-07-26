import express from 'express';
import UserController from './controllers/UserController';

const app = express();

// app.get('/', (req, res) =>{

//   res.send('Olá, Cadu!')
// });

app.get('/', UserController)

app.listen(3001, () => console.log('Server is listening'));