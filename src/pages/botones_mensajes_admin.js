import React from "react";
import "../style/style.css";
import { BsArrowLeft } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";
import { Nav, Button } from "react-bootstrap";

class botones_mensajes_admin extends React.Component {
  render() {
    return (
      <div>
        <>
        <div className="encabezado">
          <Nav.Link eventKey="link-1" className="encabezado" 
          href="inicio__admin">
            <h1>
              <BsArrowLeft />
            </h1>
          </Nav.Link>

          <img
            className="icon-p"
            src="https://raw.githubusercontent.com/Saracas-022/holamundo/main/logotipo.jpeg"
            alt="logo"
            width="200"
            height="150"
          />

          <Nav.Link eventKey="Busqueda" className="encabezado " href="/buscar_admin">
            <h1>
              {" "}
              <BsSearch />{" "}
            </h1>
          </Nav.Link>
        </div>
        </>
        <br />
        <br />

        <Button href="./mensajes_admin" className="boton-mensajes_admin">
          VER MENSAJES DE LOS USUARIOS
        </Button>
        <br />

        <Button href="./mensaje_reporte_admin" className="boton-reportes_admin">
          VER REPORTE DE RECETAS
        </Button>
      </div>
    );
  }
}

export default botones_mensajes_admin;
