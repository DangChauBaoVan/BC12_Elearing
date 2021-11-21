import {
  GET_MA_KHOA_HOC_SUCCESS,
  GET_MA_KHOA_HOC_REQUEST,
  GET_MA_KHOA_HOC_FAIL,
} from "./type";

const initialState = {
  maDanhMucKhoaHoc: [],
  loading: false,
  err: "",
};

const maDanhMucReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_MA_KHOA_HOC_REQUEST: {
      return { ...state, loading: true };
    }
    case GET_MA_KHOA_HOC_SUCCESS: {
      // console.log('movie',payload)
      return { ...state, maDanhMucKhoaHoc: payload, loading: false };
    }
    case GET_MA_KHOA_HOC_FAIL: {
      return { ...state, err: payload, loading: false };
    }
    default:
      return state;
  }
};
export default maDanhMucReducer;
