import React, { useState } from "react";
import Layout from "../../components/layout/Layout";
import ModificarUsuario from "../../components/auth/ModificarUsuario";
import BuscarUsuario from "../../components/auth/BuscarUsuario";

import axios from "axios";
import RedirectToLogin from "../../components/auth/RedirectToLogin";
import jsCookie from "js-cookie";
import toastr from "toastr";
import Router from "next/router";

// Validaciones
import useValidacion from "../../hooks/useValidacion";
import validarRegistro from "../../validacion/validarRegistro";

const STATE_INICIAL = {
  usuario: "",
  contrasena: "",
  nombre: "",
  apellido: "",
};

const editar = () => {
  const [error, guardarError] = useState(false);
  const [perfil, guardarPerfil] = useState(null);
  const [estado, guardarEstado] = useState(null);
  const [comboPer, guardarPer] = useState(null);
  const [comboEst, guardarEst] = useState(null);
  const [usererror, guardarUserError] = useState(null);
  const [user, guardarUser] = useState(null);

  const handleSelect = (value, flag) => {
    if (flag === "perfil") {
      const perfil = value.value;
      guardarPerfil(perfil);
    } else if (flag === "estado") {
      const estado = value.value;
      guardarEstado(estado);
    }
  };

  const {
    valores,
    errores,
    handleChange,
    handleSubmit,
    handleBlur,
  } = useValidacion(STATE_INICIAL, validarRegistro, crearRegistro);

  const { nombre, apellido, usuario, contrasena } = valores;

const buscarUsuario = () =>{
    

}

  async function crearRegistro() {
    //   try {
    //     const config = {
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //     };
    //     //Req body
    //     const body = JSON.stringify({
    //       usuario,
    //       contrasena,
    //       nombre,
    //       apellido,
    //       perfil,
    //       estado,
    //     });
    //     if (estado === null || perfil === null) {
    //       let comboEst = "Debes elegir el estado";
    //       guardarEst(comboEst);
    //       let comboPer = "Debes elegir el perfil";
    //       guardarPer(comboPer);
    //     } else {
    //       await axios.post(
    //         "http://190.231.32.232:5005/api/usuario/nuevousuario",
    //         body,
    //         config
    //       );
    //       console.log("Usuario creado exitosamente");
    //       toastr.success("El usuario fue creado con exito", "ATENCION");
    //       setTimeout(() => {
    //         Router.reload();
    //       }, 1500);
    //     }
    //   } catch (error) {
    //     console.log(error.response.data, error.response.status, "REGISTER_FAIL");
    //     guardarError(error.response.data.msg);
    //   }
  }



  let token = jsCookie.get("token");

  return (
    <Layout>
      {!token ? (
        <RedirectToLogin />
      ) : (
        <>
          <BuscarUsuario usuario={usuario} usererror={usererror} />

          {user === null ? null : (
            <ModificarUsuario
              nombre={nombre}
              apellido={apellido}
              usuario={usuario}
              contrasena={contrasena}
              errores={errores}
              handleChange={handleChange}
              handleSelect={handleSelect}
              comboPer={comboPer}
              comboEst={comboEst}
              handleSubmit={handleSubmit}
              handleBlur={handleBlur}
              error={error}
            />
          )}
        </>
      )}
    </Layout>
  );
};

export default editar;
