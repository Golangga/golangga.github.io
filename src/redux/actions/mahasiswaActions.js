import axios from "axios";

export const fetchMahasiswa = () => async (dispatch) => {
  dispatch({ type: "FETCH_MAHASISWA_REQUEST" });

  try {
    const response = await axios.get("http://localhost:5000/mahasiswa");
    dispatch({ type: "FETCH_MAHASISWA_SUCCESS", payload: response.data });
  } catch (error) {
    dispatch({ type: "FETCH_MAHASISWA_FAILURE", payload: error.message });
  }
};
