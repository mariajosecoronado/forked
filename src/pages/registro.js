import React, { Component } from 'react';
import '../style/Registro.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import md5 from 'md5';
import Cookies from 'universal-cookie';

const url = "https://bj1li.sse.codesandbox.io/usuarios";
const cookies = new Cookies();

class registro extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      form: {
        id: '',
        nombre: '',
        apellidos: '',
        username: '',
        password: ''
      }
    }
  }

  peticionesGet = () => {
    axios.get(url).then(response => {
      this.setState({ data: response.data })
    }).catch(error => {
      console.log(error.message);
    })
  }
  
  componentDidMount() {
    this.peticionesGet();
  }

  peticionesPost = async () => {
    await axios.post(url, {
      id: this.state.form.id,
      apellidos: this.state.form.apellidos,
      nombre: this.state.form.nombre,
      username: this.state.form.username,
      password: md5(this.state.form.password)
    }).then(response => {
      alert('Registro exitoso!')
      window.location.href = "./";
    }).catch(error => {
      console.log(error.message);
    })
  }

  handleChange = async e => {
    await this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value
      }
    });
    console.log(this.state.form)
  }

  iniciarSesion = async () => {
    await axios.get(url, { params: { username: this.state.form.username, password: md5(this.state.form.password) } })
      .then(response => {
        console.log(response.data);
      }).catch(error => {
        console.log(error);
      })

  }


  render() {
    return (
      <div className="wrapper fadeInDown">
        <div id="formContent">
          <div className="fadeIn first ">
          <img src="./imgP/logoP.jpeg" id="icon" alt="User Icon" />
            <h3>BIENVENID@ A COOK TO WORK</h3>
             <h2>REGISTRESE AQUÍ</h2>
          </div>
          <div className="form-group">
            <label>id:</label>
            <br />
            <input
              type="int"
              className="form-control"
              name="id"
              placeholder={this.state.data.length + 1}
              onChange={this.handleChange}
            />

            <br />
            <label>NOMBRE: </label>
            <br />
            <input
              type="text"
              className="form-control"
              name="nombre"
              onChange={this.handleChange}
            />
            <br />
           
            <br />
            <label>APELLIDOS: </label>
            <br />
            <input
              type="text"
              className="form-control"
              name="apellidos"
              onChange={this.handleChange}
            />
            
            <label>username: </label>
            <br />
            <input
              type="text"
              className="form-control"
              name="username"
              onChange={this.handleChange}
            />
            <br />
            <label>CONTRASEÑA: </label>
            <br />
            <input
              type="password"
              className="form-control"
              name="password"
              onChange={this.handleChange}
            />
           
           <button className="btn btn-success " onClick={() => this.peticionesPost()}>Enviar</button>
           <br></br>
                <br></br>
                <button href="/iniciarS" className="btn btn-success ">
                  Atrás
                </button>
            
                  
               
          </div>
        </div>
      </div>
    );
  }
}

export default registro;
