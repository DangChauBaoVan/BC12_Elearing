import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import ReactPaginate from "react-paginate";

//scss
import "./ghiDanh.scss";
import {
  actHuyNguoiDungGhiDanh,
  actXacThucNguoiDungDangKy,
  actXacThucNguoiDungGhiDanh,
} from "./moduleThemXoaSua/action";

export default function GhiDanh(props) {
  const dispatch = useDispatch();
  const accessToken = useSelector(
    (state) => state.loginReducer.currentUser.accessToken
  );
  const khoaHocNguoiDungChuaGhiDanh = useSelector(
    (state) =>
      state.danhSachKHoaHocNguoiDungChuaGhiDanhReducer
        .khoaHocNguoiDungChuaGhiDanh
  );
  const danhSachKhoaHocChoXacNhan = useSelector(
    (state) => state.danhSachKhoaHocChoXacNhan.danhSachKhoaHocChoXacNhan
  );
  const danhSachKhoaHocDaGhiDanh = useSelector(
    (state) => state.danhSachKhoaHocDaGhiDanh.danhSachKhoaHocDaGhiDanh
  );


  const arrOne = [];
  const updateQuantity = () => {
    for (let i = 0; i < danhSachKhoaHocChoXacNhan.length; i++) {
      let addQuantity = { ...danhSachKhoaHocChoXacNhan[i], quantity: i };
      arrOne.push(addQuantity);
    }
  };
  updateQuantity();
  //paginate danhSachKhoaHocChoXacNhan
  const [pageNumberOne, setPageNumberOne] = useState(0);
  const userPerPageOne = 3;
  const pagesVisitedOne = pageNumberOne * userPerPageOne;
  const pageCountOne = Math.ceil(
    danhSachKhoaHocChoXacNhan.length / userPerPageOne
  );
  const changePageOne = ({ selected }) => {
    setPageNumberOne(selected);
  };

  //add quantity danhSachKhoaHocChoXacNhan
  const arrTwo = [];
  const updateQuantityTwo = () => {
    for (let i = 0; i < danhSachKhoaHocDaGhiDanh.length; i++) {
      let addQuantity = { ...danhSachKhoaHocDaGhiDanh[i], quantity: i };
      arrTwo.push(addQuantity);
    }
  };
  updateQuantityTwo();
  //paginate cho danh sách người dùng chờ xác nhận vào khóa học
  const [pageNumberTwo, setPageNumberTwo] = useState(0);
  const userPerPageTwo = 3;
  const pagesVisitedTwo = pageNumberTwo * userPerPageTwo;
  const pageCountTwo = Math.ceil(danhSachKhoaHocDaGhiDanh.length / userPerPageTwo);
  const changePageTwo = ({ selected }) => {
    setPageNumberTwo(selected);
  };

  //form dăng ký khóa học
  const [form, setform] = useState([]);

  //set value select
  const onChangeSel = (e) => {
    setform({ ...form, maKhoaHoc: e.target.value, taiKhoan: props.taiKhoan });
  };

  // đăng ký khóa học
  const dangKyKhoaHoc = () => {
    dispatch(actXacThucNguoiDungDangKy(form, accessToken));
  };
  //xác nhận người dùng vào khóa học
  const xacNhanNguoiDung = (maKhoaHoc) => {
    console.log();
    dispatch(
      actXacThucNguoiDungGhiDanh(
        { maKhoaHoc: maKhoaHoc, taiKhoan: props.taiKhoan },
        accessToken
      )
    );
  };
  //hủy người dùng vào khóa học
  const huyKhoaHoc = (maKhoaHoc) => {
    dispatch(
      actHuyNguoiDungGhiDanh(
        { maKhoaHoc: maKhoaHoc, taiKhoan: props.taiKhoan },
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
                {khoaHocNguoiDungChuaGhiDanh.map((user) => {
                  const { maKhoaHoc, tenKhoaHoc } = user;
                  return <option value={maKhoaHoc}>{tenKhoaHoc}</option>;
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
            <h2>Khóa học chờ ghi danh</h2>
            <table class="table">
              <thead>
                <tr>
                  <th>STT</th>
                  <th>Tên khóa học</th>
                  <th>Chờ xác nhận</th>
                </tr>
              </thead>
              <tbody>
                {arrOne
                  .slice(pagesVisitedOne, pagesVisitedOne + userPerPageOne)
                  .map((edu) => {
                    const { maKhoaHoc, tenKhoaHoc, quantity } = edu;
                    return (
                      <tr>
                        <td>{quantity + 1}</td>
                        <td>{tenKhoaHoc}</td>
                        <td>
                          <button
                            className="btn btn-success"
                            onClick={() => xacNhanNguoiDung(maKhoaHoc)}
                          >
                            Xác nhân
                          </button>
                          <button
                            className="btn btn-danger"
                            onClick={() => huyKhoaHoc(maKhoaHoc)}
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
            <h2>Khóa học đã ghi danh</h2>
            <table class="table">
              <thead>
                <tr>
                  <th>STT</th>
                  <th>Tên khóa học</th>
                  <th>Chờ xác nhận</th>
                </tr>
              </thead>
              <tbody>
                {arrTwo
                  .slice(pagesVisitedTwo, pagesVisitedTwo + userPerPageTwo)
                  .map((edu) => {
                    const { maKhoaHoc, tenKhoaHoc, quantity } = edu;
                    return (
                      <tr>
                        <td>{quantity + 1}</td>
                        <td>{tenKhoaHoc}</td>
                        <td>
                          <button
                            className="btn btn-danger"
                            onClick={() => huyKhoaHoc(maKhoaHoc)}
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
              className="btn btn-secondary"
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
