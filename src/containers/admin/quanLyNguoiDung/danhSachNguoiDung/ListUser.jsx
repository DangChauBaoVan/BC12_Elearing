import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { actGetAllUser } from "../module/action";
import ReactPaginate from "react-paginate";
import "./listUser.scss";
import GhiDanh from "../ghiDanh/GhiDanh";
import TimNguoiDung from "../timNguoiDung/TimNguoiDung";

export default function ListUser() {
  const arrUser = useSelector((state) => state.userReducer.user);

  const dispatch = useDispatch();

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
  const searchValue = e => {
    // console.log(e.target.value);
    dispatch(actGetAllUser(e.target.value))
  }
  return (
    <div>
      <TimNguoiDung searchValue={searchValue}/>
      <table class="table list__user__table">
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
                  <button
                    data-toggle="modal"
                    data-target="#exampleModalLong"
                    onClick={updateQuantity()}
                    className="btn btn-info"
                  >
                    Ghi danh
                  </button>
                  <button className="btn btn-primary">Sửa</button>
                  <button className="btn btn-danger">Xóa</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
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
