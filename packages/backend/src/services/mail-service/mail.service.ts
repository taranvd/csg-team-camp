import nodemailer, { SentMessageInfo } from 'nodemailer';

const { SERVER_URL, MAILTRAP_USER, MAILTRAP_PASSWORD, CLIENT_URL } =
	process.env;

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
		const verificationLink = `${SERVER_URL}/api/user/verify/${verifyToken}`;

		const message: EmailMessage = {
			from: 'contact@csgteam.oi',
			to: email,
			subject: 'Confirm Registration',
			html: `
            <p>Hello,</p>
            <p>Thank you for registering with us!</p>
            <p>To complete your registration, please click on the link below:</p>
            <a href="${verificationLink}">Confirm Registration</a>
            <p>Best regards,</p>
            <p>CGS team camp</p>
        `,
		};
		return this.transport.sendMail(message);
	}

	async sendPasswordResetEmail(
		email: string,
		resetToken: string,
		userId: string,
	): Promise<SentMessageInfo> {
		const resetPasswordLink = `${CLIENT_URL}/reset-password?token=${resetToken}&id=${userId}`;

		const message: EmailMessage = {
			from: 'contact@csgteam.oi',
			to: email,
			subject: 'Password Reset',
			html: `
            <p>Hello,</p>
            <p>You are receiving this email because a password reset request was made for your account.</p>
            <p>If you did not request a password reset, you can ignore this email.</p>
            <p>To reset your password, please follow the link below:</p>
            <a href="${resetPasswordLink}">Reset password</a>
            <p>Thank you,</p>
            <p>CGS team camp</p>
        `,
		};
		return this.transport.sendMail(message);
	}
}

export const mailService = new EmailService();
