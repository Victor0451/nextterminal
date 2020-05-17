import React from "react";

const Adimn = () => {
  return (
    <ul className="navbar-nav">


      <li className="nav-item dropdown">
        <a
          href=""
          className="nav-link dropdown-toggle"
          role="button"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Hojas De Ruta{" "}
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a href="/hojaruta/nuevo" className="dropdown-item text-dark">
            Ingresar Hoja de Ruta
          </a>

          <hr />

          <a href="/hojaruta/listado" className="dropdown-item text-dark">
            Listado de Hojas de Ruta
          </a>
        </div>
      </li>


      <li className="nav-item dropdown">
        <a
          href=""
          className="nav-link dropdown-toggle"
          role="button"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Usuarios{" "}
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a href="/auth/registro" className="dropdown-item text-dark">
            Registrar Usuario
          </a>

          <hr />

          <a href="/auth/editar" className="dropdown-item text-dark">
            Modificacion de Usuario
          </a>
        </div>
      </li>

    </ul>
  );
};

export default Adimn;
