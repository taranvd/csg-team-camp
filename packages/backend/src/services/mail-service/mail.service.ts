import nodemailer, { SentMessageInfo } from 'nodemailer';

const { SERVER_URL, MAILTRAP_USER, MAILTRAP_PASSWORD } = process.env;

interface EmailMessage {
	from: string;
	to: string;
	subject: string;
	text?: string;
	html?: string;
}

class EmailService {
	serverURL = SERVER_URL;

	private transport = nodemailer.createTransport({
		host: 'sandbox.smtp.mailtrap.io',
		port: 2525,
		auth: {
			user: MAILTRAP_USER,
			pass: MAILTRAP_PASSWORD,
		},
	});

	async sendEmail(message: EmailMessage): Promise<SentMessageInfo> {
		message.from = 'contact@csgteam.oi';
		return this.transport.sendMail(message);
	}

	async sendVerificationEmail(
		email: string,
		verifyToken: string,
	): Promise<SentMessageInfo> {
		const message: EmailMessage = {
			from: 'contact@csgteam.oi',
			to: email,
			subject: 'Сonfirm registration',
			html: `to confirm your registration please click on the <a href='${this.serverURL}/api/user/verify/${verifyToken}'>link</a>`,
		};
		return this.transport.sendMail(message);
	}

	async sendPasswordResetEmail(
		email: string,
		resetToken: string,
	): Promise<SentMessageInfo> {
		const message: EmailMessage = {
			from: 'contact@csgteam.oi',
			to: email,
			subject: 'Password Reset',
			html: `You requested a password reset. Click the link below to reset your password: <a href='${this.serverURL}/reset-password?token=${resetToken}'>link</a>`,
		};
		return this.transport.sendMail(message);
	}
}

export const mailService = new EmailService();
