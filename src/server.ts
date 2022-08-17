import express from 'express';
import UserController from './controllers/UserController';

const app = express();

// app.get('/', (req, res) =>{

//   res.send('Olá, Cadu!')
// });

app.get('/users', UserController.findUsers)

app.get('/user', (request, response) => {
  request.body = {
    name: "User",
    email: "user@user.com",
    password: "123456"
  }

  return UserController.createUser(request, response)
});


app.listen(3001, () => console.log('Server is listening'));