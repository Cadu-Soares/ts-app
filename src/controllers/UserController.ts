import { Request, Response } from 'express';

interface createUserBody {
  name: string;
  email: string;
  password: string;
}

// class UserController {
//   findAll(request: Request, response: Response) {
//     return response.send('Olá, Cadu Soares!')
//   }
// }

class UserController { 
  
  //Localização de Usuário 
  findUsers(request: Request, response: Response) { 
    return response.json({
    users: [{
    name: "User Name",
    email: "user@user.com",
    }
  ],
  });
}

  // Cadastro de usuário
  createUser(request: Request<any, any, createUserBody>, response: Response) {
    const { name, email, password } = request.body;

    return response.json ({
      name,
      email,
      password 
    })
  }
}


export default new UserController;