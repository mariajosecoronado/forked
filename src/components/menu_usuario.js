import React from "react";
import "../style/style.css";
import { BsList } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";
import { Dropdown } from "react-bootstrap";
import { Nav } from "react-bootstrap";



class menu_usuario extends React.Component {


  render() {
    return (
      <div>
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
  <Dropdown.Item href="inicio">PRINCIPAL</Dropdown.Item>
    <Dropdown.Item href="Perfil">PERFIL</Dropdown.Item>
    <Dropdown.Divider />
  <Dropdown.Item href="/listaSalado">RECETAS SALADAS</Dropdown.Item>
   <Dropdown.Item href="/listaDulce">RECETAS DULCES</Dropdown.Item>
   <Dropdown.Divider />
   <Dropdown.Item href="/apertura">CERRAR SESIÓN</Dropdown.Item>
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

          <Nav.Link href="buscar" eventKey="Busqueda" className="encabezado ">
            <h1>
              {" "}
              <BsSearch />{" "}
            </h1>
          </Nav.Link>
         

        
          </> 
        
          </nav>
      </div>
        );
  }
}
export default menu_usuario;