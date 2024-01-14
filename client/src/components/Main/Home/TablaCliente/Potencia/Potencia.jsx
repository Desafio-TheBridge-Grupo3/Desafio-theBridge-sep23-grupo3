import React from "react";
import { useContext } from "react";
import TRPC from "../../TRPC/TRPC";
import { PotenciaContextC } from "../../../../../context/PotenciaContextC";


const Potencia = () => {

const {totalesPotencia} = useContext(PotenciaContextC);


  return (
    <>
      <section id="potencia">
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
            <TRPC periodo={"P1"} />
            <TRPC periodo={"P2"} />
            <TRPC periodo={"P3"} />
            <TRPC periodo={"P4"} />
            <TRPC periodo={"P5"} />
            <TRPC periodo={"P6"} />
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
  )
};

export default Potencia;
