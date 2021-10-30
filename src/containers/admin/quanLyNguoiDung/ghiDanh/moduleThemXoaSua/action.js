import { apiKhoaHoc } from "assets/apiKhoaHoc/apiKhoaHoc";

export const actXacThucNguoiDungDangKy = (form, accessToken) => {
  return (dispatch) => {
    apiKhoaHoc
      .dangKyKhoaHoc(form, accessToken)
      .then((res) => {
        alert("Ghi danh thành công");
      })
      .catch((err) => {
        alert(err.response?.data);
      });
  };
};

export const actXacThucNguoiDungGhiDanh = (form, accessToken) => {
  return (dispatch) => {
    apiKhoaHoc
      .xacNhanNguoiDung(form, accessToken)
      .then((res) => {
        alert(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const actHuyNguoiDungGhiDanh = (form, accessToken) => {
  return (dispatch) => {
    apiKhoaHoc
      .huyGhiDanh(form, accessToken)
      .then((res) => {
        alert(res.data)
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
