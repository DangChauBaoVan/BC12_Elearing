import { GROUP_ID } from "settings/apiConfig";
import callApi from "utils/callApi";

export const apiNguoiDung = {
    getAllUser(tenNguoiDung= '') {
        if(tenNguoiDung) {
            return callApi(`QuanLyNguoiDung/TimKiemNguoiDung?MaNhom=${GROUP_ID}&tuKhoa=${tenNguoiDung}`)
        }
        return callApi(`QuanLyNguoiDung/TimKiemNguoiDung?MaNhom=${GROUP_ID}`)
    },
    themNguoiDung(form ,accessToken) {
        return callApi(`QuanLyNguoiDung/ThemNguoiDung`, "POST", form, accessToken)
    },
    capNhatNguoiDung(form ,accessToken) {
        return callApi(`QuanLyNguoiDung/CapNhatThongTinNguoiDung`, "PUT", form, accessToken)
    },
    xoaNguoiDung(taiKhoan ,accessToken) {
        return callApi(`QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${taiKhoan}`, "DELETE", taiKhoan, accessToken)
    },

    //phần ghi danh
    //Lấy danh sách người dùng  chưa ghi danh khóa học đó
    danhSachNguoiDungChuaGhiDanh(maKhoaHoc, accessToken) {
        return callApi(`QuanLyNguoiDung/LayDanhSachNguoiDungChuaGhiDanh`, "POST", maKhoaHoc, accessToken)
    },
    //danh sách nguoif dùng chờ xác nhận ghi danh
    danhSachNguoiDungChoDangKy(maKhoaHoc, accessToken) {
        return callApi(`QuanLyNguoiDung/LayDanhSachHocVienChoXetDuyet`, "POST", maKhoaHoc, accessToken)
    },
    //Lấy danh sách người dùng đã ghi danh vào khóa học đó
    danhSachNguoiDungDaGhiDanh(maKhoaHoc, accessToken) {
        return callApi(`QuanLyNguoiDung/LayDanhSachHocVienKhoaHoc`, "POST", maKhoaHoc, accessToken)
    }
}