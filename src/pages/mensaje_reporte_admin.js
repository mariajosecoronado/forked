import React from "react";
import "../style/style.css";
import { Nav } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { BsArrowLeft } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";
import { BsExclamationCircleFill } from "react-icons/bs";

class Mensaje_reporte_admin extends React.Component {
  render() {
    return (
      <div>
        {" "}
        <>
        <div className="encabezado">
          <Nav.Link eventKey="link-1" className="encabezado" 
          href="listaDulce">
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
          <Nav className="justify-content-end" activeKey="/home">
            <Nav.Item></Nav.Item>
          </Nav>

          <Nav className="justify-content-end" href="/Perfil">
            <Nav.Item>
              <Nav.Link
                eventKey="link-1"
                className="perfil-enlace"
                href="Perfil"
              ></Nav.Link>
            </Nav.Item>
            <div></div>
            <Nav.Item></Nav.Item>
          </Nav>
        </>
        <div>
          <div>
            <Card>
              <Nav.Link
                className="card_mensaje1_admin"
                href="recetas_reportadasR_admin"
              >
                <Card>
                  <h1>
                    <BsExclamationCircleFill />
                  </h1>

                  <h1>Receta reportada</h1>
                </Card>
              </Nav.Link>
              <Nav.Link
                href="recetas_reportadas_admin"
                className="card_mensaje1_admin"
              >
                <Card>
                  <h1>
                    <BsExclamationCircleFill />
                    <p>Receta reportada</p>
                  </h1>
                </Card>
              </Nav.Link>
            </Card>
          </div>
        </div>
      </div>
    );
  }
}
export default Mensaje_reporte_admin;
