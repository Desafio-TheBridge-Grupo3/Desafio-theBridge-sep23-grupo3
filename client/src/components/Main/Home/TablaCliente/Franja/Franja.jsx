import React from "react";


const Franja = () => {
  return (
    <>
      <section className="spare">
        <h2 className="hidden">Spare</h2>
        <table className="subtablas">
          <thead>
            <tr>
              <th className="th1">Franja</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="white">P1</td>
            </tr>
            <tr>
              <td className="white">P2</td>
            </tr>
            <tr>
              <td className="white">P3</td>
            </tr>
            <tr>
              <td className="white">P4</td>
            </tr>
            <tr>
              <td className="white">P5</td>
            </tr>
            <tr>
              <td className="white">P6</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td className="white">TOTAL</td>
            </tr>
          </tfoot>
        </table>
      </section>
    </>
  )
};

export default Franja;
