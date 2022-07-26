import { Request, Response } from 'express';

// class UserController {
//   findAll(request: Request, response: Response) {
//     return response.send('Olá, Cadu Soares!')
//   }
// }

const UserController = (request: Request, response: Response) => { 
  response.json({
    name: "User Name",
    email: "user@user.com",
  });
}


export default UserController; 