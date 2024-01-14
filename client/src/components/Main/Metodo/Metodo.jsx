import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';



const Metodo = () => {
  const navigate = useNavigate()

  const cargarFile=()=>{
    navigate(`/carga`)
  }

  const rellenarTabla=()=>{
    navigate(`/home`)
  }

  return (
    <article id="metodo">
      <h2 id="pregunta">¿Cómo quieres cargar los datos?</h2>
      <button className="opciones" onClick={cargarFile}>Subir factura</button>
      <button className="opciones" onClick={rellenarTabla}>Rellenar datos manualmente</button>
    </article>
  );
};

export default Metodo;
