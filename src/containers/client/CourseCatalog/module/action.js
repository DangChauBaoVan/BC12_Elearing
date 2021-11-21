import quanLyKhoaHoc from "../../../../apis/QuanLyKhoaHoc"
import { GET_COURSE_BY_CATALOG_FAIL, GET_COURSE_BY_CATALOG_REQUEST, GET_COURSE_BY_CATALOG_SUCCESS } from "./type";

const actGetCourseByCataLogRequest = () => ({
    type:GET_COURSE_BY_CATALOG_REQUEST,
})
const actGetCourseByCataLogSuccess = (course) => ({
    type:GET_COURSE_BY_CATALOG_SUCCESS,
    payload: course
})
const actGetCourseByCataLogFail = (err) => ({
    type:GET_COURSE_BY_CATALOG_FAIL,
    payload: err
})

export const actGetCourseByCataLog = (courseCatalogID) =>{
    return dispatch => {

        dispatch(actGetCourseByCataLogRequest());
        quanLyKhoaHoc.layDSKhoaHocTheoDanhMuc(courseCatalogID)
        .then(respone => {
            dispatch(actGetCourseByCataLogSuccess(respone.data));
        })
        .catch(err => {
            dispatch(actGetCourseByCataLogFail('Unable To Get Data'))
        })
    }
}