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
	user: any;
}
