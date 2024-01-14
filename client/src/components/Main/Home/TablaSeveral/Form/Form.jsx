import React from "react";


const Form = () => {

  //lógica propuesta: En excel cuando el asesor cambia un valor del form ese el precio cambia y podemos hacer lo mismo y nos ahorramos una parte de código un poco rollo. Como por defecto sí o sí habrá valores en el formulario, se hace la primera llamada al back con esos valores y cada vez que se modifica alguno de los desplegables se hace una nueva llamada. No sé si eso podría saturar el sistema, pero ofreceríamos al cliente un producto mucho más parecido a lo que ya están usando...

  return (

    <form className="options" >

      <article>
        <div className="label">
          <label htmlFor="tipo">Tipo de sistema</label>
        </div>
        <select name="tipo" id="tipo" className="select">
          <option value="peninsula">Península</option>
          <option value="baleares">Baleares</option>
          <option value="canarias">Canarias</option>

        </select>
      </article>

      <article>
        <div className="label">
          <label htmlFor="tarifa">Tarifa</label>
        </div>
        <select name="tarifa" id="tarifa" className="select">
          <option value="20">2.0TD</option>
          <option value="30">3.0TD</option>
          <option value="61">6.1TD</option>
          <option value="62">6.2TD</option>
        </select>
      </article>

      <article>
        <div className="label">
          <label htmlFor="cia">CIA</label>
        </div>
        <select name="cia" id="cia" className="select">
          <option value="acciona">ACCIONA</option>
          <option value="adi">ADI</option>
          <option value="aeq">AEQ</option>
          <option value="candela">CANDELA</option>
          <option value="eleia">ELEIA</option>
          <option value="endesa">ENDESA</option>
          <option value="evolve">EVOLVE</option>
          <option value="factor">FACTOR</option>
          <option value="gana">GANA</option>
          <option value="iberdrola">IBERDROLA</option>
          <option value="ignis">IGNIS</option>
          <option value="max">MAX</option>
          <option value="naturgy">NATURGY</option>
          <option value="plenitude">PLENITUDE</option>
          <option value="total">TOTAL</option>
        </select>
      </article>


      <article>
        <div className="label">
          <label htmlFor="metodo">Método</label>
        </div>
        <select name="metodo" id="metodo" className="select">
          <option value="indexado">INDEXADO</option>
          <option value="fijo">FIJO</option>
        </select>
      </article>

      <article>
        <div className="label">
          <label htmlFor="productos">Producto CIA (POT)</label>
        </div>
        <select name="productos" id="productos" className="select">
          <option value="armonia">ARMONÍA</option>
          <option value="equilibrio">EQUILIBRIO</option>
          <option value="simetria">SIMETRÍA</option>
        </select>
      </article>

      <article>
        <div className="label">
          <label htmlFor="mes">Mes de Facturación (Indexado)</label>
        </div>
        <select name="mes" id="mes" className="select">
          <option value="en">Enero</option>
          <option value="feb">Febrero</option>
          <option value="mar">Marzo</option>
          <option value="abr">Abril</option>
          <option value="may">Mayo</option>
          <option value="jun">Junio</option>
          <option value="jul">Julio</option>
          <option value="ago">Agosto</option>
          <option value="sep">Septiembre</option>
          <option value="oct">Octubre</option>
          <option value="nov">Noviembre</option>
          <option value="dic">Diciembre</option>
        </select>
      </article>

      <article>
        <div className="label">
          <label htmlFor="fee">FEE (Energía)</label>
        </div>
        <select name="fee" id="fee" className="select">
        <option value="1.5">1.5 %</option>
        <option value="3">3 %</option>
        <option value="4">4 %</option>
        <option value="5">5 %</option>
        <option value="6">6 %</option>
        <option value="8">8 %</option>
        <option value="10">10 %</option>
        <option value="15">15 %</option>
        <option value="20">20 %</option>
        <option value="25">25 %</option>
        <option value="30">30 %</option>
        </select>
      </article>

      
    </form>
  )
};

export default Form;