import React from "react";
import "../style/style.css";
import { BsArrowLeft } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";
import { Nav } from "react-bootstrap";
import { Card,Button} from "react-bootstrap";
import Swal from "sweetalert2";


class reporte_admin extends React.Component {
  
  _Alert()  {
    Swal.fire(
      'SIN REPORTAR!',
  'Esta receta no ha sido reportada!',
  'aceptar'
    )
    
  }
  _Alert2()  {
    Swal.fire({
      title: 'RECETA REPORTADA',
      text: "¿Desea eliminar esta receta?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#14dd28',
      cancelButtonColor: '#14dd28',
      confirmButtonText: 'Sí, eliminar!'
     
    }).then((resultado) => {
      if (resultado.value) {
        window.location.href = "/reporte_dos_admin";
      }
    })
    
    
  }
 
  
  
  render() {
    return (
      <div>
       <div className="encabezado">
          <Nav.Link eventKey="link-1" className="encabezado" href="recetas_reportadas_admin">
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

          <Nav.Link eventKey="Busqueda" className="encabezado " href="/buscar_admin">
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
            src="https://www.lapi.com.mx/image.ashx?s=57067&im=115321&t=p"
            alt="logo"
            width="130"
            height="150"
          />
        </div>

        <div className="unotitulo">
          <h6> Valeria Gómez </h6>
        </div>
        <div className="tituloR">
          <h6> Recetas reportadas</h6>
        </div>
        <div className="public-flex">
          <Card style={{ width: "12rem" }}>
            <Card.Img
              width="50"
              height="100"
              src="https://recetasfacil.online/wp-content/uploads/2018/12/Recetas-f%C3%A1ciles-de-pollo-para-ni%C3%B1os-e1544662062923.jpg"
            />

            <Card.Body>
              <Card.Title>Rollos de Pollo</Card.Title>

              <Button onClick={this._Alert}  className="botonR1">
              
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

              <Button onClick={this._Alert2}   className="botonR">
                Ver más
              </Button>
              
            </Card.Body>
          </Card>
        </div>
       
      </div>
    );
  }
}

export default reporte_admin;
