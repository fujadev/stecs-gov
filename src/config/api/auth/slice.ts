import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

type ThemeMode = 'auto' | 'dark' | 'light';

type AuthState = {
	token?: string;
	user?: any;
	mode: ThemeMode;
	showStoreModal?: boolean;
};

const initialState: AuthState = {
	mode: 'auto',
};

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		storeToken: (state, { payload }: PayloadAction<string>) => {
			// eslint-disable-next-line fp/no-mutation
			state.token = payload;
		},
		storeUser: (state, { payload }: PayloadAction<any>) => {
			// eslint-disable-next-line fp/no-mutation
			state.user = payload;
		},
		clearToken: (state) => {
			// eslint-disable-next-line fp/no-mutation
			state.token = undefined;
		},
		setMode: (state, { payload }: PayloadAction<ThemeMode>) => {
			// eslint-disable-next-line fp/no-mutation
			state.mode = payload;
		},
		setStoreModal: (state, { payload }: PayloadAction<boolean>) => {
			// eslint-disable-next-line fp/no-mutation
			state.showStoreModal = payload;
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
export const { clearToken, resetStore, setStoreModal, storeToken, storeUser, setMode } = authSlice.actions;
