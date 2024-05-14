export type ChangePasswordFormValues = {
	oldPassword: string;
	newPassword: string;
};

export interface ChangePasswordFormProps {
	onSubmit: (values: ChangePasswordFormValues) => void;
}
