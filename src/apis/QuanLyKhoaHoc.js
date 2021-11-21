import { GROUP_ID } from "settings/apiConfig";
import callApi from "utils/callApi";

const quanLyKhoaHoc = {
  layDanhMucKhoaHoc() {
    return callApi(`QuanLyKhoaHoc/LayDanhMucKhoaHoc`);
  },
  layDanhSachKhoaHoc(tenKhoaHoc = "") {
    if (tenKhoaHoc !== "") {
      return callApi(
        `QuanLyKhoaHoc/LayDanhSachKhoaHoc?tenKhoaHoc=${tenKhoaHoc}&MaNhom=${GROUP_ID}`
      );
    }
    return callApi(`QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=${GROUP_ID}`);
  },
  layDSKhoaHocTheoDanhMuc(maDanhMuc) {
    return callApi(
      `QuanLyKhoaHoc/LayKhoaHocTheoDanhMuc?maDanhMuc=${maDanhMuc}&MaNhom=${GROUP_ID}`
    );
  },
  layKhoaHoc(maKhoaHoc) {
    return callApi(`QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=${maKhoaHoc}`);
  },
  dangKyKhoaHoc(thongTinDangKy, token) {
    return callApi(
      "QuanLyKhoaHoc/DangKyKhoaHoc",
      "POST",
      thongTinDangKy,
      token
    );
  },
  //thêm khóa học mới
  themKhoaHoc(form) {
    return callApi(`QuanLyKhoaHoc/ThemKhoaHocUploadHinh`, "POST", form);
  },
  //cập nhật khóa học
  capNhatKhoaHoc(form) {
    return callApi(`QuanLyKhoaHoc/CapNhatKhoaHocUpload`, "POST", form);
  },
  //xóa khóa học
  xoaKhoaHoc(maKhoaHoc, accessToken) {
    return callApi(
      `QuanLyKhoaHoc/XoaKhoaHoc?MaKhoaHoc=${maKhoaHoc}`,
      "DELETE",
      maKhoaHoc,
      accessToken
    );
  },

  //ghi danh
  //đăng ký khóa học
  dangKyKhoaHoc(form, accessToken) {
    return callApi(`QuanLyKhoaHoc/DangKyKhoaHoc`, "POST", form, accessToken);
  },
  //Xác thực người dùng ghi danh vào khóa học đó
  xacNhanNguoiDung(form, accessToken) {
    return callApi(`QuanLyKhoaHoc/GhiDanhKhoaHoc`, "POST", form, accessToken);
  },

  huyGhiDanh(form, accessToken) {
    return callApi(`QuanLyKhoaHoc/HuyGhiDanh`, "POST", form, accessToken);
  },
};

export default quanLyKhoaHoc;
