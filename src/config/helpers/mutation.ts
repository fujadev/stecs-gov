// eslint-disable-next-line import/no-extraneous-dependencies
import { isString } from 'lodash';
import { P, match } from 'ts-pattern';
import { showToast } from '@/components/Common/Toast';
import type { Asyncify } from '@/config/constants/types';
import { changeCase } from '@/config/helpers/caseConverter';

type APICustomError = { data: { code: number; message: string }; status: number };

type APIValidationError = {
	data: {
		code: number;
		detail: string;
		errors: [{ field: string; message: string }];
	};
	status: number;
};

export const isAPICustomError = (error: unknown): error is APICustomError =>
	match(error)
		.with(
			{
				data: {
					//  code: P.number,
					error: P.string,
					statusCode: P.number,
				},
				status: P.number,
			},
			() => true
		)
		.otherwise(() => false);

export const isAPIValidationError = (error: unknown): error is APIValidationError =>
	match(error)
		.with(
			{
				data: {
					code: P.number,
					detail: P.string,
					errors: P.array({ field: P.string, message: P.string }),
				},
				status: P.number,
			},
			() => true
		)
		.otherwise(() => false);

export const extractApiError = (error: unknown): string | undefined => {
	if (isAPIValidationError(error)) {
		return error.data.errors.reduce((acc, { field, message }) => acc.concat(`${changeCase(field, 'sentenceCase')}: ${message}\n`), '');
	} else if (isAPICustomError(error)) {
		return error.data?.error;
	} else if (isString(error)) {
		return String(error);
	}
	return undefined;
};

export const FALLBACK_ERROR_MESSAGE = 'Something went wrong. Try again later';
export const FALLBACK_SUCCESS_MESSAGE = 'Success!';

type HandleMutationOptions<Result> = {
	errorMessage?: string;
	fallbackErrorMessage?: string;
	mutation: Asyncify<() => Result>;
	onComplete?: () => void;
	onError?: (error: unknown) => void;
	onSuccess?: (result: Result) => void;
	showErrorToast?: boolean;
	showSuccessToast?: boolean;
	successMessage?: string;
};

const getMutationHandler =
	() =>
	async <Result>({
		errorMessage,
		fallbackErrorMessage = FALLBACK_ERROR_MESSAGE,
		mutation,
		onComplete,
		onError,
		onSuccess,
		showErrorToast = true,
		showSuccessToast = true,
		successMessage,
		// eslint-disable-next-line @typescript-eslint/explicit-function-return-type,@typescript-eslint/explicit-module-boundary-types
	}: HandleMutationOptions<Result>) => {
		try {
			const result: any = await mutation();
			onSuccess?.(result);
			if (showSuccessToast) {
				showToast({
					title: successMessage ?? FALLBACK_SUCCESS_MESSAGE,
					variant: 'success',
					message: result?.message || '',
				});
			}
			onComplete?.();
			return result;
		} catch (error) {
			onError?.(error);
			const extractedErrorMessage = extractApiError(error);
			if (showErrorToast) {
				showToast({
					title: errorMessage ?? extractedErrorMessage ?? fallbackErrorMessage,
					variant: 'error',
					message: '',
				});
			}
			onComplete?.();
			return;
		}
	};

export const handleMutation = getMutationHandler();
