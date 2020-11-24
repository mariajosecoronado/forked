import React from "react";
import "../style/style.css";
import { BsArrowLeft } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";
import { Nav } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { CardDeck } from "react-bootstrap";

class ListaSalado extends React.Component {
  render() {
    return (
      <div>
        <>
        <div className="encabezado">
          <Nav.Link eventKey="link-1" className="encabezado" href="inicio">
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
        </>
        <br></br>
        <CardDeck>
          <Card>
            <Card.Title>RECETAS SALADAS</Card.Title>
            <Card.Link href="recetaRollos">
              <Card.Img
                variant="top"
                src="https://live.mrf.io/statics/i/ps/www.cocinacaserayfacil.net/wp-content/uploads/2020/02/Almuerzos-faciles-y-rapidos-de-hacer.jpg?width=1200&enable=upscale"
              />
            </Card.Link>
          </Card>
          <br></br>
          <Card>
            <Card.Title>RECETAS SALADAS</Card.Title>
            <Card.Link href="recetaRollos">
              <Card.Img
                variant="top"
                src="https://sevilla.abc.es/gurme/wp-content/uploads/sites/24/2014/04/receta-tortilla-calabacin.jpg"
              />
            </Card.Link>
          </Card>
          <br></br>
          <Card>
            <Card.Title>RECETAS SALADAS</Card.Title>
            <Card.Link href="recetaRollos">
              <Card.Img
                variant="top"
                src="https://animalgourmet.com/wp-content/uploads/2020/04/recetas-faciles-y-economicas-1-e1586898220791.jpg"
              />
            </Card.Link>
          </Card>
        </CardDeck>
        <br></br>
        <CardDeck>
          <Card>
            <Card.Title>RECETAS SALADAS</Card.Title>
            <Card.Link href="recetaRollos">
              <Card.Img
                variant="top"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRYcrzVqHcrlaTt8V-jjJ9bbsQ-SsR5cWv_eA&usqp=CAU"
              />
            </Card.Link>
          </Card>
          <br></br>
          <Card>
            <Card.Title>RECETAS SALADAS</Card.Title>
            <Card.Link href="recetaRollos">
              <Card.Img
                variant="top"
                src="https://www.clara.es/medio/2020/03/18/rollitos-de-tortilla_48273735_1280x720.jpg"
              />
            </Card.Link>
          </Card>
          <br></br>
          <Card>
            <Card.Title>RECETAS SALADAS</Card.Title>
            <Card.Link href="recetaRollos">
              <Card.Img
                variant="top"
                src="https://agendadeisa.com/wp-content/uploads/2019/06/Huevos-rellenos.jpg"
              />
            </Card.Link>
          </Card>
        </CardDeck>

        
        <footer className="header">
          CONTÁCTENOS
          <button className="button">
            {" "}
            <Nav.Link href="/mensaje" className="black">
              CLICK AQUÍ
            </Nav.Link>{" "}
          </button>
        </footer>
      </div>
    );
  }
}

export default ListaSalado;
