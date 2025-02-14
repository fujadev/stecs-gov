import { configureStore, isRejectedWithValue } from '@reduxjs/toolkit';
import type { TypedUseSelectorHook } from 'react-redux';
import { useDispatch, useSelector } from 'react-redux';
import { combineReducers, Middleware, MiddlewareAPI } from 'redux';
import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE, persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { api } from './base';
import authReducer, { resetStore } from '@/config/api/auth/slice';
import donationReducer from "../donation/slice"

export const errorMiddleware: Middleware =
	({ dispatch }: MiddlewareAPI) =>
	(next) =>
	(action) => {
		// eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
		if (isRejectedWithValue(action)) {
			// @ts-expect-error Not sure where to find this type
			// eslint-disable-next-line
			const code = action.payload.status;

			if (code === 403) {
				dispatch(resetStore());
			}
		}

		return next(action);
	};

const persistConfig = {
	key: 'root',
	storage,
	whitelist: ['auth', 'onboarding', 'donation'],
};

const rootReducer = combineReducers({
	[api.reducerPath]: api.reducer,
	auth: authReducer,
	donation: donationReducer, 
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		})
			.concat(api.middleware)
			.concat(errorMiddleware),
	reducer: persistedReducer,
});

export const createStore = (): ReturnType<typeof configureStore> =>
	configureStore({
		reducer: {
			[api.reducerPath]: api.reducer,
		},
		devTools: process.env.NODE_ENV !== 'production',
		middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware).concat(errorMiddleware),
	});

export const persistor = persistStore(store);
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export type RootState = ReturnType<typeof store.getState>;
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
