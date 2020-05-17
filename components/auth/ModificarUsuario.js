import React from "react";
import PerfilSelect from "react-select";
import EstadoSelect from "react-select";

import { perfil, estado } from "../../arrays/array";

const ModificarUsuario = ({
  user,
  usuarioRef,
  contrasenaRef,
  nombreRef,
  apellidoRef,
  perfilRef,
  estadoRef,
  handleSelect,
  comboPer,
  comboEst,
  error,
  errores,
  editRegistro
}) => {
  return (
    <div className="container">
      <form
        className=" mt-4 border border-dark p-4 alert alert-primary"
        onSubmit={editRegistro}
      >
        <h2 className=" mb-4">
          <strong>
            {" "}
            <u>Modificar Usuario</u>{" "}
          </strong>
        </h2>
        <div className="row">
          <div className="form-group col-md-4">
            <label>
              <strong> Usuario </strong>
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Usuario"
              name="usuario"
              defaultValue={user.usuario}
              ref={usuarioRef}
            />
            {/* {errores.usuario && (
              <div className="mt-2 form-group  alert alert-danger">
                {errores.usuario}
              </div>
            )} */}
          </div>

          <div className="form-group col-md-4">
            <label>
              <strong> Contraseña </strong>
            </label>
            <input
              type="password"
              className="form-control"
              placeholder="Contrasena"
              name="contrasena"
              defaultValue={user.contrasena}
              ref={contrasenaRef}


            />
            {/* {errores.contrasena && (
              <div className="mt-2 form-group  alert alert-danger">
                {errores.contrasena}
              </div> 
            )}
            */}
          </div>

          <div className="form-group col-md-4">
            <label>
              <strong> Nombre </strong>
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Nombre"
              name="nombre"
              defaultValue={user.nombre}
              ref={nombreRef}

            />
            {/* {errores.nombre && (
              <div className="mt-2 form-group  alert alert-danger">
                {errores.nombre}
              </div>
            )} */}
          </div>

          <div className="form-group col-md-4">
            <label>
              <strong> Apellido </strong>
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Apellido"
              name="apellido"
              defaultValue={user.apellido}
              ref={apellidoRef}

            />
            {/* {errores.apellido && (
              <div className="mt-2 form-group  alert alert-danger">
                {errores.apellido}
              </div>
            )} */}
          </div>

          <div className="form-group col-md-4">
            <label>
              <strong ref={perfilRef}> Perfil: {user.perfil === 1 ? (<>Administrador</>) : user.perfil === 2 ? (<>Operador</>) : null} </strong>
            </label>
            <PerfilSelect
              options={perfil}
              placeholder={"Perfil"}
              onChange={(value) => handleSelect(value, "perfil")}

            />

            {comboPer && (
              <div className="mt-2 form-group  alert alert-danger">
                {comboPer}
              </div>
            )}
          </div>

          <div className="form-group col-md-4">
            <label>
              <strong ref={estadoRef}> Estado: {user.estado === 1 ? (<>Activo</>) : user.estado === 2 ? (<>Inactivo</>) : null} </strong>
            </label>
            <EstadoSelect
              options={estado}
              placeholder={"Estado"}
              onChange={(value) => handleSelect(value, "estado")}
              ref={estadoRef}

            />

            {comboEst && (
              <div className="mt-2 form-group  alert alert-danger">
                {comboEst}
              </div>
            )}
          </div>
          <div className="col-md-12">
            <input
              type="submit"
              className="btn btn-primary  btn-block mt-4"
              value="Modificar"
            />

            {error && (
              <div className="mt-2 form-group text-center alert alert-danger">
                {error}
              </div>
            )}
          </div>
        </div>
      </form>
    </div>
  );
};

export default ModificarUsuario;
