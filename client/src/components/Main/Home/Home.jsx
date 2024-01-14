import React from "react";
import { Link } from 'react-router-dom';
import TablaCliente from "./TablaCliente";
import TablaSeveral from "./TablaSeveral";

const Home = () => {
  return (
  <>
  <TablaCliente />
  <TablaSeveral />
  </>
  );
};

export default Home;
