import quanLyKhoaHoc from "apis/QuanLyKhoaHoc";
import { actDanhSachHocVienDaGhiDanh } from "containers/admin/quanLyKhoaHoc/ghiDanhKhoaHoc/moduleDanhSachHocVienDaDangKi/action";
import { actDanhSachNguoiDungChoGhiDanh } from "containers/admin/quanLyKhoaHoc/ghiDanhKhoaHoc/moduleDanhSachNguoiDungChoGhiDanh/action";
import { actDanhSachKhoaHocDaGhiDanh } from "../modueDanhSachKhoaHocDaDangKy/action";
import { actDanhSachKhoaHocChoXacNhan } from "../moduleDanhSachKhoaHocChoXetDuyet/action";
import { actGetUserInfo } from "containers/client/UserInfomation/module/action";

export const actXacThucNguoiDungDangKy = (form, accessToken) => {
  return (dispatch) => {
    quanLyKhoaHoc
      .dangKyKhoaHoc(form, accessToken)
      .then((res) => {
        alert("Ghi danh thành công");
        dispatch(
          actDanhSachKhoaHocChoXacNhan({ taiKhoan: form.taiKhoan }, accessToken)
        );
        dispatch(
          actDanhSachNguoiDungChoGhiDanh(
            { maKhoaHoc: form.maKhoaHoc },
            accessToken
          )
        );
      })
      .catch((err) => {
        alert(err.response?.data);
      });
  };
};

export const actXacThucNguoiDungGhiDanh = (form, accessToken) => {
  return (dispatch) => {
    quanLyKhoaHoc
      .xacNhanNguoiDung(form, accessToken)
      .then((res) => {
        alert(res.data);
        dispatch(
          actDanhSachKhoaHocDaGhiDanh({ taiKhoan: form.taiKhoan }, accessToken)
        );
        dispatch(
          actDanhSachHocVienDaGhiDanh(
            { maKhoaHoc: form.maKhoaHoc },
            accessToken
          )
        );
        dispatch(
          actDanhSachKhoaHocChoXacNhan({ taiKhoan: form.taiKhoan }, accessToken)
        );
        dispatch(
          actDanhSachNguoiDungChoGhiDanh(
            { maKhoaHoc: form.maKhoaHoc },
            accessToken
          )
        );
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const actHuyNguoiDungGhiDanh = (form, accessToken) => {
  return (dispatch) => {
    quanLyKhoaHoc
      .huyGhiDanh(form, accessToken)
      .then((res) => {
        alert(res.data);
        dispatch(
          actDanhSachKhoaHocDaGhiDanh({ taiKhoan: form.taiKhoan }, accessToken)
        );
        dispatch(
          actDanhSachHocVienDaGhiDanh(
            { maKhoaHoc: form.maKhoaHoc },
            accessToken
          )
        );
        dispatch(
          actDanhSachKhoaHocChoXacNhan({ taiKhoan: form.taiKhoan }, accessToken)
        );
        dispatch(
          actDanhSachNguoiDungChoGhiDanh(
            { maKhoaHoc: form.maKhoaHoc },
            accessToken
          )
        );
        dispatch(actGetUserInfo(form, accessToken));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
