import React from "react";
import "../style/style.css";
import { Nav } from "react-bootstrap";
import { Card } from "react-bootstrap";

import { BsSearch } from "react-icons/bs";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";
import { BsFillChatDotsFill } from "react-icons/bs";
import ReactPlayer from "react-player";
import { BsArrowLeft } from "react-icons/bs";
import Swal from "sweetalert2";

class recetaDulce extends React.Component {
  _Alerta() {
    Swal.fire({
      icon: 'success',
      text: 'Publicación reportada!',
      
    })
  }
  _Alert() {
    Swal.fire({
      icon: 'warning',
      title: 'Lo sentimos',
      text: 'Esta opción no esta disponible ahora',
      
    })
  }
  render() {
    return (
      <div>
        <div className="encabezado">
          <Nav.Link eventKey="link-1" className="encabezado" href="listaDulce">
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

          <Nav.Link eventKey="Busqueda" className="encabezado " href="/buscar">
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
                  href="perfil2"
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
        </div>
        <div className="public-flex">
          <Card border="success" style={{ width: "18rem" }}>
            <Card.Header>Ingredientes</Card.Header>
            <Card.Body>
              <Card.Text>
                Huevos: 1 Azúcar; 1/2 taza (100 gr) Aceite: 1/4 taza (65 ml)
                Sal: pizca Cacao: 1/3 taza ( 30 gr) Harina 0000: 1 taza y cuarto
                aprox (150 gr) Polvo de hornear: 1 cdita
              </Card.Text>
            </Card.Body>
          </Card>

          <Card border="success" style={{ width: "18rem" }}>
            <Card.Header>Receta - Tiempo</Card.Header>
            <Card.Body>
              <Card.Text>
                Ponemos la mantequilla en un bol y la derretimos unos segundos
                en el microondas. En menos de un minuto, ya vemos que comienza a
                derretirse. Mezclamos la mantequilla con el azúcar en un bol y
                comenzamos a batir hasta conseguir una crema uniforme. Aregamos
                el huevo y la esencia de vainilla a la mezcla y seguimos
                batiendo hasta que se integren. En otro bol mezclamos la harina
                con la levadura y la añadimos a la mezcla de huevo, mantequilla
                y azúcar. Con un cuchillo troceamos el chocolate en dados
                irregulares y los incorporamos a la mezcla anterior. Con la
                ayuda de un tenedor comenzamos a integrar los ingredientes secos
                con los líquidos. Cuando tengamos una especie de arena
                comenzamos a compactarlos con las manos hasta formar una bola.
                Cogemos pequeñas porciones, de unos 30 g. y formamos una bola
                con las manos. Achatamos la bolita y la colocamos sobre papel de
                horno o parafinado en una fuente de horno. Vamos haciendo lo
                mismo con el resto de la masa.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>

        <div className="boton">
          <button onClick={this._Alert} className="button">
            Descargar
          </button>
          <button onClick={this._Alerta} className="report">
            Reportar
          </button>
        </div>

        <div>
          <BsFillChatDotsFill />
          <input placeholder="Deja un comentario" />
        </div>
        <br />
        <br />
        <footer className="header">
          CONTÁCTENOS
          <button className="button">
            {" "}
            <Nav.Link href="/mensaje" className="black">
              CLICK AQUÍ
            </Nav.Link>{" "}
          </button>
          <Nav.Link href="/mensaje" className="black"></Nav.Link>{" "}
        </footer>
      </div>
    );
  }
}

export default recetaDulce;
