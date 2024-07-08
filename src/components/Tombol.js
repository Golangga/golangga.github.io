import React, { useState } from "react";
import Mhs from "./Mhs";
import { useSelector } from "react-redux";

function Tombol() {
  const [lihat, setLihat] = useState(true);
  const mahasiswa = useSelector((state) => state.mahasiswa.mahasiswa);

  const toggleLihat = () => {
    setLihat(!lihat);
  };

  return (
    <div className="container mx-auto mt-8 text-center">
      <button
        onClick={toggleLihat}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        {lihat ? "Hide Mhs" : "Show Mhs"}
      </button>
      {lihat && mahasiswa.length > 0 && (
        <Mhs name={mahasiswa[0].name} nim={mahasiswa[0].nim} />
      )}
    </div>
  );
}

export default Tombol;
