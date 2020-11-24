import React from "react";
import "../style/style.css";
import { Nav } from "react-bootstrap";
import { Card } from "react-bootstrap";
import ReactPlayer from "react-player";
import { BsArrowLeft } from "react-icons/bs";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";

import {} from "react-bootstrap";

class recetaRollosAdmin extends React.Component {
  render() {
    return (
      <div>
         <div className="encabezado">
          <Nav.Link eventKey="link-1" className="encabezado" href="ListaSalado_admin">
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
        <div>
        <ReactPlayer
            url="https://www.youtube.com/watch?reload=9&v=fVRzpIMQliw"
            className="react-player"
            playing
            width="100%"
            height="270px"
          />
          <p className="text-muted"> Publicado el 09/05/2020</p>
          <div className="public-flex">
            <Nav className="justify-content-end" activeKey="/home">
              <Nav.Item>
                <Nav.Link
                  eventKey="link-1"
                  href="reporte_admin"
                  className="perfil-enlace  black"
                >
                  <img
                    className="foto-perfil"
                    alt="foto de perfil"
                    src="https://www.lapi.com.mx/image.ashx?s=57067&im=115321&t=p"
                  />
                </Nav.Link>
              </Nav.Item>
            </Nav>
            <p className="nombre-receta">Receta de Rollos</p>
          </div>
          <div className="punt">
            <p>Puntuación</p>
            <p>
              <BsStarFill />
              <BsStarFill />
              <BsStarFill />
              <BsStarHalf />
              <BsStar />
            </p>
          </div>
        </div>
        <div className="public-flex">
          <Card border="success" style={{ width: "18rem" }}>
            <Card.Header>Ingredientes para 4 personas</Card.Header>
            <Card.Body>
              <Card.Text>
                -4 filetes de pechuga de pollo.<br></br>
                -Queso cremoso loncheado o troceado fino a tu gusto, gouda,
                edam…<br></br>
                -Lonchas de jamón ibérico curado para cubrir los filetes
                <br></br>
                -1 cebolla<br></br>
                -Una zanahoria<br></br>
                -1 vasito de oloroso seco (150 ml)<br></br>
                -Una hoja de laurel<br></br>
                -Sal y pimienta<br></br>
                -Aceite de oliva
              </Card.Text>
            </Card.Body>
          </Card>
          <br></br>
          <Card border="success" style={{ width: "18rem" }}>
            <Card.Header>Preparación 2h</Card.Header>
            <Card.Body>
              <Card.Text>
                Extendemos los filetes sobre una superficie de trabajo, ponemos
                pimienta (la sal la aporta el jamón) y colocamos el jamón sobre
                ellos cubriendo bien. Ponemos el queso con cuidado de que no
                sobresalga por los bordes. Enrollamos los filetes en espiral y
                formamos un rollo, cerrándolo bien con un par de palillos de
                dientes. Doramos por todas partes los filetes de pollo con el
                laurel.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <Nav.Link href="reporte_admin">
          <div className="boton" href="reporte_admin">
            <button className="report">Reportada</button>
          </div>
        </Nav.Link>
      </div>
    );
  }
}

export default recetaRollosAdmin;
