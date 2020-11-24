import React from "react";

import "../style/style.css";



import { BsSearch } from "react-icons/bs";

import { Nav } from "react-bootstrap";

import { Card } from "react-bootstrap";

import { Button } from "react-bootstrap";

import { BsArrowLeft } from "react-icons/bs";

class perfil extends React.Component {
  render() {
    return (
      <div>
        <div className="encabezado">
        <Nav.Item>
              <Nav.Link
                eventKey="link-1"
                className="encabezado"
                href="./inicio"
              >
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


          <Nav.Link href="buscar" eventKey="Busqueda" className="encabezado ">
            <h1>
              {" "}
              <BsSearch />{" "}
            </h1>
          </Nav.Link>
        </div>

        <Nav className="justify-content-end" activeKey="/home">
          <Nav.Item></Nav.Item>
        </Nav>

        <div className="fotoperfil">
          <img
            className="fotoperfil"
            src="https://elhombreconfuso.files.wordpress.com/2010/11/alejandrosalgueirosexyhunk01.jpg"
            alt="logo"
            width="130"
            height="150"
          />
        </div>

        <div className="unotitulo">
          <h6> Alejandro Pérez </h6>
        </div>

        <div>
          <Button href="/editarperfil" className="boton-I">
            Editar mi perfil
          </Button>
          <Button href="/nuevareceta" className="boton-I">
            Crear una nueva publicación
          </Button>
        </div>

        <br></br>
        <div className="unotitulo">
          <h6> Recetas que te podrían interesar </h6>
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

              <Button href="/perfil2" className="boton-I">
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

              <Button href="/perfil2" className="boton-I">
                Ver más
              </Button>
            </Card.Body>
          </Card>
        </div>

        <br></br>
        <div className="unotitulo">
          <h6> Tus publicaciones </h6>
        </div>
        <hr></hr>

        <div className="public-flex">
          <Card style={{ width: "12rem" }}>
            <Card.Img
              width="50"
              height="100"
              src="https://www.eltiempo.com/files/article_content/uploads/2019/12/19/5dfbfefa82e19.jpeg"
            />

            <Card.Body>
              <Card.Title>Buñuelos de arequipe</Card.Title>

              <Button href="/nuevareceta" className="boton-I">
                Editar receta
              </Button>
            </Card.Body>
          </Card>

          <Card style={{ width: "12rem" }}>
            <Card.Img
              width="50"
              height="100"
              src="https://truffle-assets.imgix.net/1t1bxm43v4e3_5sdtiLAzkssogGAcc2MUAs_patacones-con-guacamole_landscapeThumbnail_es.jpeg"
            />

            <Card.Body>
              <Card.Title>Patacones con guacamole</Card.Title>

              <Button href="/nuevareceta" className="boton-I">
                Editar receta
              </Button>
            </Card.Body>
          </Card>
        </div>

        <br></br>

        <Button href="/editarpublicacion" className="boton-I">
          Editar mis publicaciones
        </Button>

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

export default perfil;
