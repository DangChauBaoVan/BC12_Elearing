import { apiNguoiDung } from "apis/apiNguoiDung/apiNguoiDung";

const { GET_ALL_REQUEST, GET_ALL_SUCCESS, GET_ALL_FAIL } = require("./type");

const actGetAllUserRequest = () => ({
  type: GET_ALL_REQUEST,
});
const actGetAllUserSuccess = (user) => ({
  type: GET_ALL_SUCCESS,
  payload: user,
});
const actGetAllUserFail = (error) => ({
  type: GET_ALL_FAIL,
  payload: error,
});

export const actGetAllUser = (tenNguoiDung='') => {
  return async (dispatch) => {
    dispatch(actGetAllUserRequest());
    try {
      const result = await apiNguoiDung.getAllUser(tenNguoiDung);
      //   console.log(result.data)
      dispatch(actGetAllUserSuccess(result.data));
    } catch (err) {
      dispatch(actGetAllUserFail(err));
    }
  };
};
