import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store/store";
import { type UserType } from "../../utils/types/userType";

interface UpdateUserType extends UserType {
  additionalUser: {
    userName: string;
    userEmail: string;
    userPhoneNumber: number;
    userPassword: string;
  };
}

interface userState {
  currentUser: UserType;
  newUser: UpdateUserType;
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
    additionalUser: {
      userName: "",
      userEmail: "",
      userPhoneNumber: 0,
      userPassword: "",
    },
  },
};

export const createUserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    currentUser: (state, action) => {
      state.currentUser = action.payload;
    },
    createNewUser: (state, action) => {
      state.newUser = { ...state.newUser, ...action.payload };
    },
  },
});

export const { currentUser, createNewUser } = createUserSlice.actions;
export default createUserSlice.reducer;
