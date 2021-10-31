import { GET_ALL_EDU_FAIL, GET_ALL_EDU_REQUEST, GET_ALL_EDU_SUCCESS } from "./type";

const initialState = {
  edu: [],
  loading: false,
  error: null,
};

const eduReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ALL_EDU_REQUEST:
      return { ...state, loading: true };
    case GET_ALL_EDU_SUCCESS:
      return { ...state, loading: false, edu: payload };
    case GET_ALL_EDU_FAIL:
      return { ...state, loading: false, error: payload };

    default:
      return state;
  }
};

export default eduReducer;
