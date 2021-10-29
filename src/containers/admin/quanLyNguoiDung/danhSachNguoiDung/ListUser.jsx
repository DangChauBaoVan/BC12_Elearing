import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { actGetAllUser } from "../module/action";
import ReactPaginate from "react-paginate";
import "./listUser.scss";
import GhiDanh from "../ghiDanh/GhiDanh";
import TimNguoiDung from "../timNguoiDung/TimNguoiDung";
//font awesome
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { faEdit, faPen, faUserSlash } from "@fortawesome/free-solid-svg-icons";
import { actXoaNguoiDung } from "./action";

export default function ListUser() {
  const arrUser = useSelector((state) => state.userReducer.user);
  const history = useHistory();
  const dispatch = useDispatch();
  const accessToken = useSelector(
    (state) => state.loginReducer.currentUser.accessToken
  );
  useEffect(() => {
    dispatch(actGetAllUser());
  }, []);

  //add quantity

  const arr = [];

  const updateQuantity = () => {
    for (let i = 0; i < arrUser.length; i++) {
      let addQuantity = { ...arrUser[i], quantity: i };
      arr.push(addQuantity);
    }
  };

  updateQuantity();

  //paginate

  const [pageNumber, setPageNumber] = useState(0);

  const userPerPage = 5;

  const pagesVisited = pageNumber * userPerPage;

  const pageCount = Math.ceil(arrUser.length / userPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  // search
  const searchValue = (e) => {
    // console.log(e.target.value);
    dispatch(actGetAllUser(e.target.value));
  };
  // xóa người dùng
  const xoaNguoiDung = (taiKhoan) => {
    dispatch(actXoaNguoiDung(taiKhoan, accessToken))
  }
  return (
    <div>
      <TimNguoiDung searchValue={searchValue} />
      <div
        className="border__table"
        style={{ border: "slategray solid 1px", height: "34.3rem" }}
      >
        <table class="table">
          <thead>
            <tr>
              <th>STT</th>
              <th>Tài khoản</th>
              <th>Mật khẩu</th>
              <th>Họ tên</th>
              <th>Email</th>
              <th>Số diện thoại</th>
              <th>Thao tác</th>
            </tr>
          </thead>
          <tbody>
            {arr.slice(pagesVisited, pagesVisited + userPerPage).map((user) => {
              const { taiKhoan, matKhau, hoTen, email, soDt, quantity } = user;
              return (
                <tr>
                  <td>{quantity + 1}</td>
                  <td>{taiKhoan}</td>
                  <td>{matKhau}</td>
                  <td>{hoTen}</td>
                  <td>{email}</td>
                  <td>{soDt}</td>
                  <td>
                    <span data-toggle="popover" title="Ghi danh">
                      <button
                        data-toggle="modal"
                        data-target="#exampleModalLong"
                        onClick={updateQuantity()}
                        className="btn btn-info btn__edit__icon"
                      >
                        <Icon icon={faPen} />
                      </button>
                    </span>
                    <span data-toggle="popover" title="Sửa thông tin">
                      <button
                        className="btn btn-primary btn__edit__icon"
                        onClick={() => history.push({
                          pathname:"/admin/quanlynguoidung/capnhatnguoidung",
                          state:{user}
                        })}
                      >
                        <Icon icon={faEdit} />
                      </button>
                    </span>
                    <span data-toggle="popover" title="Xóa">
                      <button className="btn btn-danger btn__edit__icon" onClick={() => xoaNguoiDung(taiKhoan)}>
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
      <GhiDanh />
    </div>
  );
}
