const initialState = {
  mahasiswa: [],
  loading: false,
  error: null,
};
const mahasiswaReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_MAHASISWA_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "FETCH_MAHASISWA_SUCCESS":
      return {
        ...state,
        loading: false,
        mahasiswa: action.payload,
      };
    case "FETCH_MAHASISWA_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default mahasiswaReducer;
