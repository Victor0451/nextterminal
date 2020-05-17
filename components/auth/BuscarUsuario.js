import React from "react";

const BuscarUsuario = ({ usuario, errores }) => {
  return (
    <div className="container">
      <div className="mt-4 p-3 border border-dark jumbotron">
        <h2 className="mt-2">
          <strong>
            {" "}
            <u>Buscar Socio</u>{" "}
          </strong>
        </h2>
        <form className=" mt-4 border p-2">
          <div className="row">
            <div className="form-group col-md-6">
              <label>Buscar Socio</label>
              <input
                type="text"
                className="form-control"
                placeholder="Buscar Socio"
                value={usuario}
                name="usuario"
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
