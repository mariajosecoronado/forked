import React from "react";
import "../style/style.css";
import { Form,Button } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import Swal from "sweetalert2";
import { BsArrowLeft } from "react-icons/bs";


class Confirmar_contraseña extends React.Component {
  _Alert() {
    Swal.fire({
      title: "!Tu contraseña se ha recuperado con éxito¡",
      showCancelButton: true,
      confirmButtonColor: "#14dd28",
      cancelButtonColor: "#14dd28",
      confirmButtonText: "Iniciar sesión"
    }).then((resultado) => {
      if (resultado.value) {
        window.location.href = "/iniciarS";
      }
    });
  }
  render() {
    return (
      <div>
      <div className="encabezado">
      <Nav.Item>
            <Nav.Link
              eventKey="link-1"
              className="encabezado"
              href="./iniciarS"
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


      
      </div>

      <Nav className="justify-content-end" activeKey="/home">
        <Nav.Item></Nav.Item>
      </Nav>

            <h1 className="titulo-IR">
           
              INGRESA TU NUEVA CONTRASEÑA
            </h1>
            <div>
              <Form >
              <Form.Group
                  controlId="formBasicPassword"
                  className="campo-iniciarS"
                >
                  <Form.Control type="password" placeholder="Contraseña:" />
                </Form.Group>

                <Form.Group
                  controlId="formBasicPassword"
                  className="campo-iniciarS"
                >
                  <Form.Control type="password" placeholder="Confirmar contraseña:" />
                </Form.Group>
                
                <br />
                <br />
                <Button onClick={this._Alert}  className="boton-I">
                 Confirmar
                </Button>
              </Form>
            </div>
          </div>
        
      

        );
      }
    }
    
    export default Confirmar_contraseña;
