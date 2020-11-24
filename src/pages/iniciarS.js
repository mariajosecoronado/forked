import React, { Component } from 'react';
import '../style/Login.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import md5 from 'md5';
import Cookies from 'universal-cookie';

const baseUrl="http://localhost:3001/usuarios";
const cookies = new Cookies();

class iniciarS extends Component{
    state={
        form:{
            username: '',
            password: ''
        }
    }

    handleChange=async e=>{
      await this.setState({
            form:{
                ...this.state.form,
                [e.target.name]:e.target.value
            }
         });
          
    }
    iniciarSesion=async()=>{
await axios.get(baseUrl, {params: {username: this.state.form.username, password: md5(this.state.form.password)}})
.then(response=>{
    return response.data;
})
.then(response=>{
    if(response.length>0){
        var respuesta=response[0]; 
        cookies.set('id', respuesta.id, {path: "/"});
        cookies.set('nombre', respuesta.nombre, {path: "/"});
        cookies.set('apellidos', respuesta.apellidos, {path: "/"});
        cookies.set('username', respuesta.username, {path: "/"});
        alert(`Bienvenid@ a COOK TO WORK:  ${respuesta.nombre} ${respuesta.apellidos}`);
        window.location.href="./inicio";
       
    }else{
        alert('El usuario o la contraseña no son correctos');
    }
})
 .catch(error=>{
     console.log(error);
 } )
 }
 componentDidMount() {
    if (cookies.get('username') && cookies.get('password')) {
      window.location.href = "./inicio";
    }
  }

  CrearCuenta() {
    window.location.href = "./registro";
  }

    render(){
        return(
            <div className="wrapper fadeInDown">
            <div id="formContent">
              <div className="fadeIn first py-3">
                <img src="./imgP/logoP.jpeg" id="icon" alt="User Icon" />
                <h1>BIENVENID@ A COOK TO WORK</h1>
                    <h2>INICIE SESIÓN AQUÍ</h2> 
              </div>
              <div className="form-group">
                <label>Usuario: </label>
                <br />
                <input
                  type="text"
                  className="form-control"
                  name="username"
                  onChange={this.handleChange}
                />
                <br />
                <label>Contraseña: </label>
                <br />
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  onChange={this.handleChange}
                />
                <br />
    
                <button className="btn btn-success  " onClick={() => this.iniciarSesion()}>INICIAR SESIÓN COMO USUARIO</button>
                <button className="btn btn-success  " onClick={() => this.iniciarSesion()}>INICIAR SESIÓN COMO ADMINISTRADOR</button>
                <button className="btn btn-success  " onClick={() => this.CrearCuenta()}>REGISTRARSE</button>
              </div>
            </div>
          </div>
        );
    }
}

export default iniciarS;
