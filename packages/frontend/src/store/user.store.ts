import toast from 'react-hot-toast';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { STORAGE_KEYS } from '~shared/keys';

import userService, {
	RegisterParams,
	LoginParams,
	UpdateUserParams,
} from '~shared/services/user.service';
import { IUser } from '~shared/types/user.type';

type Actions = {
	login: (params: LoginParams) => Promise<void>;
	register: (params: RegisterParams) => Promise<void>;
	logout: () => Promise<void>;
	getCurrentUser: () => Promise<void>;
	updateCurrentUser: (params: UpdateUserParams) => Promise<void>;
	verify: (token: string) => Promise<void>;
	changePassword: (oldPassword: string, newPassword: string) => Promise<void>;
	forgotPassword: (email: string) => Promise<void>;
	resetPassword: (resetToken: string, newPassword: string) => Promise<void>;
};

type State = {
	user: IUser;
	token: string;
	isAuthenticated: boolean;
	isLoading: boolean;
	error: boolean;
};

const storedToken = localStorage.getItem(STORAGE_KEYS.TOKEN);
const token = storedToken ? JSON.parse(storedToken).state.token : null;
const isAuthenticated = !!token;

const initialState = {
	user: { id: '', name: '', email: '' },
	token: null,
	isAuthenticated,
	isLoading: false,
	error: null,
};

const useUserStore = create<State & Actions>()(
	persist(
		(set) => ({
			...initialState,

			login: async (user: LoginParams): Promise<void> => {
				try {
					const resp = await userService.login(user);

					set((state) => ({
						...state,
						token: resp.token,
						user: resp.user as IUser,
						isLoading: false,
						isAuthenticated: true,
						success: true,
					}));

					toast.success(
						'You have successfully logged in. Please verify your email!',
					);
				} catch (error) {
					set({ isLoading: false, error });
					const errorMessage =
						typeof error === 'string'
							? error
							: error.message ||
								'An error occurred during login.';
					toast.error(errorMessage);
				}
			},

			register: async (user: RegisterParams): Promise<void> => {
				try {
					const resp = await userService.register(user);
					set((state) => ({
						...state,
						token: resp.token,
						user: resp.user as IUser,
						isLoading: false,
						isLoggedIn: true,
					}));

					toast.success(
						'You have successfully registered. Please verify your email!',
					);
				} catch (error) {
					set({ isLoading: false, error });
					const errorMessage =
						typeof error === 'string'
							? error
							: error.message ||
								'An error occurred during registration.';
					toast.error(errorMessage);
				}
			},

			logout: async (): Promise<void> => {
				try {
					set({ isLoading: true, error: null });
					await userService.logout();
					set({ isAuthenticated: false, isLoading: false });
				} catch (error) {
					set({ isLoading: false, error });
				}
			},

			getCurrentUser: async (): Promise<void> => {
				try {
					set({ isLoading: true, error: null });
					const resp = await userService.getCurrentUser();

					set((state) => ({
						...state,
						token: resp.token,
						user: resp as IUser,
						isAuthenticated: true,
						isLoading: false,
					}));
				} catch (error) {
					set({ isLoading: false, error });
					const errorMessage =
						typeof error === 'string'
							? error
							: error.message ||
								'An error occurred during login.';
					toast.error(errorMessage);
				}
			},

			updateCurrentUser: async (
				params: UpdateUserParams,
			): Promise<void> => {
				try {
					set({ isLoading: true, error: null });
					const resp = await userService.updateCurrentUser(params);
					set((state) => ({
						...state,
						token: resp.token,
						user: resp as IUser,
						isLoading: false,
					}));
					toast.success('User info was updated');
				} catch (error) {
					set({ isLoading: false, error });
					const errorMessage =
						typeof error === 'string'
							? error
							: error.message ||
								'An error occurred during login.';
					toast.error(errorMessage);
				}
			},

			verify: async (token: string): Promise<void> => {
				try {
					set({ isLoading: true, error: null });
					await userService.verify(token);
					set({ isLoading: false });
				} catch (error) {
					set({ isLoading: false, error });
				}
			},

			changePassword: async (
				oldPassword: string,
				newPassword: string,
			): Promise<void> => {
				try {
					set({ isLoading: true, error: null });
					await userService.changePassword(oldPassword, newPassword);
					set({ isLoading: false });
					toast.success('Password successfully changed');
				} catch (error) {
					set({ isLoading: false, error });
					const errorMessage =
						typeof error === 'string'
							? error
							: error.message ||
								'An error occurred during login.';
					toast.error(errorMessage);
				}
			},

			forgotPassword: async (email: string): Promise<void> => {
				try {
					set({ isLoading: true, error: null });
					await userService.forgotPassword(email);
					set({ isLoading: false });
				} catch (error) {
					set({ isLoading: false, error });
				}
			},

			resetPassword: async (
				resetToken: string,
				newPassword: string,
			): Promise<void> => {
				try {
					set({ isLoading: true, error: null });
					await userService.resetPassword(resetToken, newPassword);
					set({ isLoading: false });
				} catch (error) {
					set({ isLoading: false, error });
				}
			},
		}),
		{
			name: STORAGE_KEYS.TOKEN,
			storage: createJSONStorage(() => localStorage),
			partialize: (state) => ({ token: state.token }),
		},
	),
);

export default useUserStore;
