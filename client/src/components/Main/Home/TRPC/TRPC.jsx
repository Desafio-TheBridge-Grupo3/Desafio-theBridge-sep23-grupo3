import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { PotenciaContextC } from "../../../../context/PotenciaContextC";


const TRPC = ({periodo}) => {

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

const { totalesPotencia, updateTotalesPotencia } = useContext(PotenciaContextC);


//multiplicaciones en cada fila
useEffect(() => {
  setPrecioConDescuento( precioPotencia - (precioPotencia * (descuento / 100)))
}, [precioPotencia, descuento])

useEffect(() => {
  setTotalPagoAnual(potenciaContratada * precioPotencia * 365 )
}, [potenciaContratada, precioPotencia])

useEffect(() => {
setTotalPagoFactura(potenciaFacturada*precioConDescuento * 30)
}, [potenciaFacturada, precioConDescuento])
// cambiar por dias facturados


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
        <td><input type="number"  placeholder="--" value={potenciaContratada} onChange={(e) => update(e, setPotenciaContratada)} /></td>
        <td><input type="number" placeholder="--" value={potenciaFacturada} onChange={(e) => update(e, setPotenciaFacturada)} /></td>
        <td><input type="number" placeholder="--" value={precioPotencia} onChange={(e) => update(e, setPrecioPotencia)} /></td>
        <td><input type="number" placeholder="--" value={descuento} onChange={(e) => update(e, setDescuento)} /></td>
        <td className="total"><input type="number" disabled value={precioConDescuento}/></td>
      <td className="total"><input type="number" disabled value={totalPagoFactura}/></td>
      <td className="total"><input type="number" disabled value={totalPagoAnual}/></td>
      </tr>
  );
};

export default TRPC;
