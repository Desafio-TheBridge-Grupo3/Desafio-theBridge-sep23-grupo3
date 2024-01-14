import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';



const CargaDatos = () => {

  const navigate = useNavigate()
  const rellenarTabla=()=>{
    navigate(`/home`)
  }

  const [selectedFile, setSelectedFile] = useState(null);


  return (
    <article id="metodo">
      <h2 id="pregunta">¿Cómo quieres cargar los datos?</h2>
      
      <button className="opciones" onClick={rellenarTabla}>
        <input type="file" value={selectedFile} onChange={(e) => setSelectedFile(e.target.files[0])}
        />Subir factura</button>
      <p id="mini">Adjunta aquí tu factura. Formatos aceptados: .pdf y .jpg</p>
      <p>Rellenar datos manualmente</p>
    </article>
  );
};

export default CargaDatos;
