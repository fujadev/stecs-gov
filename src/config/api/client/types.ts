export interface SignInRequest {
	email: string;
	password: string;
}

export interface SignUpRequest {
	email: string;
	password: string;
	investmentId?: string | null;
	investorType: string;
	countryCode: string;
	phoneNumber: string;
	firstName: string;
	lastName: string;
	institutionName: string;
}

export interface SignUpResponse {
	token: string;
	user: Client;
}

export type Country = {
	id: number | null;
	iso2: string | null;
	iso3: string | null;
	name: string | null;
	phone_code: string | null;
	region: string | null;
	status: number | null;
	subregion: string | null;
};

export interface SignInResponse {
	token: string;
	user: Client;
}

export type Client = {
	addressLine_1?: string | null;
	addressLine_2?: string | null;
	city?: City | string;
	country?: Country | string;
	countryCode?: string | null;
	dob?: string | null;
	email?: string | null;
	emailIsVerified?: boolean;
	firstName?: string | null;
	id?: string | null;
	identityIsVerified?: string | null;
	images?: VerificationImageType[] | [];
	kycVerifications: {
		documentType: string | null;
		id: string | null;
		images: VerificationImageType[] | [];
		isPending: number;
		isVerified: number;
		verificationNumber: string | null;
		verificationType: string | null;
		verifiedaAt: string | null;
	}[];
	investorType?: string | null;
	lastName?: string | null;
	phoneNumber?: string | null;
	state?: State;
	zipCode?: string | null | number;
};

export type State = {
	countryCode: string;
	countryId: number;
	id: number;
	name: string;
};
export type StateResponse = { message: string; data: State[] };

export type City = {
	countryCode: string;
	country_id: number;
	id: number;
	name: string;
	state_id: number;
};
export type CitiesResponse = { message: string; data: City[] };
export type UpdateClientResponse = { message: string; data: Client };

export type GenerateWalletRequest = {
	investmentId: string;
	totalAmount: number;
	investmentAmount: number;
};
export type GenerateWalletResponse = {
	message: string;
	data: {
		id: string;
		accountNumber: string;
		accountName: string;
		bankName: string;
	};
};

export type VerificationImageType = {
	documentType: string;
	image: string;
	type: string;
};
export type ResetPasswordRequest = {
	token: string;
	password: string;
};
