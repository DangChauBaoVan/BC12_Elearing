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
}