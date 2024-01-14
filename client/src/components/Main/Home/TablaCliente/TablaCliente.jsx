import React from "react";
import { useState } from "react";
import Franja from "./Franja"
import Energia from "./Energia"
import Potencia from "./Potencia"
import Total from './Total'
import COtros from './COtros'
import { EnergiaContext } from "../../../../context/EnergiaContext";
import { PotenciaContextC } from "../../../../context/PotenciaContextC"

const TablaCliente = () => {


  const [totalesEnergia, setTotalesEnergia] = useState(
    {
    consumoAnual:{
      P1:0,
      P2:0,
      P3:0,
      P4:0,
      P5:0,
      P6:0
    },
    consumoActual:{
      P1:0,
      P2:0,
      P3:0,
      P4:0,
      P5:0,
      P6:0
    },
    totalFactura:{
      P1:0,
      P2:0,
      P3:0,
      P4:0,
      P5:0,
      P6:0
    },
    totalAnual:{
      P1:0,
      P2:0,
      P3:0,
      P4:0,
      P5:0,
      P6:0
    }
});


const updateTotalesEnergia = (newTotalesEnergia) => {
  setTotalesEnergia(newTotalesEnergia);
};


const [totalesPotencia, setTotalesPotencia] = useState(
  {
  
  totalFacturaP:{
    P1:0,
    P2:0,
    P3:0,
    P4:0,
    P5:0,
    P6:0
  },
  totalAnualP:{
    P1:0,
    P2:0,
    P3:0,
    P4:0,
    P5:0,
    P6:0
  }
});

const updateTotalesPotencia = (newTotalesPotencia) => {
  setTotalesPotencia(newTotalesPotencia);
};


const energiaData = { totalesEnergia, updateTotalesEnergia }
const potenciaData = { totalesPotencia, updateTotalesPotencia }

  return (
    <>
      <section className="tablaGrande">
        <article className="compañia" >
          <h1 className="tituloTabla">Compañía actual</h1>
          <select name="compañia" id="compañia">
            <option value="endesa">Endesa</option>
            <option value="iberdrola">Iberdrola</option>
            <option value="naturgy">Naturgy</option>
            <option value="acciona">Acciona</option>
          </select>
        </article>

        <article className="tabla">
          <Franja />
          <EnergiaContext.Provider value={energiaData}>
            <Energia />
          </EnergiaContext.Provider>
          <PotenciaContextC.Provider value={potenciaData}>
          <Potencia />
          </PotenciaContextC.Provider>
        </article>
        <article className="subseccion">
          <COtros />
          <Total />
        </article>

      </section>
    </>
  )
};

export default TablaCliente;
