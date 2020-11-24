import React from "react";
import "../style/style.css";
import { Card,Button } from "react-bootstrap";
import { BsSearch } from "react-icons/bs";
import { Nav } from "react-bootstrap";
import { BsArrowLeft } from "react-icons/bs";
import Swal from "sweetalert2";

class editarpublicacion extends React.Component {
  _Alert() {
    Swal.fire({
      title: 'ELIMINAR PUBLICACIÓN',
      text: "¿Estás seguro de que quieres eliminar esta publicación?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: "#14dd28",
      cancelButtonColor: "#14dd28",
      confirmButtonText: 'SÍ, ELIMINAR!'
    }).then((resultado) => {
      if (resultado.value) {
        window.location.href = "/editarpublicacion_dos";
      }
    });
  }
  render() {
    return (
      <div>
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
        
       <div className="public-flex">
       <Card style={{ width: "10rem" }}>
            <Card.Img
              width="50"
              height="100"
              src="https://www.eltiempo.com/files/article_content/uploads/2019/12/19/5dfbfefa82e19.jpeg"
            />

            <Card.Body>
              <Card.Title>Buñuelos de arequipe</Card.Title>

              <Button className="boton-I" onClick={this._Alert}>
                VER MÁS
              </Button>
            </Card.Body>
          </Card>

          <Card style={{ width: "10rem" }}>
            <Card.Img
              width="50"
              height="100"
              src="https://truffle-assets.imgix.net/1t1bxm43v4e3_5sdtiLAzkssogGAcc2MUAs_patacones-con-guacamole_landscapeThumbnail_es.jpeg"
            />

            <Card.Body>
              <Card.Title>Patacones con guacamole</Card.Title>

              <Button  className="boton-I" onClick={this._Alert}>
                VER MÁS
              </Button>
            </Card.Body>
          </Card>
       </div>
       <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
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

export default editarpublicacion;
