import { Request, Response } from 'express';
import EmailService from '../services/EmailService';

const users = [
  { name: 'Árthur', email: 'arthur@hotmail.com' }
];

export default {
  async index(req: Request, res: Response) {
    return res.json(users);
  },

  async create(req: Request, res: Response) {
    const emailService = new EmailService();

    emailService.sendMail({
      to: { name: 'Árthur', email: 'arthur@hotmail.com' },
      message: { subject: 'assunto', body: 'haahaha' },
    });

    return res.json({ done: true });
  }
};