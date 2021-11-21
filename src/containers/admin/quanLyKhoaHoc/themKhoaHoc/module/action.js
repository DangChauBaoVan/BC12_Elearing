import quanLyKhoaHoc from "apis/QuanLyKhoaHoc";

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
    quanLyKhoaHoc.layDanhMucKhoaHoc()
      .then((res) => {
        dispatch(actFetchMaKhoaHocSuccess(res.data));
      })
      .catch((err) => {
        dispatch(actFetchAllMovieFalse(err));
      });
  };
};

export const actThemKhoaHoc = (form, history) => {
  return (dispatch) => {
    quanLyKhoaHoc
      .themKhoaHoc(form)
      .then((res) => {
        console.log(res.data);
        alert("Thêm khóa học thành công");
        history.push("/admin/quanlykhoahoc")
      })
      .catch((err) => {
        console.log(err.response?.data);
        alert(err.response?.data);
      });
  };
};
