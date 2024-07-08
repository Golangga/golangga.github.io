import React from "react";
const Mhs = ({ name, nim }) => {
  return (
    <div className="text-center mt-10">
      <h1 className="text-2xl font-bold">Nama : {name}</h1>
      <p className="text-2xl font-bold mt-4">NIM : {nim}</p>
    </div>
  );
};

export default Mhs;
