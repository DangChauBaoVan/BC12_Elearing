import { apiaKhoaHoc } from "assets/apiKhoaHoc/apiaKhoaHoc";
import {
  GET_MA_KHOA_HOC_SUCCESS,
  GET_MA_KHOA_HOC_REQUEST,
  GET_MA_KHOA_HOC_FAIL,
} from "./type";

const actFetchMaKhoaHocRequest = () => ({
  type: GET_MA_KHOA_HOC_REQUEST,
});
const actFetchMaKhoaHocSuccess = (maKhoaHoc) => ({
  type: GET_MA_KHOA_HOC_SUCCESS,
  payload: maKhoaHoc,
});
const actFetchAllMovieFalse = (err) => ({
  type: GET_MA_KHOA_HOC_FAIL,
  payload: err,
});

export const actMaDanhMuc = () => {
  return (dispatch) => {
    dispatch(actFetchMaKhoaHocRequest());
    apiaKhoaHoc
      .getMaDanhMucKhoaHoc()
      .then((res) => {
        // console.log("data",res.data)
        dispatch(actFetchMaKhoaHocSuccess(res.data));
      })
      .catch((err) => {
        dispatch(actFetchAllMovieFalse(err));
      });
  };
};

export const actFormData = (form) => {
  return (dispatch) => {
    apiaKhoaHoc
      .postNewEdu(form)
      .then((res) => {
        // console.log(res);
        alert("Thêm khóa học thành công");
      })
      .catch((err) => {
        console.log(err.response?.data);
        alert(err.response?.data);
      });
  };
};
