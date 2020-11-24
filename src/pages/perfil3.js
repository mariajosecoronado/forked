import React from "react";
import "../style/style.css";
import { BsArrowLeft } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";
import { Nav } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";

class perfil3 extends React.Component {
  render() {
    return (
      <div>
        <Nav className="justify-content-center " activeKey="/home">
          <Nav.Item>
            <Nav.Link eventKey="link-1" className="encabezado" href="perfil2">
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
        <br />
        <div className="fotoperfil">
          <img
            className="fotoperfil"
            src="https://www.lapi.com.mx/image.ashx?s=57067&im=115321&t=p"
            alt="logo"
            width="150"
            height="170"
          />
        </div>
        <div className="unotitulo">
          <h6> Carolina Agudelo </h6>
        </div>

        <hr></hr>
        <div className="unotitulo">
          <h6> Recetas que te podrían interesar </h6>
        </div>
        <hr></hr>

        <div className="public-flex">
          <Card style={{ width: "12rem" }}>
            <Card.Img
              width="50"
              height="100"
              src="https://www.recetasjudias.com/wp-content/uploads/2018/05/Papas-Gratinadas.jpg"
            />

            <Card.Body>
              <Card.Title>Papas gratinadas</Card.Title>

              <Button href="/recetaRollos" className="boton-I">
                Ver más
              </Button>
            </Card.Body>
          </Card>

          <Card style={{ width: "12rem" }}>
            <Card.Img
              width="50"
              height="100"
              src="https://i.blogs.es/fdcf18/alfajroes-de-maizena/450_1000.jpg"
            />

            <Card.Body>
              <Card.Title>Alfajores de Maizena</Card.Title>

              <Button href="/recetaDulce" className="boton-I">
                Ver más
              </Button>
            </Card.Body>
          </Card>
        </div>

        <br></br>
        <div className="unotitulo">
          <h6> Publicaciones de Valeria </h6>
        </div>
        <hr></hr>

        <div className="public-flex">
          <Card style={{ width: "12rem" }}>
            <Card.Img
              width="50"
              height="100"
              src="https://recetasfacil.online/wp-content/uploads/2018/12/Recetas-f%C3%A1ciles-de-pollo-para-ni%C3%B1os-e1544662062923.jpg"
            />

            <Card.Body>
              <Card.Title>Rollos de Pollo</Card.Title>

              <Button href="/recetaRollos" className="boton-I">
                Ver más
              </Button>
            </Card.Body>
          </Card>

          <Card style={{ width: "12rem" }}>
            <Card.Img
              width="50"
              height="100"
              src="https://t1.rg.ltmcdn.com/es/images/6/8/2/galletas_de_mantequilla_con_chocolate_55286_600.jpg"
            />

            <Card.Body>
              <Card.Title>Galletas de Chocolate</Card.Title>

              <Button href="/recetaGalletas" className="boton-I">
                Ver receta
              </Button>
            </Card.Body>
          </Card>
        </div>

        <br></br>

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
export default perfil3;
