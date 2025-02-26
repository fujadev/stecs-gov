export interface DonationResponse {
  id:number;
  name: string;
  amountRaised: number;
  target: number;
  percentageAchieved: string;
  accountDetails: {
    accountName: string;
    accountNumber: string;
  };
}

export type DonationQueryResult = void;
