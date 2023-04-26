import { createSlice } from "@reduxjs/toolkit";

export interface User {
	name: string;
	email: string;
	github: string;
}

export interface UserWithId extends User {
	id: string;
}

const initialState: UserWithId[] = [
	{
		id: "1",
		name: "Peter Doe",
		email: "peterdoe@gmail.com",
		github: "peterdoedev",
	},
	{
		id: "2",
		name: "Lena Whitehouse",
		email: "LenaWhite@gmail.com",
		github: "lenaWhitedev",
	},
	{
		id: "3",
		name: "Phil Less",
		email: "philless@gmail.com",
		github: "phillessdev",
	},
];

export const usersSlice = createSlice({
	name: "users",
	initialState,
	reducers: {},
});

export default usersSlice.reducer;
