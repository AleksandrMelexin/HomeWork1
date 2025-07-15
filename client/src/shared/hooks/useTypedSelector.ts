import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "../store/tasks/reducers";

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector