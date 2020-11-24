import React from "react";
import "../style/style.css";
import { Nav } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { BsList } from "react-icons/bs";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";
import { BsFillChatQuoteFill } from "react-icons/bs";
import Swal from "sweetalert2";


import {} from "react-bootstrap";

class recetaGalletas extends React.Component {
  _Alerta(){
    Swal.fire("Publicación reportada")
  }
  _Alert(){
    Swal.fire(
      '¡EXCELENTE!',
      'Receta descargada correctamente',
      'success'
    )
  }
  render() {
    return (
      <div>
        <Nav className="justify-content-center " activeKey="/home">
          <Nav.Item>
            <Nav.Link eventKey="link-1" className="encabezado" href="menu">
              <h1>
                <BsList />
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
            <Nav.Link eventKey="Busqueda" className="encabezado ">
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
          <img
            src="https://recetasfacil.online/wp-content/uploads/2018/12/Recetas-f%C3%A1ciles-de-pollo-para-ni%C3%B1os-e1544662062923.jpg"
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
                    src="https://www.lapi.com.mx/image.ashx?s=57067&im=115321&t=p"
                  />
                </Nav.Link>
              </Nav.Item>
            </Nav>
            <p className="nombre-receta">Receta de Roll</p>
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
                -Aceite de olivaa
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
        <div className="boton">
          <button onClick={this._Alert}
          className="button">Descargar</button>
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

export default recetaGalletas;
