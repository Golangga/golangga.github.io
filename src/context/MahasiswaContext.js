import React, { createContext, useContext, useState } from "react";

const MahasiswaContext = createContext();

const MahasiswaProvider = ({ children }) => {
  const [mahasiswa, setMahasiswa] = useState([]);

  return (
    <MahasiswaContext.Provider value={{ mahasiswa, setMahasiswa }}>
      {children}
    </MahasiswaContext.Provider>
  );
};

const useMahasiswa = () => useContext(MahasiswaContext);

export { MahasiswaProvider, useMahasiswa, MahasiswaContext };
