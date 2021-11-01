import { apiKhoaHoc } from "apis/apiKhoaHoc/apiKhoaHoc";
import {
  GET_ALL_EDU_REQUEST,
  GET_ALL_EDU_SUCCESS,
  GET_ALL_EDU_FAIL,
} from "./type";

const actGetAllEduRequest = () => ({
  type: GET_ALL_EDU_REQUEST,
});
const actGetAllEduSuccess = (edu) => ({
  type: GET_ALL_EDU_SUCCESS,
  payload: edu,
});
const actGetAllEduFail = (error) => ({
  type: GET_ALL_EDU_FAIL,
  payload: error,
});

export const actGetAllEdu = (tenKhoaHoc = '') => {
  return async (dispatch) => {
    dispatch(actGetAllEduRequest());
    try {
      const result = await apiKhoaHoc.getAllEdu(tenKhoaHoc);
      // console.log(result.data);
      dispatch(actGetAllEduSuccess(result.data));
    } catch (err) {
      dispatch(actGetAllEduFail(err));
    }
  };
};
