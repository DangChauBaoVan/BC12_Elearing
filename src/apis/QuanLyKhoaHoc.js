import { GROUP_ID } from 'settings/apiConfig';
import callApi from 'utils/callApi';

const quanLyKhoaHoc = {

    layDanhMucKhoaHoc() {
        return callApi(`QuanLyKhoaHoc/LayDanhMucKhoaHoc`)
    },
    layDanhSachKhoaHoc(tenKhoaHoc = "") {
        if (tenKhoaHoc !== "") {
            return callApi(`QuanLyKhoaHoc/LayDanhSachKhoaHoc?tenKhoaHoc=${tenKhoaHoc}&MaNhom=${GROUP_ID}`)
        }
        return callApi(`QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=${GROUP_ID}`)
    },
    layDSKhoaHocTheoDanhMuc(maDanhMuc) {
        return callApi(`QuanLyKhoaHoc/LayKhoaHocTheoDanhMuc?maDanhMuc=${maDanhMuc}&MaNhom=${GROUP_ID}`)
    },
    layKhoaHoc(maKhoaHoc) {
        return callApi(`QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=${maKhoaHoc}`)
    },
    dangKyKhoaHoc(thongTinDangKy,token){
        return callApi("QuanLyKhoaHoc/DangKyKhoaHoc","POST",thongTinDangKy,token)
    }

}

export default quanLyKhoaHoc;