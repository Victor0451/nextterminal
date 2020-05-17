import React from "react";
import JsCokies from 'js-cookie'
import RedirectToLogin from './RedirectToLogin'

const BuscarUsuario = ({ userRef, errores, buscarUsuario }) => {
  let token = JsCokies.get("token")

  return (
    <div className="container">


      <div className="mt-4 p-3 border border-dark alert alert-primary">
        <h2 className="mt-2">
          <strong>
            {" "}
            <u>Buscar Usuario</u>{" "}
          </strong>
        </h2>
        <form className=" mt-4 border p-2" onSubmit={buscarUsuario}>
          <div className="row">
            <div className="form-group col-md-6">
              <label>Buscar Usuario</label>
              <input
                type="text"
                className="form-control"
                placeholder="Buscar Usuario"
                ref={userRef}
              />
              {errores && (
                <div className="mt-2 form-group  alert alert-danger">
                  {errores}
                </div>
              )}
            </div>

            <div className="col-md-6">
              <button type="submit" className="btn btn-primary  btn-block mt-4">
                Buscar
              </button>
              {/* {error && (
                <div className="mt-2 form-group text-center alert alert-danger">
                  {error} 
                </div>
                
              )}
              */}
            </div>
          </div>
        </form>
      </div>

    </div>
  );
};

export default BuscarUsuario;
