import React from "react";
import "../style/style.css";
import { Nav } from "react-bootstrap";
import { Card } from "react-bootstrap";

import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";
import { BsFillChatQuoteFill } from "react-icons/bs";
import { BsArrowLeft } from "react-icons/bs";
import Swal from "sweetalert2"
import {} from "react-bootstrap";

class recetaSalada extends React.Component {
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
            <Nav.Link eventKey="link-1" className="encabezado" href="">
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

            <Nav.Link eventKey="Busqueda" className="encabezado ">
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
          <img
            src="https://i.blogs.es/b7ec34/crepes/1366_2000.jpg"
            alt="publicacion de receta salada"
            height="250px"
            width="100%"
          />
          <p className="text-muted"> Publicado el 09/05/2020</p>
          <div className="public-flex">
            <Nav className="justify-content-end" activeKey="/home">
              <Nav.Item>
                <Nav.Link
                  eventKey="link-1"
                  href="Perfil3"
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
            <p className="nombre-receta">Receceta de crepes</p>
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
            <Card.Header>Ingredientes</Card.Header>
            <Card.Body>
              <Card.Text>
                2 huevos
                <br />
                150 g de harina
                <br />
                250 ml de leche
                <br />
                1 cucharada de azúcar
                <br />
                1 cucharada de aceite de oliva virgen extra
                <br />
                1 pizca de sal
                <br />
                Aceite de oliva virgen extra para engrasar la sartén Opcional: 1
                cucharada de brandy
              </Card.Text>
            </Card.Body>
          </Card>
          <br></br>
          <Card border="success" style={{ width: "18rem" }}>
            <Card.Header>Preparación</Card.Header>
            <Card.Body>
              <Card.Text>
                Para elaborar crepes hay que preparar una mezcla con harina,
                huevos y leche, casi líquida, a diferencia de las tortitas
                americanas, y se cocinan en una sartén antiadherente (hay
                algunas especialmente destinadas a preparar crepes). Si son
                dulces podemos aromatizar la masa, por ejemplo con vainilla y si
                son saladas, se puede añadir a la mezcla especias o hierbas.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="boton">
          <button onClick={this._Alert} className="button">Descargar</button>
          <button onClick={this._Alerta} className="report">Reportar</button>
        </div>
        <div className="input">
          <BsFillChatQuoteFill />

          <input placeholder="Deja un comentario aquí"></input>
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

export default recetaSalada;
