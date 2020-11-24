import React from "react";
import "../style/style.css";
import { Dropdown } from "react-bootstrap";
import { BsList } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";
import { Nav } from "react-bootstrap";
import { Carousel } from "react-bootstrap";
import { CardDeck } from "react-bootstrap";
import { Jumbotron } from "react-bootstrap";
import { Card } from "react-bootstrap";
import Swal from "sweetalert2";

class inicioanonimo extends React.Component {
  _Alert() {
    Swal.fire({
      title: "Debes iniciar sesión o registrarte",
      showCancelButton: true,
      confirmButtonColor: "#14dd28",
      cancelButtonColor: "#14dd28",
      confirmButtonText: "Iniciar sesión",
      cancelButtonText: "Cancelar"
    }).then((resultado) => {
      if (resultado.value) {
        window.location.href = "/iniciarS";
      }
    });
  }

  render() {
    return (
      <div>
        <nav class="navbar navbar-dark">
          <>
            <Nav className="justify-content-center " activeKey="/home">
              <Nav.Item>
                <Nav.Link eventKey="link-1" className="encabezado"></Nav.Link>
                <Dropdown>
                  <Dropdown.Toggle variant="success" id="dropdown-basic">
                    <BsList />
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="/inicioanonimo">
                      PRINCIPAL
                    </Dropdown.Item>
                    <Dropdown.Item href="iniciarS">PERFIL</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item onClick={this._Alert}>
                      RECETAS SALADAS
                    </Dropdown.Item>
                    <Dropdown.Item onClick={this._Alert}>
                      RECETAS DULCES
                    </Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item href="/iniciarS">
                      INICIAR SESIÓN
                    </Dropdown.Item>
                    <Dropdown.Item href="/registro">REGISTRARSE</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Nav.Item>
            </Nav>
            <img
              className="icon-p"
              src="https://raw.githubusercontent.com/Saracas-022/holamundo/main/logotipo.jpeg"
              alt="logo"
              width="200"
              height="150"
            />

            <Nav.Link href="" eventKey="Busqueda" className="encabezado ">
              <h1>
                {" "}
                <BsSearch />{" "}
              </h1>
            </Nav.Link>
          </>
        </nav>
        <Nav className="justify-content-end" activeKey="/home">
          <Nav.Item>
            <Nav.Link
              eventKey="link-1"
              onClick={this._Alert}
              className="perfil-enlace  black"
            >
              Mi perfil
              <img
                className="foto-perfil"
                alt="foto de perfil"
                src="https://benidorm.org/filmoffice/sites/default/files/styles/perfil_profesional__300x300_/public/default_images/perfil-anonimo.jpg?itok=MTSxbpSw"
              />
            </Nav.Link>
          </Nav.Item>
        </Nav>

        <div className="container2">
          <Carousel className="caru-tamaño">
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://thehappychef.ca/wp-content/uploads/2020/06/cropped-0E2C2A4D-156C-4563-AA96-AC4A0EF24762.jpeg"
                alt="primera"
                width="200"
                height="400"
              />
              <Carousel.Caption>
                <h3>Diviértete cocinando </h3>
                <p>
                  Puedes ver las recetas de otras personas y disfrutar de sus
                  ideas en casa.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://i.pinimg.com/originals/74/0b/2b/740b2b44c3cdb51ba3a3e9a3aec9d18f.png"
                alt="segunda"
                width="100"
                height="400"
              />

              <Carousel.Caption>
                <h3>Conozca aquí recetas dulces o saladas!</h3>
                <p>
                  Te enseñamos a preparar recetas dulces o saladas y te quedarán
                  deliciosas.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://i.ytimg.com/vi/Br2blXDhSUA/hqdefault.jpg?sqp=-oaymwEXCOADEI4CSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDg3uUtVUzwiHUmxct6uX1v6aTQFQ"
                alt="segunda"
                width="200"
                height="400"
              />

              <Carousel.Caption>
                <h3>Monta tus propias recetas!</h3>
                <p>
                  Puedesmostrar tus hablidades para la cocina a otras personas.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
          <hr></hr>
        </div>
        <div>
          <CardDeck>
            <Nav.Link onClick={this._Alert}  className="black">
              <Card>
                <Card.Img
                  variant="top"
                  src="https://truffle-assets.imgix.net/1t1bxm43v4e3_7ffgxAJg64K8UAwOimWYya_twix-caseros_landscapeThumbnail_es.jpeg"
                />
                <Card.Body>
                  <Card.Title>Recetas dulces</Card.Title>
                  <Card.Text>
                    Sabemos que a la mayoría de personas les encanta la comida
                    dulce y para este caso tenemos muchas recetas de este tipo
                    que sabemos que te encantarán,¡Anímate a prepararlas!.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Nav.Link>
            <Nav.Link onClick={this._Alert}  className="black">
              <Card>
                <Card.Img
                  variant="top"
                  src="https://cdn.queapetito.com/wp-content/uploads/2019/01/quiches-600x469.jpg"
                />
                <Card.Body>
                  <Card.Title>Recetas saladas</Card.Title>
                  <Card.Text>
                    Podrás sorprender a tu familia con una variedad de comidas
                    en donde ellos serán los afortunados de probar las mejores
                    recetas vistas en Cook to Work.{" "}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Nav.Link>
          </CardDeck>
        </div>
        <br></br>
        <br></br>
        <Jumbotron>
          <h1>QUIENES SOMOS?</h1>
          <h4> COOK TO WORK</h4>
          <p>
            Es un servicio en el cual el usuario podrá encontrar soluciones
            rápidas y fáciles para cocinar, utilizando ingredientes ya sean
            pocos o básicos, esta es una página web que se llama Cook to work,
            este producto le permitirá al usuario encontrar ideas para realizar
            recetas con pocos ingredientes al alcance de su presupuesto, notamos
            una diferencia en común con otras páginas web la cual es que estas
            ya tienen unos ingredientes incorporados, mientras que Cook to work
            permite que los usuarios busquen recetas con los ingredientes que
            tienen a la mano, está dirigido a las personas que quieren ser
            creativas a la hora de cocinar.
          </p>
        </Jumbotron>

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

export default inicioanonimo;
