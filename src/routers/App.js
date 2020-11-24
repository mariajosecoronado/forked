import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Apertura from "../pages/apertura";
import Registro from "../pages/registro";
import Menu_admin from "../components/menu_admin";
import Bienvenida from "../pages/bienvenida";
import Inicio from "../pages/inicio";
import Inicio_admin from "../pages/inicio_admin";
import Perfil from "../pages/Perfil";
import Perfil3 from "../pages/perfil3";
import IniciarS from "../pages/iniciarS";
import ListaDulce from "../pages/listaDulce";
import ListaSalado from "../pages/listaSalado";
import ListaDulce_admin from "../pages/listaDulce_admin";
import ListaSalado_admin from "../pages/listaSalado_admin";
import Mensaje_reporte_admin from "../pages/mensaje_reporte_admin";
import Mensajes_admin from "../pages/mensajes_admin";
import Mensajes_admi from "../pages/mensajes_admi";
import Mensaje from "../pages/mensaje";
import RecetaDulce from "../pages/recetaDulce";
import RecetaSalada from "../pages/recetaSalada";
import Botones_mensajes_admin from "../pages/botones_mensajes_admin";
import Buscar_admin from "../pages/buscar_admin";
import Buscar from "../pages/buscar";
import Perfil2 from "../pages/perfil2";
import RecetaRollos from "../pages/recetaRollos";
import EditarPerfil from "../pages/editarperfil";
import  Editarpublicacion from "../pages/editarpublicacion";
import  Editarpublicacion_dos from "../pages/editarpublicacion_dos";
import Reporte_admin from "../pages/reporte_admin";
import Reporte_dos_admin from "../pages/reporte_dos_admin";
import NuevaReceta from "../pages/nuevareceta";
import RecetaGalletas from "../pages/recetaGalletas";
import Recetas_reportadas_admin from "../pages/recetas_reportadas_admin";
import Recetas_reportadasR_admin from "../pages/recetas_reportadasR_admin";
import Recetas_sin_reportar_admin from "../pages/recetas_sin_reportar_admin";
import Recetas_sin_reportarR_admin from "../pages/recetas_sin_reportarR_admin";
import Chat_admin from "../pages/chat_admin";
import Nuevareceta from "../pages/nuevareceta";
import recetaperfil from "../pages/recetaperfil";
import inicioanonimo from "../pages/inicioanonimo";
import Olvidaste_contraseña from "../pages/olvidaste_contraseña";
import Confirmar_contraseña from "../pages/confirmar_contraseña";


const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Apertura} />
        <Route exact path="/registro" component={Registro} />
        <Route exact path="/menu_admin" component={Menu_admin} />
        <Route exact path="/bienvenida" component={Bienvenida} />
        <Route exact path="/inicio" component={Inicio} />
        <Route exact path="/Perfil" component={Perfil} />
        <Route exact path="/perfil2" component={Perfil2} />
        <Route exact path="/perfil3" component={Perfil3} />
        <Route exact path="/inicio_admin" component={Inicio_admin} />
        <Route exact path="/iniciarS" component={IniciarS} />
        <Route exact path="/listaDulce" component={ListaDulce} />
        <Route exact path="/recetaSalada" component={RecetaSalada} />
        <Route exact path="/listaSalado" component={ListaSalado} />
        <Route exact path="/listaDulce_admin" component={ListaDulce_admin} />
        <Route exact path="/listaSalado_admin" component={ListaSalado_admin} />
        <Route exact path="/recetaDulce" component={RecetaDulce} />
        <Route exact path="/recetaGalletas" component={RecetaGalletas} />
        <Route exact path="/mensajes_admin" component={Mensajes_admin} />
        <Route exact path="/mensajes_admi" component={Mensajes_admi} />
        <Route exact path="/editarpublicacion" component={Editarpublicacion} />
        <Route exact path="/editarpublicacion_dos" component={Editarpublicacion_dos} />
        <Route exact path="/recetaperfil" component={recetaperfil} />
        <Route exact path="/inicioanonimo" component={inicioanonimo} />
        <Route
          exact
          path="/mensaje_reporte_admin"
          component={Mensaje_reporte_admin}
        />
        <Route exact path="/nuevareceta" component={NuevaReceta} />
        <Route
          exact
          path="/recetas_reportadas_admin"
          component={Recetas_reportadas_admin}
        />
         <Route
          exact
          path="/recetas_reportadasR_admin"
          component={Recetas_reportadasR_admin}
        />
        <Route
          exact
          path="/recetas_sin_reportar_admin"
          component={Recetas_sin_reportar_admin}
        />
        <Route
          exact
          path="/recetas_sin_reportarR_admin"
          component={Recetas_sin_reportarR_admin}
        />
        <Route exact path="/editarperfil" component={EditarPerfil} />
        <Route exact path="/recetaRollos" component={RecetaRollos} />
        <Route exact path="/reporte_admin" component={Reporte_admin} />
        <Route exact path="/reporte_dos_admin" component={Reporte_dos_admin} />
        <Route
          exact
          path="/botones_mensajes_admin"
          component={Botones_mensajes_admin}
        />
        <Route exact path="/buscar_admin" component={Buscar_admin} />
        <Route exact path="/buscar" component={Buscar} />

        <Route exact path="/mensaje" component={Mensaje} />
        <Route exact path="/recetaRollos" component={RecetaRollos} />
        <Route exact path="/chat_admin" component={Chat_admin} />
        <Route exact path="/nuevareceta" component={Nuevareceta} />
        <Route exact path="/olvidaste_contraseña" component={Olvidaste_contraseña} />
        <Route exact path="/confirmar_contraseña" component={Confirmar_contraseña} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
