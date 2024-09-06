import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UsersState } from "../interfaces/UsersState.interface";
import { fetchUsers } from "./operations";

const initialState: UsersState = {
  items: [],
  searchTerm: "",
  isLoading: false,
  error: null,
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setSearchTerm: (state, action: PayloadAction<string>) => {
      state.searchTerm = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || "Failed to fetch users";
      });
  },
});

export const { setSearchTerm } = usersSlice.actions;

export const usersReducer = usersSlice.reducer;
