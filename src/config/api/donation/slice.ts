import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// API Endpoint (Replace with your actual testing URL)
const API_URL = "http://172.203.140.197/api/web-donation";

interface DonationState {
  data: string | null;
  loading: boolean;
  error: string | null;
}


const initialState: DonationState = {
  data: null,
  loading: false,
  error: null,
};

export const fetchDonation = createAsyncThunk("donation/fetchDonation", async () => {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) throw new Error("Failed to fetch donation");
    return response.json(); 
  } catch (error: any) {
    throw error.message || "Something went wrong";
  }
});

// Create slice
const donationSlice = createSlice({
  name: "policy",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDonation.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchDonation.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchDonation.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch donation";
      });
  },
});

export default donationSlice.reducer;
