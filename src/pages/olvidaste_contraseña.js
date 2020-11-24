import React from "react";
import "../style/style.css";
import { Form, Button } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { BsArrowLeft } from "react-icons/bs";

class olvidarC extends React.Component {
  render() {
    return (
      <div className="container-fluid ">
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
           ¿OLVIDASTE TU CONTRASEÑA?   
            </h1>
          Escribe tu correo de usuario de COOK TO WORK
            <div>
              <Form >
                <Form.Group controlId="formBasicEmail" className="campo-iniciarS">
                  <Form.Control type="email" placeholder="Correo:" />
                </Form.Group>
                <br />
                <br/>
                
                <Button  href="/confirmar_contraseña" className="boton-I">
                Confirmar
               </Button>
               
              </Form>
            </div>
          </div>
    
     
    );
  }
}

export default olvidarC;
