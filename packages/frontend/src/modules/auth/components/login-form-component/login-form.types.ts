export interface ILoginForm {
	email: string;
	password: string;
}

export interface LoginFormProps {
	onSubmit: (values: ILoginForm) => void;
}
