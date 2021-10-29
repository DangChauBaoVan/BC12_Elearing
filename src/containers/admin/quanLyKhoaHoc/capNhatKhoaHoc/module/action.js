import { apiaKhoaHoc } from "assets/apiKhoaHoc/apiaKhoaHoc";

export const actCapNhatKhoaHoc = (form) => {
  return (dispatch) => {
    apiaKhoaHoc
      .capNhatKhoaHoc(form)
      .then((res) => {
        console.log(res.data)
        alert('cập nhật thành công')
      })
      .catch((err) => {
        alert(err.response?.data)
        console.log(err.response?.data);
      });
  };
};
