import { useContext } from "react";
import React, { useEffect, useState } from "react";
import { PropuestaPotenciaContext } from "../../../../context/PropuestaPotenciaContext";

const TRPS = ({ periodo }) => {

  const [potenciaContratada, setPotenciaContratada] = useState([])
  const [potenciaFacturada, setPotenciaFacturada] = useState([])
  const [precioPotencia, setPrecioPotencia] = useState([])
  const [descuento, setDescuento] = useState([])
  const [precioConDescuento, setPrecioConDescuento] = useState([])
  const [totalPagoFactura, setTotalPagoFactura] = useState([])
  const [totalPagoAnual, setTotalPagoAnual] = useState([])


  const update = (event, setter) => {
    setter(Number(event.target.value))
  }

  const { totalesPotencia, updateTotalesPotencia } = useContext(PropuestaPotenciaContext);


  //multiplicaciones en cada fila
  useEffect(() => {
    setTotalPagoAnual(potenciaContratada * precioPotencia * 365)
  }, [potenciaContratada, precioPotencia])

  useEffect(() => {
    setTotalPagoFactura(potenciaFacturada * precioConDescuento * 30)
  }, [potenciaFacturada, precioConDescuento])
  // cambiar el "30" por dias facturados más adelante


  //sumas en columna
  useEffect(() => {
    const sumar = {
      ...totalesPotencia.totalFacturaP
    }
    sumar[periodo] = totalPagoFactura

    updateTotalesPotencia({ ...totalesPotencia, totalFacturaP: sumar })

  }, [totalPagoFactura])


  useEffect(() => {
    const sumar = {
      ...totalesPotencia.totalAnualP
    }
    sumar[periodo] = totalPagoAnual

    updateTotalesPotencia({ ...totalesPotencia, totalAnualP: sumar })
  }, [totalPagoAnual])

  return (
    <tr>
      <td><input type="number" placeholder="--" value={potenciaContratada} onChange={(e) => update(e, setPotenciaContratada)} /></td>
      <td><input type="number" placeholder="--" value={potenciaFacturada} onChange={(e) => update(e, setPotenciaFacturada)} /></td>
      <td className="disabled"><input type="number" value={precioPotencia} disabled/></td>
      <td className="disabled"><input type="number" placeholder="--" value={descuento} disabled/></td>
      <td className="total"><input type="number" disabled value={precioConDescuento} /></td>
      <td className="total"><input type="number" disabled value={totalPagoFactura} /></td>
      <td className="total"><input type="number" disabled value={totalPagoAnual} /></td>
    </tr>
  );
};

export default TRPS;
