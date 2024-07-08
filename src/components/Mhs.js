import React from "react";
const Mhs = ({ name, nim }) => {
  return (
    <div className="p-4 border rounded shadow">
      <h1 className="text-2xl font-bold">{name}</h1>
      <p className="text-gray-500">{nim}</p>
    </div>
  );
};

export default Mhs;
