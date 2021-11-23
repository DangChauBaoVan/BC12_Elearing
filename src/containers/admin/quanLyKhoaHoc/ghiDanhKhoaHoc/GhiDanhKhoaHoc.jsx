import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ReactPaginate from "react-paginate";

import {
  actHuyNguoiDungGhiDanh,
  actXacThucNguoiDungDangKy,
  actXacThucNguoiDungGhiDanh,
} from "containers/admin/quanLyNguoiDung/ghiDanh/moduleThemXoaSua/action";

export default function GhiDanhKhoaHoc(props) {
  const dispatch = useDispatch();

  const accessToken = useSelector(
    (state) => state.loginReducer.currentUser.accessToken
  );
  const danhSachChuaDangKiKhoaHoc = useSelector(
    (state) => state.danhSachChuaGhiDanhKhoaHoc.danhSachChuaDangKiKhoaHoc
  );
  //danh sách chờ người quản lý xác nhận
  const nguoiDungDaGhiDanh = useSelector(
    (state) => state.danhSachNguoiDungChoGhiDanh.nguoiDungDaGhiDanh
  );
  //danh sách người dùng đã đăng ký khóa học
  const danhSachHocVienDaGhiDanh = useSelector(
    (state) => state.danhSachHocVienDaGhiDanh.danhSachHocVienDaGhiDanh
  );

  //add quantity nguoiDungDaGhiDanh
  const arrOne = [];
  const updateQuantity = () => {
    for (let i = 0; i < nguoiDungDaGhiDanh.length; i++) {
      let addQuantity = { ...nguoiDungDaGhiDanh[i], quantity: i };
      arrOne.push(addQuantity);
    }
  };
  updateQuantity();
  //paginate cho danh sách người dùng chờ xác nhận vào khóa học
  const [pageNumberOne, setPageNumberOne] = useState(0);
  const userPerPageOne = 3;
  const pagesVisitedOne = pageNumberOne * userPerPageOne;
  const pageCountOne = Math.ceil(nguoiDungDaGhiDanh.length / userPerPageOne);
  const changePageOne = ({ selected }) => {
    setPageNumberOne(selected);
  };

  //add quantity danhSachHocVienDaGhiDanh
  const arrTwo = [];
  const updateQuantityTwo = () => {
    for (let i = 0; i < danhSachHocVienDaGhiDanh.length; i++) {
      let addQuantity = { ...danhSachHocVienDaGhiDanh[i], quantity: i };
      arrTwo.push(addQuantity);
    }
  };
  updateQuantityTwo();
  //paginate cho danh sách người dùng chờ xác nhận vào khóa học
  const [pageNumberTwo, setPageNumberTwo] = useState(0);
  const userPerPageTwo = 3;
  const pagesVisitedTwo = pageNumberTwo * userPerPageTwo;
  const pageCountTwo = Math.ceil(danhSachHocVienDaGhiDanh.length / userPerPageTwo);
  const changePageTwo = ({ selected }) => {
    setPageNumberTwo(selected);
  };

  //form dăng ký khóa học
  const [form, setform] = useState([]);

  //set value select
  const onChangeSel = (e) => {
    setform({ ...form, taiKhoan: e.target.value, maKhoaHoc: props.maKhoaHoc });
  };

  // đăng ký khóa học
  const dangKyKhoaHoc = () => {
    dispatch(actXacThucNguoiDungDangKy(form, accessToken));
  };
  //xác nhận người dùng vào khóa học
  const xacNhanNguoiDung = (taiKhoan) => {
    dispatch(
      actXacThucNguoiDungGhiDanh(
        { taiKhoan: taiKhoan, maKhoaHoc: props.maKhoaHoc },
        accessToken
      )
    );
  };
  //hủy người dùng vào khóa học
  const huyKhoaHoc = (taiKhoan) => {
    dispatch(
      actHuyNguoiDungGhiDanh(
        { taiKhoan: taiKhoan, maKhoaHoc: props.maKhoaHoc },
        accessToken
      )
    );
  };
  return (
    <div
      className="modal fade"
      id="exampleModalLong"
      tabIndex={-1}
      role="dialog"
      aria-labelledby="exampleModalLongTitle"
      aria-hidden="true"
    >
      <div
        className="modal-dialog modal-dialog-scrollable modal-lg"
        role="document"
      >
        <div className="modal-content">
          <div className="modal-header">
            <div className="form-group mt-2" style={{ width: "64rem" }}>
              <h3 htmlFor="exampleFormControlSelect1">Ghi Danh Khóa Học</h3>
              <select
                className="form-control"
                id="exampleFormControlSelect"
                onChange={onChangeSel}
              >
                <option selected disabled>
                  --select--
                </option>
                {danhSachChuaDangKiKhoaHoc.map((user) => {
                  const { taiKhoan, hoTen } = user;
                  return <option value={taiKhoan}>{hoTen}</option>;
                })}
              </select>
            </div>
            <button
              className="btn btn-info mt-5"
              onClick={() => dangKyKhoaHoc()}
            >
              Ghi danh
            </button>
          </div>
          <div className="modal-body">
            <h2>Học viên chờ xác nhận</h2>
            <table class="table">
              <thead>
                <tr>
                  <th>STT</th>
                  <th>Tài khoản</th>
                  <th>Họ tên</th>
                  <th>Chờ xác nhận</th>
                </tr>
              </thead>
              <tbody>
                {arrOne
                  .slice(pagesVisitedOne, pagesVisitedOne + userPerPageOne)
                  .map((user) => {
                    const { taiKhoan, hoTen, quantity } = user;
                    return (
                      <tr>
                        <td>{quantity + 1}</td>
                        <td>{taiKhoan}</td>
                        <td>{hoTen}</td>
                        <td>
                          <button
                            className="btn btn-success"
                            onClick={() => xacNhanNguoiDung(taiKhoan)}
                          >
                            Xác nhân
                          </button>
                          <button
                            className="btn btn-danger"
                            onClick={() => huyKhoaHoc(taiKhoan)}
                          >
                            Hủy
                          </button>
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
            <ReactPaginate
              previousLabel={"Previous"}
              nextLabel={"Next"}
              pageCount={pageCountOne}
              onPageChange={changePageOne}
              containerClassName={"paginateBttn"}
              previousLinkClassName={"previousBttn"}
              nextLinkClassName={"nextBttn"}
              disabledClassName={"disablePaginate"}
              activeClassName={"activePaginate"}
            />
            <h2>Học viên đã tham gia khóa học</h2>
            <table class="table">
              <thead>
                <tr>
                  <th>STT</th>
                  <th>Tài khoản</th>
                  <th>Họ tên</th>
                  <th>Chờ xác nhận</th>
                </tr>
              </thead>
              <tbody>
                {arrTwo
                  .slice(pagesVisitedTwo, pagesVisitedTwo + userPerPageTwo)
                  .map((user) => {
                    const { taiKhoan, hoTen, quantity } = user;
                    return (
                      <tr>
                        <td>{quantity + 1}</td>
                        <td>{taiKhoan}</td>
                        <td>{hoTen}</td>
                        <td>
                          <button
                            className="btn btn-danger"
                            onClick={() => huyKhoaHoc(taiKhoan)}
                          >
                            Hủy
                          </button>
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
            <ReactPaginate
              previousLabel={"Previous"}
              nextLabel={"Next"}
              pageCount={pageCountTwo}
              onPageChange={changePageTwo}
              containerClassName={"paginateBttn"}
              previousLinkClassName={"previousBttn"}
              nextLinkClassName={"nextBttn"}
              disabledClassName={"disablePaginate"}
              activeClassName={"activePaginate"}
            />
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-danger"
              data-dismiss="modal"
            >
              Đóng
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
