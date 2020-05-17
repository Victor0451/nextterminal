import React, { useState } from "react";
import Layout from "../../components/layout/Layout";
import ModificarUsuario from "../../components/auth/ModificarUsuario";
import BuscarUsuario from "../../components/auth/BuscarUsuario";
import axios from "axios";
import RedirectToLogin from "../../components/auth/RedirectToLogin";
import jsCookie from "js-cookie";
import toastr from "toastr";
import Router from "next/router";





const editar = () => {



  let userRef = React.createRef()
  let usuarioRef = React.createRef()
  let contrasenaRef = React.createRef()
  let nombreRef = React.createRef()
  let apellidoRef = React.createRef()
  let perfilRef = React.createRef()
  let estadoRef = React.createRef()


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



  const buscarUsuario = async (e) => {
    e.preventDefault()

    let id = userRef.current.value
    if (id === '') {
      console.log("id esta vacio");
    } else {
      await axios.get(`http://190.231.32.232:5005/api/usuario/usuario/${id}`).then(res => {
        const user = res.data
        console.log(user);
        guardarUser(user)
      }).catch(error => {
        console.log(error);
      })
    }




  }

  const editarRegistro = async (e) => {
    e.preventDefault()

    const UsuarioEdit = {
      id_usuario: user.id_usuario,
      usuario: usuarioRef.current.value,
      contrasena: contrasenaRef.current.value,
      nombre: nombreRef.current.value,
      apellido: apellidoRef.current.value,
      perfil: perfil,
      estado: estado
    }

    if (perfil === null) {

      UsuarioEdit.perfil = user.perfil
    } else {
      UsuarioEdit.perfil = perfil
    }

    if (estado === null) {
      UsuarioEdit.estado = user.estado
    } else {
      UsuarioEdit.estado = estado
    }

    await axios.put(`http://190.231.32.232:5005/api/usuario/editarusuario/${user.id_usuario}`, UsuarioEdit).then(res => {
      toastr.success("El usuario se modifico con exito", "ATENCION")
      setTimeout(() => {
        Router.reload()
      }, 1500);
    }).catch(error => {
      console.log(error);
      toastr.error("Ocurrio un error, la operacion no se ralizo", "ATENCION")

    })

    console.log(UsuarioEdit);



  }

  let token = jsCookie.get('token')

  return (
    <Layout>
      {!token ? null : (
        <>
          <BuscarUsuario userRef={userRef} buscarUsuario={buscarUsuario} usererror={usererror} />

          {user === null ? null : (
            <ModificarUsuario
              user={user}
              usuarioRef={usuarioRef}
              contrasenaRef={contrasenaRef}
              nombreRef={nombreRef}
              apellidoRef={apellidoRef}
              perfilRef={perfilRef}
              estadoRef={estadoRef}
              handleSelect={handleSelect}
              comboPer={comboPer}
              comboEst={comboEst}
              error={error}

              editRegistro={editarRegistro}
            />
          )}
        </>
      )}


    </Layout>
  );
};

export default editar;
