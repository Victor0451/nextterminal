import React from "react";
import PerfilSelect from "react-select";
import EstadoSelect from "react-select";

import { perfil, estado } from "../../arrays/array";

const RegistrarUsuario = ({
  handleChange,
  handleSubmit,
  handleBlur,
  nombre,
  apellido,
  usuario,
  contrasena,
  errores,
  error,
  handleSelect,
  comboPer,
  comboEst,
}) => {
  return (
    <div className="container">
      <h1 className="mt-4 mb-4">
        <strong>
          <u>Registro de Usuarios</u>
        </strong>
      </h1>

      <form
        className=" mt-4 border border-dark p-4 jumbotron"
        onSubmit={handleSubmit}
      >
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
              value={usuario}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errores.usuario && (
              <div className="mt-2 form-group  alert alert-danger">
                {errores.usuario}
              </div>
            )}
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
              value={contrasena}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errores.contrasena && (
              <div className="mt-2 form-group  alert alert-danger">
                {errores.contrasena}
              </div>
            )}
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
              value={nombre}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errores.nombre && (
              <div className="mt-2 form-group  alert alert-danger">
                {errores.nombre}
              </div>
            )}
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
              value={apellido}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errores.apellido && (
              <div className="mt-2 form-group  alert alert-danger">
                {errores.apellido}
              </div>
            )}
          </div>

          <div className="form-group col-md-4">
            <label>
              <strong> Perfil </strong>
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
              <strong> Estado </strong>
            </label>
            <EstadoSelect
              options={estado}
              placeholder={"Estado"}
              onChange={(value) => handleSelect(value, "estado")}
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
              value="Registrar"
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

export default RegistrarUsuario;
