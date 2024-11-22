export type IsNull<T> = [T] extends [null] ? true : false;

export type IsUnknown<T> = unknown extends T // `T` can be `unknown` or `any`
	? IsNull<T> extends false // `any` can be `null`, but `unknown` can't be
		? true
		: false
	: false;
// eslint-disable-next-line
export type SetReturnType<Function_ extends (...arguments_: any[]) => any, TypeToReturn> =
	// Just using `Parameters<Fn>` isn't ideal because it doesn't handle the `this` fake parameter.
	// eslint-disable-next-line
	Function_ extends (this: infer ThisArgument, ...arguments_: infer Arguments) => any
		? // If a function did not specify the `this` fake parameter, it will be inferred to `unknown`.
			// We want to detect this situation just to display a friendlier type upon hovering on an IntelliSense-powered IDE.
			IsUnknown<ThisArgument> extends true
			? (...arguments_: Arguments) => TypeToReturn
			: (this: ThisArgument, ...arguments_: Arguments) => TypeToReturn
		: // This part should be unreachable, but we make it meaningful just in case…
			(...arguments_: Parameters<Function_>) => TypeToReturn;

// eslint-disable-next-line
export type Asyncify<Function_ extends (...arguments_: any[]) => any> = SetReturnType<Function_, Promise<Awaited<ReturnType<Function_>>>>;
