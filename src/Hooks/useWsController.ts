import {useAppDispatch} from "./useAppDispatch";
import {WsController} from "../WS/WsController";

export const useWsController = () => {
    const dispatch = useAppDispatch()
    return new WsController(dispatch)
}