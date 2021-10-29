import { apiKhoaHoc } from "assets/apiKhoaHoc/apiKhoaHoc";
import { actGetAllEdu } from "../module/action";

export const actXoaKhoaHoc = (maKhoaHoc, accessToken) => {
  return (dispatch) =>
    apiKhoaHoc
      .xoaKhoaHoc(maKhoaHoc, accessToken)
      .then((res) => {
        alert("Xóa thành công");
        dispatch(actGetAllEdu());
      })
      .catch((err) => {
        alert(err.response?.data);
        console.log(err.response);
      });
};
