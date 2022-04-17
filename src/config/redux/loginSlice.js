import { createSlice } from "@reduxjs/toolkit";

export const loginSlice = createSlice({
	name: "auth",
	initialState: {
		username :"",
        password: ""
	},
	reducers: {
		login: (state, action) => {
			state.username = action.payload.username;
			state.password = action.payload.password;
		},
		logout: (state) => {
			state.username = "";
			state.password = ""
		},
	},
});

export const { login, logout } = loginSlice.actions;
export default loginSlice.reducer;
