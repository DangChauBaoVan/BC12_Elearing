import { GROUP_ID } from "settings/apiConfig";
import callApi from "utils/callApi";

const quanLyNguoiDungApi = {
  loginApi(loginInfo) {
    return callApi(`QuanLyNguoiDung/DangNhap`, "POST", loginInfo);
  },
  getUserInfoApi(account, token) {
    return callApi(`QuanLyNguoiDung/ThongTinTaiKhoan`, "POST", account, token);
  },
  dangKy(form) {
    return callApi(`QuanLyNguoiDung/DangKy`, "POST", form);
  },
  getAllUser(tenNguoiDung = "") {
    if (tenNguoiDung) {
      return callApi(
        `QuanLyNguoiDung/TimKiemNguoiDung?MaNhom=${GROUP_ID}&tuKhoa=${tenNguoiDung}`
      );
    }
    return callApi(`QuanLyNguoiDung/TimKiemNguoiDung?MaNhom=${GROUP_ID}`);
  },
  themNguoiDung(form, accessToken) {
    return callApi(`QuanLyNguoiDung/ThemNguoiDung`, "POST", form, accessToken);
  },
  capNhatNguoiDung(form, accessToken) {
    return callApi(
      `QuanLyNguoiDung/CapNhatThongTinNguoiDung`,
      "PUT",
      form,
      accessToken
    );
  },
  xoaNguoiDung(taiKhoan, accessToken) {
    return callApi(
      `QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${taiKhoan}`,
      "DELETE",
      taiKhoan,
      accessToken
    );
  },

  //phần ghi danh
  //Lấy danh sách người dùng  chưa ghi danh khóa học đó
  danhSachNguoiDungChuaGhiDanh(maKhoaHoc, accessToken) {
    return callApi(
      `QuanLyNguoiDung/LayDanhSachNguoiDungChuaGhiDanh`,
      "POST",
      maKhoaHoc,
      accessToken
    );
  },
  //danh sách nguoif dùng chờ xác nhận ghi danh
  danhSachNguoiDungChoDangKy(maKhoaHoc, accessToken) {
    return callApi(
      `QuanLyNguoiDung/LayDanhSachHocVienChoXetDuyet`,
      "POST",
      maKhoaHoc,
      accessToken
    );
  },
  //Lấy danh sách người dùng đã ghi danh vào khóa học đó
  danhSachNguoiDungDaGhiDanh(maKhoaHoc, accessToken) {
    return callApi(
      `QuanLyNguoiDung/LayDanhSachHocVienKhoaHoc`,
      "POST",
      maKhoaHoc,
      accessToken
    );
  },
  //Lấy danh sách khóa học mà người dùng đó chưa ghi danh
  danhSachKhoaHocNguoiDungChuaGhiDanh(taiKhoan, accessToken) {
    return callApi(
      `QuanLyNguoiDung/LayDanhSachKhoaHocChuaGhiDanh?TaiKhoan=${taiKhoan}`,
      "POST",
      taiKhoan,
      accessToken
    );
  },
  //Lấy danh sách khóa học mà người dùng đó chờ xét duyệt
  danhSachKhoaHocNguoiDungChoXetDuyet(taiKhoan, accessToken) {
    return callApi(
      `QuanLyNguoiDung/LayDanhSachKhoaHocChoXetDuyet`,
      "POST",
      taiKhoan,
      accessToken
    );
  },
  //Lấy danh sách khóa học mà người dùng đó đã ghi danh
  danhSachKhoaHocNguoiDungDaGhiDanh(taiKhoan, accessToken) {
    return callApi(
      `QuanLyNguoiDung/LayDanhSachKhoaHocDaXetDuyet`,
      "POST",
      taiKhoan,
      accessToken
    );
  },
};

export default quanLyNguoiDungApi;
