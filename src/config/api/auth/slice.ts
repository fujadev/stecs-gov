import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { Client } from '../client/types';

type ThemeMode = 'auto' | 'dark' | 'light';

type AuthState = {
	token?: string;
	user?: Client;
	mode: ThemeMode;
};

const initialState: AuthState = {
	mode: 'auto',
};

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		clearToken: (state) => {
			// eslint-disable-next-line fp/no-mutation
			state.token = undefined;
		},
		storeToken: (state, { payload }: PayloadAction<string>) => {
			// eslint-disable-next-line fp/no-mutation
			state.token = payload;
		},
		storeUser: (state, { payload }: PayloadAction<Client>) => {
			// eslint-disable-next-line fp/no-mutation
			state.user = payload;
		},
		setMode: (state, { payload }: PayloadAction<ThemeMode>) => {
			// eslint-disable-next-line fp/no-mutation
			state.mode = payload;
		},
		resetStore: (state) => {
			// eslint-disable-next-line fp/no-mutation
			state.token = '';
			// eslint-disable-next-line fp/no-mutation
			state.user = undefined;
			// eslint-disable-next-line fp/no-mutation
			state.mode = 'auto';
		},
	},
});

export default authSlice.reducer;
export const { clearToken, storeToken, storeUser, resetStore } = authSlice.actions;
