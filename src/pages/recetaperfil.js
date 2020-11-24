import React from "react";
import "../style/style.css";
import { Nav } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { BsSearch } from "react-icons/bs";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";

import { AiFillClockCircle } from "react-icons/ai";
import ReactPlayer from "react-player";
import { BsArrowLeft } from "react-icons/bs";
import Swal from "sweetalert2";

class recetaDulce extends React.Component {
  _Alert() {
    Swal.fire({
      title: "Está publicación ha sido eliminada",
      showCancelButton: true,
      confirmButtonColor: "#14dd28",
      cancelButtonColor: "#14dd28",
      confirmButtonText: "Aceptar",
      cancelButtonText: "Cancelar"
    }).then((resultado) => {
      if (resultado.value) {
        window.location.href = "/Perfil";
      }
    });
  }
  _Alerta() {
    Swal.fire({
      title: "¿Quieres editar esta publicación?",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Aceptar",
      cancelButtonText: "Cancelar"
    }).then((resultado) => {
      if (resultado.value) {
        window.location.href = "/nuevareceta";
      }
    });
  }
  render() {
    return (
      <div>
        s
        <Nav className="justify-content-center " activeKey="/devolver">
          <Nav.Item>
            <Nav.Link href="perfil" eventKey="link-1" className="encabezado">
              <h1>
                <BsArrowLeft />
              </h1>
            </Nav.Link>
          </Nav.Item>
          <img
            className="icon-p"
            src="https://raw.githubusercontent.com/Saracas-022/holamundo/main/logotipo.jpeg"
            alt="logo"
            width="200"
            height="150"
          />
          <Nav.Item>
            <Nav.Link href="buscar" eventKey="Busqueda" className="encabezado ">
              <h1>
                {" "}
                <BsSearch />{" "}
              </h1>
            </Nav.Link>
          </Nav.Item>
        </Nav>
        <Nav className="justify-content-end" activeKey="/home">
          <Nav.Item></Nav.Item>
        </Nav>
        <div>
          <ReactPlayer
            url="https://www.youtube.com/watch?v=aBcr5Wa1yHo"
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
                  href="Perfil"
                  className="perfil-enlace  black"
                >
                  <img
                    className="foto-perfil"
                    alt="foto de perfil"
                    src="https://elhombreconfuso.files.wordpress.com/2010/11/alejandrosalgueirosexyhunk01.jpg"
                  />
                </Nav.Link>
              </Nav.Item>
            </Nav>
            <p className="nombre-receta">Palitos de queso</p>
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
              <Card.Text>
                <p>
                  - 500g de queso blando, tipo mozzarella - 3 huevos - Pan
                  rallado - Aceite
                </p>{" "}
              </Card.Text>
            </Card.Body>
          </Card>
          <br />
          <Card border="success" style={{ width: "18rem" }}>
            <Card.Header>
              Receta - Tiempo <AiFillClockCircle />
            </Card.Header>
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
          <Button onClick={this._Alert} className="boton-I">
            Eliminar
          </Button>
          <Button onClick={this._Alerta} className="boton-I">
            Editar
          </Button>
        </div>
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
