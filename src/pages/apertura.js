import React from 'react';
import '../style/style.css';
import { Spinner } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';

class apertura extends React.Component {
  render() {
    return (
<div className=" text-center py-5 fondoInicio">
      <div className="container text-center py-5 ">
        <img
          className="icono-ico"
          src="https://raw.githubusercontent.com/Saracas-022/holamundo/main/1455739720_Kitchen_Bold_Line_Color_Mix-28_icon-icons.com_53404.ico"
          alt="logo"
        />

        <h1 className="letra_logo">COOK TO WORK</h1>
        <Nav.Link href="/inicioanonimo" className="black">
                  <Spinner animation="border" role="status">
                    <span className="sr-only">Loading...</span>
                  </Spinner>
                </Nav.Link>
      </div>
      </div>
    );
  }
}

export default apertura;