export interface ForgotPasswordFormProps {
	onSubmit: (values: { email: string }) => Promise<void>;
}
