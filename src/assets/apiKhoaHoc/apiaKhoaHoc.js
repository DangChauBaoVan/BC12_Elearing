import callApi from "utils/callApi";
import { GROUP_ID } from "settings/apiConfig";

export const apiaKhoaHoc = {
    getAllEdu(tenKhoaHoc='') {
        if(tenKhoaHoc) {
            return callApi(`QuanLyKhoaHoc/LayDanhSachKhoaHoc?tenKhoaHoc=${tenKhoaHoc}&MaNhom=${GROUP_ID}`)
        }
        return callApi(`QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=${GROUP_ID}`)
    }
}