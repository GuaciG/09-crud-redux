import type { TypedUseSelectorHook } from "react-redux";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../store";

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch: () => AppDispatch = useDispatch;

/* 
Using javascript, is convenient keeping using custom hooks
export const useAppSelector = useSelector;
export const useAppDispatch = useDispatch;
*/
