import Home from "containers/client/Home/Home";

import SearchResult from "containers/client/SearchResult/SearchResult";

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

//admin
import QuanLyNguoiDung from "containers/admin/quanLyNguoiDung/QuanLyNguoiDung";
import QuanLyKhoaHoc from "containers/admin/quanLyKhoaHoc/QuanLyKhoaHoc";
import ThemNguoiDung from "containers/admin/quanLyNguoiDung/themNguoiDung/ThemNguoiDung";
import ThemKhoaHoc from "containers/admin/quanLyKhoaHoc/themKhoaHoc/ThemKhoaHoc";

export const clientRoutes = [
  {
    path: "/",
    component: Home,
    exact: true,
    isPrivate: false,
  },
];

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
