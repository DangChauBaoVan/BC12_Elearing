import { GROUP_ID } from 'settings/apiConfig';
import callApi from 'utils/callApi';

const quanLyNguoiDungApi = {
   
    loginApi(loginInfo) {
        return callApi(`QuanLyNguoiDung/DangNhap`,'POST',loginInfo)
    },
    getUserInfoApi(account,token){
        return callApi(`QuanLyNguoiDung/ThongTinTaiKhoan`,'POST',account,token)
    }
}

export default quanLyNguoiDungApi;