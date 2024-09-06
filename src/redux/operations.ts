import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { User } from "../interfaces/User.interface";

axios.defaults.baseURL = "https://jsonplaceholder.typicode.com";

export const fetchUsers = createAsyncThunk(
  "users/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/users");
      return response.data as User[];
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return thunkAPI.rejectWithValue(error.message);
      } else if (error instanceof Error) {
        return thunkAPI.rejectWithValue(error.message);
      } else {
        return thunkAPI.rejectWithValue("An unknown error occurred.");
      }
    }
  }
);
