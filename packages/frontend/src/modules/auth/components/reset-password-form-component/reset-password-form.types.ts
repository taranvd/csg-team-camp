export type ResetPassword = {
	newPassword: string;
	confirmPassword: string;
};

export interface ResetPasswordFormProps {
	onSubmit: (values: ResetPassword) => void;
}
