import React from "react";
import { usePDF } from 'react-to-pdf';

const Oferta = () => {
  const { toPDF, targetRef } = usePDF({filename: 'page.pdf'});

  return (
    <div>
       <button onClick={() => toPDF()}>Download PDF</button>
       <div ref={targetRef}>
       Esto vendría a ser el componente en el que se renderizará la tabla de la oferta para el cliente. Es también lo que se va a convertir en pdf. Si le das al botón te convierte este div en un doc pdf.
       </div>
       
    </div>
 )
  
};

export default Oferta;
