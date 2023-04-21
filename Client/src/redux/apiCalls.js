import { loginFailure, loginStart, loginSuccess } from "./userRedux"
import { publicRequest } from "../requsetMethods";
export const login = async (dispatch, user) => {
    dispatch(loginStart());
    try{
        const res = await publicRequest("/auth/login", user)
        dispatch(loginSuccess(res.data));
    }
    catch(err){
        dispatch(loginFailure)
    }
}