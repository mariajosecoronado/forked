import React from "react";
import "../style/style.css";
import Foto1 from "../images/fondo-del-prototipo.jpg";
import Apertura from "../pages/apertura";

class bienvenida extends React.Component {
  render() {
    return (
      <div id="pantalla_1" style={{ backgroundImage: `url(${Foto1})` }}>
        <Apertura />
      </div>
    );
  }
} 
export default bienvenida;
