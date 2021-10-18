import quanLyNguoiDungApi from "apis/QuanLyNguoiDung"
import {LOGIN_FAILED, LOGIN_SUCCESS, LOGOUT} from"./type";

const actLoginSuccess = userInfo => ({
    type:LOGIN_SUCCESS,
    payload:userInfo
})
const actLoginFail = err => ({
    type:LOGIN_FAILED,
    payload:err
})
export const actLogin = (loginInfo) => {
    return dispatch => {
        quanLyNguoiDungApi.loginApi(loginInfo)
        .then(respone => {
            dispatch(actLoginSuccess(respone.data));
        })
        .catch(err => {
            dispatch(actLoginFail('Unable To Login'))
        })
    }
}
export const actLogOut =() => ({
    type:LOGOUT,
    payload:null
})