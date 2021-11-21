// import { createStore, combineReducers, applyMiddleware } from "redux";
// import { composeWithDevTools } from "redux-devtools-extension";
// import { persistStore, persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage";
// import thunk from "redux-thunk";
// import loginReducer from "containers/shared/Auth/Login/module/reducer";
import headerReducer from "components/Header/module/reducer";
import courseListReducer from "containers/client/CourseList/module/reducer";

import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
import loginReducer from 'containers/shared/Auth/Login/module/reducer';
import userReducer from "containers/admin/quanLyNguoiDung/module/userReducer";
import eduReducer from "containers/admin/quanLyKhoaHoc/module/eduReducer";
import courseCatalogReducer from "containers/client/CourseCatalog/module/reducer";
import courseInfoReducer from 'containers/client/CourseDetails/module/reducer';
import userInfoReducer from 'containers/client/UserInfomation/module/reducer';

//reducer
import maDanhMucReducer from "containers/admin/quanLyKhoaHoc/themKhoaHoc/module/reducer";

//ghi danh
import { danhSachChuaGhiDanhKhoaHoc } from "containers/admin/quanLyKhoaHoc/ghiDanhKhoaHoc/moduleDanhSachHocVienChuaGhiDanh/reducer";
import { danhSachNguoiDungChoGhiDanh } from "containers/admin/quanLyKhoaHoc/ghiDanhKhoaHoc/moduleDanhSachNguoiDungChoGhiDanh/reducer";
import { danhSachHocVienDaGhiDanh } from "containers/admin/quanLyKhoaHoc/ghiDanhKhoaHoc/moduleDanhSachHocVienDaDangKi/reducer";
import { danhSachKHoaHocNguoiDungChuaGhiDanhReducer } from "containers/admin/quanLyNguoiDung/ghiDanh/moduleDanhSachKhoaHocChuaDangKi/reducer";
import { danhSachKhoaHocChoXacNhan } from "containers/admin/quanLyNguoiDung/ghiDanh/moduleDanhSachKhoaHocChoXetDuyet/reducer";
import { danhSachKhoaHocDaGhiDanh } from "containers/admin/quanLyNguoiDung/ghiDanh/modueDanhSachKhoaHocDaDangKy/reducer";

const rootReducer = combineReducers({
  loginReducer,
  headerReducer,
  courseListReducer,
  userReducer,
  eduReducer,
  courseCatalogReducer,
  courseInfoReducer,
  userInfoReducer,
  maDanhMucReducer,
  //ghi danh
  danhSachChuaGhiDanhKhoaHoc,
  danhSachNguoiDungChoGhiDanh,
  danhSachHocVienDaGhiDanh,
  danhSachKHoaHocNguoiDungChuaGhiDanhReducer,
  danhSachKhoaHocChoXacNhan,
  danhSachKhoaHocDaGhiDanh,
})

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["loginReducer"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

const persistor = persistStore(store);

export { store, persistor };
