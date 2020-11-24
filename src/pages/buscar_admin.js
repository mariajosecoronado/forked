import React from "react";
import "../style/style.css";
import "../components/menu_admin.js";
import { BsList } from "react-icons/bs";
import { Dropdown } from "react-bootstrap";
import { BsSearch } from "react-icons/bs";
import { Nav } from "react-bootstrap";
import { Form, FormControl } from "react-bootstrap";

class buscar_admin extends React.Component {
  render() {
    return (
      <div>
        <>

        <nav class="navbar navbar-dark">
        <>
          <Nav className="justify-content-center " activeKey="/home">
            <Nav.Item>
              <Nav.Link eventKey="link-1" className="encabezado">
              </Nav.Link>
              <Dropdown>
  <Dropdown.Toggle variant="success" id="dropdown-basic">
  <BsList />
  </Dropdown.Toggle>

  <Dropdown.Menu>
  <Dropdown.Item href="inicio_admin">PRINCIPAL</Dropdown.Item>
    <Dropdown.Item href="mensajes_admin">MENSAJES</Dropdown.Item>
    <Dropdown.Divider />
  <Dropdown.Item href="/listaSalado_admin">RECETAS SALADAS</Dropdown.Item>
   <Dropdown.Item href="/listaDulce_admin">RECETAS DULCES</Dropdown.Item>
   <Dropdown.Divider />
   <Dropdown.Item href="/iniciarS">CERRAR SESIÓN</Dropdown.Item>
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

          <Nav.Link eventKey="Busqueda" className="encabezado ">
            <h1>
              {" "}
            
            </h1>
          </Nav.Link>
         

        
          </> 
        
          </nav>
          <Form inline>
            <FormControl
              type="text"
              placeholder="Search"
              className="Busqueda"
            />
            <Nav.Item>
              <Nav.Link href="/recetas_sin_reportar_admin" className="Lupa">
                <h1>
                  {" "}
                  <BsSearch />{" "}
                </h1>
              </Nav.Link>
            </Nav.Item>
          </Form>
        </>
      </div>
    );
  }
}

export default buscar_admin;
