import Home from "containers/client/Home/Home";

import SearchResult from "containers/client/SearchResult/SearchResult";

import QuanLyNguoiDung from "containers/admin/quanLyNguoiDung/QuanLyNguoiDung";
import QuanLyKhoaHoc from "containers/admin/quanLyKhoaHoc/QuanLyKhoaHoc";
import ThemNguoiDung from "containers/admin/quanLyNguoiDung/themNguoiDung/ThemNguoiDung";
import ThemKhoaHoc from "containers/admin/quanLyKhoaHoc/themKhoaHoc/ThemKhoaHoc";
import CourseCatalog from "containers/client/CourseCatalog/CourseCatalog";
import CourseDetails from "containers/client/CourseDetails/CourseDetails";
import Userinfo from "containers/client/UserInfomation/UserInfo";

export const clientRoutes = [
  {
    path: '/',
    component: Home,
    exact: true,
    isPrivate: false,
  },
  {
    path: '/searchResult/:searchValue',
    component: SearchResult,
    exact: true,
    isPrivate: false,
  },
  {
    path: '/courseCatalog/:courseCatalogId',
    component: CourseCatalog,
    exact: false,
    isPrivate: false,
  },
  {
    path: '/courseDetails/:courseID',
    component: CourseDetails,
    exact: false,
    isPrivate: false,
  },
  {
    path: '/userInfo',
    component: Userinfo,
    exact: false,
    isPrivate: false,
  },
]
//admin
export const adminRoutes = [
  {
    path: "/admin/quanlykhoahoc",
    component: QuanLyKhoaHoc,
    exact: true,
    isPrivate: true,
  },
  {
    path: "/admin/quanlykhoahoc/themKhoaHoc",
    component: ThemKhoaHoc,
    exact: false,
    isPrivate: true,
  },
  {
    path: "/admin/quanlynguoidung",
    component: QuanLyNguoiDung,
    exact: true,
    isPrivate: true,
  },
  {
    path: "/admin/quanlynguoidung/themNguoiDung",
    component: ThemNguoiDung,
    exact: false,
    isPrivate: true,
  },

];
