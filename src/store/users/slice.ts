import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export type UserId = string;

export interface User {
	name: string;
	email: string;
	github: string;
}

export interface UserWithId extends User {
	id: UserId;
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
		github: "midudev",
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
	reducers: {
		deleteUserById: (state, action: PayloadAction<UserId>) => {
			const id = action.payload;
			return state.filter((user) => user.id !== id);
		},
	},
});

export default usersSlice.reducer;

export const { deleteUserById } = usersSlice.actions;
