import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

const DEFAUL_STATE = [
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

export type UserId = string;

export interface User {
	name: string;
	email: string;
	github: string;
}

export interface UserWithId extends User {
	id: UserId;
}

const initialState: UserWithId[] = (() => {
	const persistedState = localStorage.getItem("__redux__state__");

	return persistedState ? JSON.parse(persistedState).users : DEFAUL_STATE;
})();

/* 
Una forma más sucia de hacer lo anterior
let initialState: UserWithId[] = DEFAUL_STATE;

const persistedState = localStorage.getItem("__redux__state__");

if (persistedState) {
	initialState = JSON.parse(persistedState).users;
} 
*/

export const usersSlice = createSlice({
	name: "users",
	initialState,
	reducers: {
		addNewUser: (state, action: PayloadAction<User>) => {
			const id = crypto.randomUUID();
			//return [...state, { id, ...action.payload }];

			// Redux toolkit allows you mute the state so:
			state.push({ id, ...action.payload });
		},
		deleteUserById: (state, action: PayloadAction<UserId>) => {
			const id = action.payload;
			return state.filter((user) => user.id !== id);
		},
		rollbackUser: (state, action: PayloadAction<UserWithId>) => {
			const isUserAlreadyDefined = state.some(
				(user) => user.id === action.payload.id,
			);
			if (!isUserAlreadyDefined) {
				//return [...state, action.payload];
				// Redux toolkit allows you mute the state so:
				state.push(action.payload);
			}
		},
	},
});

export default usersSlice.reducer;

export const { rollbackUser, addNewUser, deleteUserById } = usersSlice.actions;
