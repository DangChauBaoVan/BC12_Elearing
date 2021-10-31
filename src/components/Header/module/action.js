
import quanLyKhoaHoc from "apis/QuanLyKhoaHoc";
import { LAY_DANH_MUC_KHOA_HOC_THANH_CONG, LAY_DANH_MUC_KHOA_HOC_THAT_BAI } from"./type";

const actLayDanhMucKhoaHocThanhCong = danhMucKhoaHoc => ({
    type:LAY_DANH_MUC_KHOA_HOC_THANH_CONG,
    payload:danhMucKhoaHoc
})
const actLayDanhMucKhoaHocThatBai = err => ({
    type:LAY_DANH_MUC_KHOA_HOC_THAT_BAI,
    payload:err
})
export const actLayDanhMucKhoaHoc = () => {
    return dispatch => {
        quanLyKhoaHoc.layDanhMucKhoaHoc()
        .then(respone => {
            dispatch(actLayDanhMucKhoaHocThanhCong(respone.data));
        })
        .catch(err => {
            dispatch(actLayDanhMucKhoaHocThatBai('Unable To Login'))
        })
    }
}