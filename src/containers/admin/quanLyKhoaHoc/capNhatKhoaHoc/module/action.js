import quanLyKhoaHoc from "apis/QuanLyKhoaHoc";

export const actCapNhatKhoaHoc = (form, history) => {
  return (dispatch) => {
    quanLyKhoaHoc
      .capNhatKhoaHoc(form)
      .then((res) => {
        console.log(res.data)
        alert('cập nhật thành công')
        history.push("/admin/quanlykhoahoc")
      })
      .catch((err) => {
        alert(err.response?.data)
        console.log(err.response?.data);
      });
  };
};
