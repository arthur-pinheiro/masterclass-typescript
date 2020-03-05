interface IMailTo {
  name: string;
  email: string;
}

interface IMailMessage {
  subject: string;
  body: string;
  // nullable array
  attachment?: string[];
}

interface IMessageDTO {
  to: IMailTo;
  message: IMailMessage;
}

interface IEmailService {
  sendMail(request: IMessageDTO): void;
}

class EmailService implements IEmailService {
  // sendMail(to: IMailTo, message: IMailMessage) {
  sendMail({ to, message }: IMessageDTO) {
    console.log(`Email enviado para ${to.email}: ${message.body}`);
  }
}

export default EmailService;