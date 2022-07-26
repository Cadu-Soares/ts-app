// Conteudo propriedade to:
// User Name
//  User email


// Conteudo propriedade massage:
// subject
// content
// attachments (não obrigatório)

interface MailTo {
  name: string,
  email: string
};

interface MailMessage {
  subject: string,
  body: string,
  attachments?: Array<string> // or string{} 
};

const MailService = (to: MailTo, message: MailMessage) => {
  `Email enviado com sucesso para o novo usuário ${to.email}, com o assunto: ${message.subject}`
}

export default MailService