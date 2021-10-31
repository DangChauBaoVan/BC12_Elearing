import { GROUP_ID } from "settings/apiConfig";
import callApi from "utils/callApi";

export const apiNguoiDung = {
    getAllUser(tenNguoiDung= '') {
        if(tenNguoiDung) {
            return callApi(`QuanLyNguoiDung/TimKiemNguoiDung?MaNhom=${GROUP_ID}&tuKhoa=${tenNguoiDung}`)
        }
        return callApi(`QuanLyNguoiDung/TimKiemNguoiDung?MaNhom=${GROUP_ID}`)
    }
}