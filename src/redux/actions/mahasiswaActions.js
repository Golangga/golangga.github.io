export const fetchMahasiswa = () => async (dispatch) => {
  dispatch({ type: "FETCH_MAHASISWA_REQUEST" });

  try {
    const response = await fetch("http://localhost:5000/mahasiswa");
    const data = await response.json();

    dispatch({
      type: "FETCH_MAHASISWA_SUCCESS",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "FETCH_MAHASISWA_FAILURE",
      payload: error.message,
    });
  }
};
