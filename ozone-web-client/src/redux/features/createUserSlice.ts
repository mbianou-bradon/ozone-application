import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store/store";
import { type UserType } from "../../utils/types/userType";

interface userState {
  currentUser: UserType;
  newUser: UserType;
}

const initialState: userState = {
  currentUser: {
    firstName: "",
    lastName: "",
    phoneNumber: 0,
    email: "",
    password: "",
    confirmPassword: "",
    brandName: "",
    brandType: "",
    streetAddress: "",
    city: "",
    zipCode: "",
    taxIDNumber: "",
  },
  newUser: {
    firstName: "",
    lastName: "",
    phoneNumber: 0,
    email: "",
    password: "",
    confirmPassword: "",
    brandName: "",
    brandType: "",
    streetAddress: "",
    city: "",
    zipCode: "",
    taxIDNumber: "",
  },
};

export const createUserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    currentUser: (state, action) => {
      state.currentUser = action.payload;
    },
    createNewUser: (
      state,
      action: PayloadAction<{ key: keyof UserType; value: any }>
    ) => {
      const { key, value } = action.payload;
      state.newUser = { ...state.newUser, [key]: value };
    },
  },
});

export const { currentUser, createNewUser } = createUserSlice.actions;
export default createUserSlice.reducer;
