export type ProfileForm = {
	name?: string;
	email?: string;
};

export interface ProfilePageFormProps {
	onSubmit: (values: ProfileForm) => Promise<void>;
}
