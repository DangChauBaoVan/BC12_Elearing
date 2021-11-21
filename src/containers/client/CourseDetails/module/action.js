import quanLyKhoaHoc from "apis/QuanLyKhoaHoc";
import {
  GET_COURSE_DETAIL_SUCCESS,
  GET_COURSE_DETAIL_FAIL,
  DANG_KY_KHOA_HOC_THANH_CONG,
  DANG_KY_KHOA_HOC_THAT_BAI,
} from "./type";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const actGetCourseDetailSuccess = (course) => ({
  type: GET_COURSE_DETAIL_SUCCESS,
  payload: course,
});
const actGetCourseDetailFail = (error) => ({
  type: GET_COURSE_DETAIL_FAIL,
  payload: error,
});
export const actGetCourseDetail = (courseId) => {
  return (dispatch) => {
    quanLyKhoaHoc
      .layKhoaHoc(courseId)
      .then((res) => {
        dispatch(actGetCourseDetailSuccess(res.data));
      })
      .catch((error) => {
        dispatch(actGetCourseDetailFail(error));
      });
  };
};

const actDangKyKhoaHocThanhCong = (course) => ({
  type: DANG_KY_KHOA_HOC_THANH_CONG,
  payload: course,
});
const actDangKyKhoaHocThatBai = (error) => ({
  type: DANG_KY_KHOA_HOC_THAT_BAI,
  payload: error,
});
export const actDangKyKhoaHoc = (thongTinDangKy, token) => {
  const MySwal = withReactContent(Swal);
  return (dispatch) => {
    quanLyKhoaHoc
      .dangKyKhoaHoc(thongTinDangKy, token)
      .then((res) => {
        dispatch(actDangKyKhoaHocThanhCong(res.data));
        Swal.fire({
          toast: true,
          icon: "success",
          title: "Register Successfully",
          animation: true,
          position: "top-right",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener("mouseenter", Swal.stopTimer);
            toast.addEventListener("mouseleave", Swal.resumeTimer);
          },
        });
        console.log("success");
      })
      .catch((err) => {
        dispatch(actDangKyKhoaHocThatBai(err));
        MySwal.fire({
          title: "Không thể đăng ký",
          type: "error",
          icon: "error",
          text: "Bạn đã đăng ký khóa này rồi!",
          confirmButtonColor: "#de6262",
        });
        console.log(err);
      });
  };
};
