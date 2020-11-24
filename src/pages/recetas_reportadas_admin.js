import React from "react";
import "../style/style.css";
import { Nav } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { BsArrowLeft } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";

import ReactPlayer from "react-player";

import {} from "react-bootstrap";

class Receta_reportadas_admin extends React.Component {
  render() {
    return (
      <div>
        <div className="encabezado">
          <Nav.Link eventKey="link-1" className="encabezado" href="listaDulce_admin">
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
            url="https://www.youtube.com/watch?v=JuewYWvosn4"
            className="react-player"
            playing
            width="100%"
            height="270px"
          />
          <p className="text-muted"> Publicado el 11/09/2020</p>
          <div className="public-flex">
            <Nav className="justify-content-end" activeKey="/home">
              <Nav.Item>
                <Nav.Link
                  eventKey="link-1"
                  href="reporte_admin"
                  className="perfil-enlace  black"
                >
                  <img
                    className="foto-perfil-2"
                    alt="foto de perfil 2"
                    src="https://www.lapi.com.mx/image.ashx?s=57067&im=115321&t=p"
                  />
                </Nav.Link>
              </Nav.Item>
            </Nav>
            <p className="nombre-receta">Galletas de chocolate</p>
          </div>
        </div>
        <div className="punt">
          <p>Puntuación</p>
          <p>
            <BsStarFill />
            <BsStarFill />
            <BsStarHalf />
            <BsStar />
            <BsStar />
          </p>
          <div></div>
        </div>
        <div className="public-flex">
          <Card border="success" style={{ width: "18rem" }}>
            <Card.Header>Ingredientes</Card.Header>
            <Card.Body>
              <ul>
                <li>Una taza de azucar</li>
                <li>Cacao</li>
                <li>1 huevo</li>
                <li>Polvo para hornear</li>
              </ul>
            </Card.Body>
          </Card>
          <br />
          <Card border="success" style={{ width: "18rem" }}>
            <Card.Header>Receta</Card.Header>
            <Card.Body>
              <Card.Title>PREPARACIÓN</Card.Title>
              <Card.Text>
              Ponemos la mantequilla en un bol y la derretimos unos segundos en el microondas. En menos de un minuto, ya vemos que comienza a derretirse.
Mezclamos la mantequilla con el azúcar en un bol y comenzamos a batir hasta conseguir una crema uniforme.
Aregamos el huevo y la esencia de vainilla a la mezcla y seguimos batiendo hasta que se integren.
En otro bol mezclamos la harina con la levadura y la añadimos a la mezcla de huevo, mantequilla y azúcar.
Con un cuchillo troceamos el chocolate en dados irregulares y los incorporamos a la mezcla anterior.
Con la ayuda de un tenedor comenzamos a integrar los ingredientes secos con los líquidos. Cuando tengamos una especie de arena comenzamos a compactarlos con las manos hasta formar una bola.
Cogemos pequeñas porciones, de unos 30 g. y formamos una bola con las manos.
Achatamos la bolita y la colocamos sobre papel de horno o parafinado en una fuente de horno.
 Vamos haciendo lo mismo con el resto de la masa.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <Nav.Link  href="reporte_admin">
        <div className="boton" href="reporte_admin">
         <button className="report">Reportada</button>

  </div>
  </Nav.Link>
  </div>
    );
  }
}

export default Receta_reportadas_admin;