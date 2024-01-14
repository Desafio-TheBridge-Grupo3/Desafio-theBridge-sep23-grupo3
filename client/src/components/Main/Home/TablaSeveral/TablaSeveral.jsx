import React from "react";
import { useState } from "react";
import Franja from '../TablaCliente/Franja';
import SEnergia from './SEnergia';
import SPotencia from './SPotencia';
import Form from './Form';
import Otros from "./Otros";
import STotal from './STotal';
import { PropuestaEnergiaContext } from '../../../../context/PropuestaEnergiaContext';
import { PropuestaPotenciaContext } from '../../../../context/PropuestaPotenciaContext';


const TablaSeveral = () => {

  const [totalesEnergia, setTotalesEnergia] = useState(
    {
      consumoAnual: {
        P1: 0,
        P2: 0,
        P3: 0,
        P4: 0,
        P5: 0,
        P6: 0
      },
      consumoActual: {
        P1: 0,
        P2: 0,
        P3: 0,
        P4: 0,
        P5: 0,
        P6: 0
      },
      totalFactura: {
        P1: 0,
        P2: 0,
        P3: 0,
        P4: 0,
        P5: 0,
        P6: 0
      },
      totalAnual: {
        P1: 0,
        P2: 0,
        P3: 0,
        P4: 0,
        P5: 0,
        P6: 0
      }
    });


  const updateTotalesEnergia = (newTotalesEnergia) => {
    setTotalesEnergia(newTotalesEnergia);
  };


  const [totalesPotencia, setTotalesPotencia] = useState(
    {

      totalFacturaP: {
        P1: 0,
        P2: 0,
        P3: 0,
        P4: 0,
        P5: 0,
        P6: 0
      },
      totalAnualP: {
        P1: 0,
        P2: 0,
        P3: 0,
        P4: 0,
        P5: 0,
        P6: 0
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
        <h1 className="tituloTabla">Propuesta Several</h1>
        <Form />
        <article className="tabla">
          <Franja />
          <PropuestaEnergiaContext.Provider value={energiaData}>
            <SEnergia />
          </PropuestaEnergiaContext.Provider>
          <PropuestaPotenciaContext.Provider value={potenciaData}>
            <SPotencia />
          </PropuestaPotenciaContext.Provider>
        </article>
        <article className="subseccion">
          <Otros />
          <STotal />
        </article>
      </section>
    </>
  )
};

export default TablaSeveral;
