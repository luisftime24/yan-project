import { NavLink } from "react-router-dom";

import { withRouter } from "react-router-dom";

import { useContext } from "react";
import { AppContext } from "../../context/AppProvider";

import "./nav.css";

const Navi = () => {
  
  const { Logout, user } = useContext(AppContext);

  return (
    <div className="container ">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="1">
            Shopify{" "}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink to="/landing">
                  <a class="nav-link active" aria-current="page" href="1">
                    Inicio
                  </a>
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink to="/catalogo">
                  <a class="nav-link active" aria-current="page" href="1">
                    Catalogo
                  </a>
                </NavLink>
              </li>

              {user.correo !== "" ? (
                <li className="nav-item">
                  <NavLink to="/admin">
                    <a class="nav-link active" aria-current="page" href="1">
                      Admin
                    </a>
                  </NavLink>
                </li>
              ) : null}
            </ul>
            <form className="d-flex">
              {user.correo !== "" ? (
                <button className="btn btn-dark" onClick={() => Logout()}>
                  Cerrar sesión
                </button>
              ) : (
                <NavLink to="/login">
                  <button className="btn btn-outline-primary" type="submit">
                    Iniciar sesión
                  </button>
                </NavLink>
              )}

              <NavLink to="/register">
                <button className="btn btn-primary mx-2" type="submit">
                  Registro
                </button>
              </NavLink>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

const NavMain = withRouter(Navi);
export { NavMain };
