import { apiNguoiDung } from "apis/apiNguoiDung/apiNguoiDung";


export const actCapNhatNguoiDung = (form, accessToken, history) => {
  return (dispatch) => {
    apiNguoiDung.capNhatNguoiDung(form, accessToken)
      .then((res) => {
        // console.log(res.data)
        alert('cập nhật thành công')
        history.push('/admin/quanlynguoidung')
      })
      .catch((err) => {
        console.log(err.response);
      });
  };
};
