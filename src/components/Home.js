import React, { useEffect } from "react";
import Mhs from "./Mhs";
import { useDispatch, useSelector } from "react-redux";
import { fetchMahasiswa } from "../redux/actions/MahasiswaActions";
const Home = () => {
  const dispatch = useDispatch();
  const mahasiswaState = useSelector((state) => state.mahasiswa);
  const { mahasiswa, loading, error } = mahasiswaState;
  useEffect(() => {
    dispatch(fetchMahasiswa());
  }, [dispatch]);
  return (
    <div className="container mx-auto mt-8 text-center">
      <h1 className="text-3xl font-bold mb-4">Daftar Mahasiswa</h1>
      {loading && <p>Loading....</p>}
      {error && <p>Error: {error}</p>}
      <div className="grid grid-cols-3 gap-4">
        {mahasiswa.map((mhs) => (
          <Mhs key={mhs.id} name={mhs.name} nim={mhs.nim} />
        ))}
      </div>
    </div>
  );
};

export default Home;
