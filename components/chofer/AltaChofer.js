import React from 'react';

const AltaChofer = () => {
    return (
        <div className="container">
            <div className="border border-dark p-4 mt-4 mb-4 alert alert-primary">
                <h2 className="mb-4">
                    <strong>
                        <u>
                            Chofer
                    </u>
                    </strong>
                </h2>

                <form className="mt-4 border border-dark p-4">
                    <h3 className="mb-4"><u>Datos Personales</u></h3>

                    <div className="row">
                        <div className="form-group col-md-4">
                            <label >Apellido</label>
                            <input type="text" className="form-control" />
                            <small className="form-text  badge badge-danger">error</small>
                        </div>

                        <div className="form-group col-md-4">
                            <label >Nombre</label>
                            <input type="text" className="form-control" />
                            <small className="form-text  badge badge-danger">error</small>
                        </div>


                        <div className="form-group col-md-4">
                            <label >DNI</label>
                            <input type="text" className="form-control" />
                            <small className="form-text  badge badge-danger">error</small>
                        </div>



                        <div className="form-group col-md-12">
                            <label >Observaciones</label>
                            <textarea type="text" className="form-control" rows="3" />
                            <small className="form-text  badge badge-danger">error</small>
                        </div>
                    </div>



                    <div className="mt-4 mb-4">
                        <button className="btn btn-primary btn-block" type="submit">Registrar</button>
                    </div>

                </form>

            </div>
        </div>
    );
};

export default AltaChofer;