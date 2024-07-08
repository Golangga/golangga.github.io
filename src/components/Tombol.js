import React, { useState } from "react";
import Mhs from "./Mhs";

function Tombol() {
  const [lihat, setLihat] = useState(false);

  const toggleLihat = () => {
    setLihat(!lihat);
  };

  return (
    <div className="text-center mt-10">
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={toggleLihat}
      >
        Show or Hide
      </button>
      {lihat && <Mhs name="Muhammad Gilang Ramadhan" nim="A11.2021.13906" />}
    </div>
  );
}

export default Tombol;
