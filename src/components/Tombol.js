import React, { useState } from "react";
import Mhs from "./Mhs";
//import { useSelector } from "react-redux";

function Tombol() {
  const [lihat, setLihat] = useState(true);
  //const mahasiswa = useSelector((state) => state.mahasiswa.mahasiswa);

  const toggleLihat = () => {
    setLihat(!lihat);
  };

  return (
    <div className="text-center mt-10">
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px4 rounded"
        onClick={toggleLihat}
      >
        Show or Hide
      </button>
      <div className=" pt-4">
      {lihat && <Mhs name="Muhammad Gilang Ramadhan" nim="A11.2021.13906" />}

      </div>
    </div>
  );
}

export default Tombol;
