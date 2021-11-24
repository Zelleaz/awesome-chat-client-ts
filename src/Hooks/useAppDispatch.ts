import {useDispatch} from "react-redux";
import {RootDispatch} from "../Store/store";

export const useAppDispatch = () => useDispatch<RootDispatch>()