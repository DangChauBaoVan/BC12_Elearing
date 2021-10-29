import { apiaKhoaHoc } from "assets/apiKhoaHoc/apiaKhoaHoc";

export const actXacThucNguoiDungDangKi = (form, accessToken) => {
  return (dispatch) => {
    apiaKhoaHoc
      .xacThucNguoiDungDangKi(form, accessToken)
      .then((res) => {
        alert(res.data)
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const actXacThucNguoiDungGhiDanh = (form, accessToken) => {
  return (dispatch) => {
    apiaKhoaHoc
      .xacThucNguoiDungGhiDanh(form, accessToken)
      .then((res) => {
        alert(res.data)
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const actHuyNguoiDungGhiDanh = (form, accessToken) => {
  return (dispatch) => {
    apiaKhoaHoc
      .huyGHiDanh(form, accessToken)
      .then((res) => {
        alert(res.data)
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
