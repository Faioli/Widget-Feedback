import nodemailer from 'nodemailer'
import { MailAdapter, SendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "6157ec63ec6a93",
      pass: "1d8deb9cfa2dd0"
    }
});


export class NodemailerMailAdapter implements MailAdapter {
    async sendMail({ subject, body }: SendMailData) {
        await transport.sendMail({
            from: 'Equipe Feedget <equipedev@feedget.com>',
            to: 'Henrique Faioli <henrimiguel11@gmail.com>',
            subject,
            html: body,
        })
    };
}