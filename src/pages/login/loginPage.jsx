import React from "react";
import { withRouter } from "react-router-dom";

import { AppContext } from "../../context/AppProvider";
import "./login.css";

const LoginPage = () => {
  const { loginData, state, setState, setLoginData, Login } =
    React.useContext(AppContext);
  const { correo, password } = loginData;

  const procesarDatos = (e) => {
    e.preventDefault();
    if (!correo.trim()) {
      console.log("Ingrese email");
      setState({ ...state, error: "Ingrese email" });
      return;
    }

    if (!password.trim()) {
      console.log("Ingrese password");
      setState({ ...state, error: "Ingrese password" });
      return;
    }

    if (password.length < 2) {
      console.log("Ingrese una contraseña de 6 digitos");
      setState({ ...state, error: "Ingrese una contraseña de 6 digitos" });
      return;
    }

    Login();

    setState({ ...state, error: null });
    console.log("pasando todo papu");
  };

  return (
    <div className="row d-flex justify-content-center h-100">
      <div className="col-12 col-sm-8 col-md-6">
        <main className="form-signin">
          <form onSubmit={procesarDatos}>
            <h1 className="mt-5"> Bienvenido de vuelta</h1>
            <p> Que bueno verte otra vez :)</p>

            <button className="w-100 btn btn-lg btn-azul   mt-3" type="button">
              {" "}
              <i className="bi bi-facebook"></i> Continua con facebook
            </button>
            <button
              className="w-100 btn btn-lg btn-blanco mt-3 mb-3"
              type="button"
            >
              <i class="bi bi-google"></i> Continua con google{" "}
            </button>

            <p className="text-center"> o continua con </p>

            <div className="form">
              {state.error && (
                <div className="alert alert-danger">{state.error}</div>
              )}
              <label className="form-label">Correo electrónico</label>
              <input
                type="email"
                className="form-control form-control-lg"
                id="floatingInput"
                placeholder="correo"
                onChange={(e) =>
                  setLoginData({ ...loginData, correo: e.target.value })
                }
                value={correo}
              />
            </div>

            <label className="form-label">Contraseña</label>
            <div className="">
              <input
                type="password"
                className="form-control form-control-lg"
                id="floatingPassword"
                placeholder="Password"
                onChange={(e) =>
                  setLoginData({ ...loginData, password: e.target.value })
                }
                value={password}
              />
            </div>

            <button className="w-100 btn btn-lg btn-success mt-3" type="submit">
              Iniciar sesión
            </button>
            <p className="mt-5 mb-3 text-muted">
              ¿Aun no eres miembro? <strong>Registrate</strong>
            </p>
          </form>
        </main>
      </div>
    </div>
  );
};

const PageLogin = withRouter(LoginPage);
export { PageLogin };
