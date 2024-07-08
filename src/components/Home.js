import React, { useContext } from "react";
import Mhs from "./Mhs";
import { MahasiswaContext } from "../context/MahasiswaContext.js";

const Home = () => {
  const { mahasiswa } = useContext(MahasiswaContext);
  return (
    <div className="container mx-auto mt-8 text-center">
      <h1 className="text-3xl font-bold mb-4">Daftar Mahasiswa</h1>
      <div className="grid grid-cols-3 gap-4">
        {mahasiswa.map((mhs) => (
          <Mhs key={mhs.id} name={mhs.name} nim={mhs.nim} />
        ))}
      </div>
    </div>
  );
};

export default Home;
