//src/actions/mahasiswaActions.js
import axios from "axios";

export const fetchMahasiswa = () => async (dispatch) => {
  dispatch({ type: "FETCH_MAHASISWA_REQUEST" });

  try {
    const response = await axios.get(
      "https://668d29fd099db4c579f1f02c.mockapi.io/api/v1/mahasiswa"
    );
    dispatch({ type: "FETCH_MAHASISWA_SUCCESS", payload: response.data });
  } catch (error) {
    dispatch({ type: "FETCH_MAHASISWA_FAILURE", payload: error.message });
  }
};
