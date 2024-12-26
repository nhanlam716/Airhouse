import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosClient } from "../../api/axiosClient";

interface userData {
  email: string;
  password: string;
}

interface authData {
  user: userData[] | null;
  isLoading: boolean;
  error: string | null;
}

const initialState: authData = {
  user: null,
  isLoading: false,
  error: null,
};

export const logInUser = createAsyncThunk<
  any,
  { email: string; password: string }
>("auth/logInUser", async (userData, thunkAPI) => {
  const { rejectWithValue } = thunkAPI;

  try {
    const res: userData[] = await axiosClient.get("/users");
    const user = res.find(
      (item) =>
        item?.email === userData.email && item?.password === userData.password
    );

    return user;
  } catch (error) {
    return rejectWithValue(error);
  }
});

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    logOut: (state) => {
      state.user = null;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(logInUser.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(logInUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
    });
    builder.addCase(logInUser.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload as string;
    });
  },
});

export const { logOut } = authSlice.actions;
export default authSlice.reducer;
