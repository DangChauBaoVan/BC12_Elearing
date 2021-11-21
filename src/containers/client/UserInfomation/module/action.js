import quanLyNguoiDungApi from "apis/QuanLyNguoiDung"
import { GET_USER_INFO_FAIL, GET_USER_INFO_SUCCESS } from "./type"
const actGetUserInfoSuccess = (userInfo) => ({
    type: GET_USER_INFO_SUCCESS,
    payload: userInfo
})
const actGetUserInfoFail = (err) => ({
    type: GET_USER_INFO_FAIL,
    payload: err
})
export const actGetUserInfo = (account,token) => {
    return dispatch => {
        quanLyNguoiDungApi.getUserInfoApi(account,token)
        .then(res=>{
            dispatch(actGetUserInfoSuccess(res.data));
        })
        .catch(err => {
            dispatch(actGetUserInfoFail(err))
        })
    }
}