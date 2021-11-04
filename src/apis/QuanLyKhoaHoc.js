import { GROUP_ID } from 'settings/apiConfig';
import callApi from 'utils/callApi';

const quanLyKhoaHoc = {
   
    layDanhMucKhoaHoc() {
        return callApi(`QuanLyKhoaHoc/LayDanhMucKhoaHoc`)
    },
    layDanhSachKhoaHoc(){
        return callApi(`QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=${GROUP_ID}`)
    }
}

export default quanLyKhoaHoc;