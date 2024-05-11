export interface IRegisterForm {
	name: string;
	email: string;
	password: string;
}

export interface RegisterFormProps {
	onSubmit: (values: IRegisterForm) => void;
}
