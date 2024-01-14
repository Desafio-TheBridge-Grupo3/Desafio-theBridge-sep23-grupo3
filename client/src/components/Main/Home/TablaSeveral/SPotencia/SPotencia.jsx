import React from "react";
import { useContext } from "react";
import TRPS from "../../TRPS/TRPS";
import { PropuestaPotenciaContext } from "../../../../../context/PropuestaPotenciaContext";

const SPotencia = () => {

  const { totalesPotencia } = useContext(PropuestaPotenciaContext);


  return (
    <>
      <section id="propPotencia">
        <h2>Potencia</h2>
        <table className="subtablas">
          <thead>
            <tr>
              <th className="th1">Potencia Contratada (kW)</th>
              <th className="th1">Potencia Facturada (kW)
              </th>
              <th className="th1">Precios potencia (€/kWh/día)
              </th>
              <th className="th1">Descuento</th>
              <th className="th1">Precio con Descuento</th>
              <th className="th1">Total Pago en Factura
              </th>
              <th className="th1">Total Pago Anual
              </th>
            </tr>
          </thead>
          <tbody>
            <TRPS periodo={"P1"} />
            <TRPS periodo={"P2"} />
            <TRPS periodo={"P3"} />
            <TRPS periodo={"P4"} />
            <TRPS periodo={"P5"} />
            <TRPS periodo={"P6"} />
          </tbody>
          <tfoot>
          <tr>
              <td className="hidden"></td>
              <td className="hidden"></td>
              <td className="hidden"></td>
              <td className="hidden"></td>
              <td className="hidden"></td>
              <td className="total"><input type="number" disabled value={Object.values(totalesPotencia.totalFacturaP).reduce((a,b) => a+b)}/></td>
              <td className="total"><input type="number" disabled value={Object.values(totalesPotencia.totalAnualP).reduce((a,b) => a+b)}/></td>
            </tr>
          </tfoot>
        </table>
      </section>
    </>
  );
};

export default SPotencia;
