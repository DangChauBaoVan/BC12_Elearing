import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { actGetAllEdu } from "../module/action";

import ReactPaginate from "react-paginate";
//component
import GhiDanhKhoaHoc from "../ghiDanhKhoaHoc/GhiDanhKhoaHoc";
import TimKhoaHoc from "../timKhoaHoc/TimKhoaHoc";
//font awesome
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { faEdit, faPen, faUserSlash } from "@fortawesome/free-solid-svg-icons";

import "./listEdu.scss"

export default function ListEdu() {
  const arrEdu = useSelector((state) => state.eduReducer.edu);

  const dispatch = useDispatch();

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
                      >
                        <Icon icon={faPen} />
                      </button>
                    </span>
                    <span data-toggle="popover" title="Sửa thông tin">
                      <button className="btn btn-primary btn__edit__icon">
                        <Icon icon={faEdit} />
                      </button>
                    </span>
                    <span data-toggle="popover" title="Xóa">
                      <button className="btn btn-danger btn__edit__icon">
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
      <GhiDanhKhoaHoc />
    </div>
  );
}
