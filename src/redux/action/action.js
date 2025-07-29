import {checkLogin} from "../../service/accountService";

export const loginAction =(account)=>{
    return {
        type: "LOGIN",
        payload: account
    }
}




export const loginAction1 =(accountLogin)=>{
    return async (dispatch)=>{
        console.log("------action -- run------")
        let account = await checkLogin(accountLogin);
        console.log("after-check login")
        console.log(account)
        if (account){
            console.log("find ok")
            dispatch({
                type: "LOGIN",
                payload: account
            });
            return true;
        }else {
            console.log("not found")
            dispatch({
                type: "FAIL",
                payload: null
            });
            return false;
        }
    }
}
export const logoutAction1 =()=>{
    return async (dispatch)=>{
            dispatch({
                type: "LOGOUT",
                payload: null
            });

    }
}