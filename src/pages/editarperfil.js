import React from "react";
import "../style/style.css";

import { BsSearch } from "react-icons/bs";
import { Nav } from "react-bootstrap";
import { BsFillChatQuoteFill } from "react-icons/bs";
import { Button } from "react-bootstrap";
import { BsArrowLeft } from "react-icons/bs";
import Swal from "sweetalert2";;

class editarPerfil extends React.Component {
  _Alerta()  {
    
      Swal.fire({
        title: "Está publicación ha sido eliminada",
        showCancelButton: true,
        confirmButtonColor: "#14dd28",
        cancelButtonColor: "#14dd28",
        confirmButtonText: "Aceptar",
        cancelButtonText: "Cancelar"
      }).then((resultado) => {
        if (resultado.value) {
          window.location.href = "/Perfil";
        }
      });
    }
  _Alert() {
    Swal.fire("¡EXCELENTE!","Foto cambiada correctamente",  "success");
  }
  _
  render() {
    return (
      <div>
         <div className="encabezado">
          <Nav.Link eventKey="link-1" className="encabezado" href="perfil">
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
        <div className="fotoperfil">
          <img
            className="fotoperfil"
            src="https://elhombreconfuso.files.wordpress.com/2010/11/alejandrosalgueirosexyhunk01.jpg"
            alt="logo"
            width="130"
            height="150"
          />
        </div><br></br>
        <div className="unotitulo">
          <h6> Alejandro Pérez </h6>
        </div><br></br>
        <Button href="/editarperfil" className="boton-I" onClick={this._Alert}>
          Subir nueva foto
        </Button><br></br>
        <div className="input">
          <BsFillChatQuoteFill />

          <input placeholder="Edita tu nombre"></input>
        </div><br></br>

      
        <div className="input">
          <BsFillChatQuoteFill />

          <input placeholder="Edita tu correo"></input>
        </div>
        <br></br>
        <Button onClick={this._Alerta} href="/Perfil" className="boton-I">
          Guardar cambios
        </Button><br></br>

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

export default editarPerfil;