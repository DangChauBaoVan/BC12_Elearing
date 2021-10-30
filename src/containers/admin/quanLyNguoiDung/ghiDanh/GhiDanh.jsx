import React from "react";
//scss
import "./ghiDanh.scss";

export default function GhiDanh() {

  

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
              <select className="form-control" id="exampleFormControlSelect1">
                <option selected disabled>
                  --select--
                </option>
                <option>1</option>
                <option>2</option>
              </select>
            </div>
            <button className="btn btn-info mt-5">Ghi danh</button>
          </div>
          <div className="modal-body">
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
                <tr>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>
                    <button className="btn btn-success">Xác nhân</button>
                    <button className="btn btn-danger">Hủy</button>
                  </td>
                </tr>
              </tbody>
            </table>
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
                <tr>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>
                    <button className="btn btn-success">Xác nhân</button>
                    <button className="btn btn-danger">Hủy</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
            <button type="button" className="btn btn-primary">
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
