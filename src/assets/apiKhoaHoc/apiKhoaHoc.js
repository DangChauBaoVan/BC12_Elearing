import callApi from "utils/callApi";
import { GROUP_ID } from "settings/apiConfig";

export const apiKhoaHoc = {
    getAllEdu(tenKhoaHoc='') {
        if(tenKhoaHoc) {
            return callApi(`QuanLyKhoaHoc/LayDanhSachKhoaHoc?tenKhoaHoc=${tenKhoaHoc}&MaNhom=${GROUP_ID}`)
        }
        return callApi(`QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=${GROUP_ID}`)
    },
    //lấy danh sách danh mục khóa học
    layDanhSachDanhMuckhoaHoc(tenDanhMuc) {
        return callApi(`QuanLyKhoaHoc/LayDanhMucKhoaHoc`, tenDanhMuc)
    },
    //thêm khóa học mới
    themKhoaHoc(form) {
        return callApi(`QuanLyKhoaHoc/ThemKhoaHocUploadHinh`, "POST", form)
    },
    //cập nhật khóa học
    capNhatKhoaHoc(form) {
        return callApi(`QuanLyKhoaHoc/CapNhatKhoaHocUpload`, "POST", form)
    },
    //xóa khóa học
    xoaKhoaHoc(maKhoaHoc, accessToken) {
        return callApi(`QuanLyKhoaHoc/XoaKhoaHoc?MaKhoaHoc=${maKhoaHoc}`, "DELETE", maKhoaHoc, accessToken)
    },
}