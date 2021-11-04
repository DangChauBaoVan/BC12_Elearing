import quanLyKhoaHoc from "apis/QuanLyKhoaHoc";
import { LAY_DANH_SACH_KHOA_HOC_FAIL, LAY_DANH_SACH_KHOA_HOC_REQUEST, LAY_DANH_SACH_KHOA_HOC_SUCCESS } from"./type";

const actLayDanhSachKhoaHocRequest = () => ({
    type:LAY_DANH_SACH_KHOA_HOC_REQUEST,
})
const actLayDanhSachKhoaHocSucces = danhSachKhoaHoc => ({
    type:LAY_DANH_SACH_KHOA_HOC_SUCCESS,
    payload:danhSachKhoaHoc
})
const actLayDanhSachKhoaHocFail= err => ({
    type:LAY_DANH_SACH_KHOA_HOC_FAIL,
    payload:err
})
export const actLayDanhSachKhoaHoc = () => {
    return dispatch => {
        dispatch(actLayDanhSachKhoaHocRequest());
        quanLyKhoaHoc.layDanhSachKhoaHoc()
        .then(respone => {
            dispatch(actLayDanhSachKhoaHocSucces(respone.data));
        })
        .catch(err => {
            dispatch(actLayDanhSachKhoaHocFail('Unable To Get Data'))
        })
    }
}