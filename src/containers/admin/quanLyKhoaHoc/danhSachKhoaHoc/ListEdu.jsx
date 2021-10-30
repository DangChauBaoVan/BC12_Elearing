import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { actGetAllEdu } from "../module/action";
import ReactPaginate from "react-paginate";
import { useHistory } from "react-router-dom";
//component
import GhiDanhKhoaHoc from "../ghiDanhKhoaHoc/GhiDanhKhoaHoc";
import TimKhoaHoc from "../timKhoaHoc/TimKhoaHoc";
//font awesome
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { faEdit, faPen, faUserSlash } from "@fortawesome/free-solid-svg-icons";

import "./listEdu.scss";
//action
import { actXoaKhoaHoc } from "./action";
import actDanhSachNguoiDungChuaGhiDanh from "../ghiDanhKhoaHoc/moduleDanhSachHocVienChuaGhiDanh/action";
import { actDanhSachNguoiDungChoGhiDanh } from "../ghiDanhKhoaHoc/moduleDanhSachNguoiDungChoGhiDanh/action";
import { actDanhSachHocVienDaGhiDanh } from "../ghiDanhKhoaHoc/moduleDanhSachHocVienDaDangKi/action";

export default function ListEdu() {
  const arrEdu = useSelector((state) => state.eduReducer.edu);
  const history = useHistory();
  const dispatch = useDispatch();

  const accessToken = useSelector(
    (state) => state.loginReducer.currentUser.accessToken
  );

  useEffect(() => {
    dispatch(actGetAllEdu());
  }, []);

  //add quantity

  const arr = [];

  const updateQuantity = () => {
    for (let i = 0; i < arrEdu.length; i++) {
      let addQuantity = { ...arrEdu[i], quantity: i };
      arr.push(addQuantity);
    }
  };

  updateQuantity();

  //paginate

  const [pageNumber, setPageNumber] = useState(0);

  const userPerPage = 5;

  const pagesVisited = pageNumber * userPerPage;

  const pageCount = Math.ceil(arrEdu.length / userPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  //search

  const searchValue = (e) => {
    dispatch(actGetAllEdu(e.target.value));
  };

  // set mã khóa học cho act
  const [maKhoaHoc, setMaKhoaHoc] = useState([]);

  const maKHoaHocChoAct = (maKhoaHoc) => {
    //act danh sách người dùng chưa đăng ký
    dispatch(
      actDanhSachNguoiDungChuaGhiDanh({ maKhoaHoc: maKhoaHoc }, accessToken)
    );
    //act danh sách người dùng chò xét duyệt
    dispatch(
      actDanhSachNguoiDungChoGhiDanh({ maKhoaHoc: maKhoaHoc }, accessToken)
    );
    // danh sách người dùng đã ghi danh
    dispatch(actDanhSachHocVienDaGhiDanh({ maKhoaHoc: maKhoaHoc }, accessToken))
    setMaKhoaHoc(maKhoaHoc);
  };
  return (
    <div>
      <TimKhoaHoc searchValue={searchValue} />
      <div className="border__table">
        <table class="table">
          <thead>
            <tr>
              <th>STT</th>
              <th>Mã khóa học</th>
              <th>Tên khóa học</th>
              <th>Hình ảnh</th>
              <th>Lượt xem</th>
              <th>Người tạo</th>
              <th>Thao tác</th>
            </tr>
          </thead>
          <tbody>
            {arr.slice(pagesVisited, pagesVisited + userPerPage).map((edu) => {
              const { maKhoaHoc, tenKhoaHoc, hinhAnh, luotXem, quantity } = edu;
              const { hoTen } = edu.nguoiTao;
              return (
                <tr>
                  <td>{quantity + 1}</td>
                  <td>{maKhoaHoc}</td>
                  <td>{tenKhoaHoc}</td>
                  <td>
                    <img width="60px" src={hinhAnh} alt="..." />
                  </td>
                  <td>{luotXem}</td>
                  <td>{hoTen}</td>
                  <td>
                    <span data-toggle="popover" title="Ghi danh">
                      <button
                        data-toggle="modal"
                        data-target="#exampleModalLong"
                        className="btn btn-info btn__edit__icon"
                        onClick={() => maKHoaHocChoAct(maKhoaHoc)}
                      >
                        <Icon icon={faPen} />
                      </button>
                    </span>
                    <span data-toggle="popover" title="Sửa thông tin">
                      <button
                        className="btn btn-primary btn__edit__icon"
                        onClick={() =>
                          history.push({
                            pathname: "/admin/quanlykhoahoc/capnhatkhoahoc",
                            state: { edu },
                          })
                        }
                      >
                        <Icon icon={faEdit} />
                      </button>
                    </span>
                    <span data-toggle="popover" title="Xóa">
                      <button
                        className="btn btn-danger btn__edit__icon"
                        onClick={() => {
                          if (
                            window.confirm(
                              "Bạn có chắc muốn xóa khóa học này không"
                            )
                          ) {
                            dispatch(actXoaKhoaHoc(maKhoaHoc, accessToken));
                          }
                        }}
                      >
                        <Icon icon={faUserSlash} />
                      </button>
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"paginateBttn"}
        previousLinkClassName={"previousBttn"}
        nextLinkClassName={"nextBttn"}
        disabledClassName={"disablePaginate"}
        activeClassName={"activePaginate"}
      />
      <GhiDanhKhoaHoc maKhoaHoc={maKhoaHoc} />
    </div>
  );
}
