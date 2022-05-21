import React from "react";
import { withRouter } from "react-router-dom";

import { AppContext } from "../../context/AppProvider";

const RegisterPage = () => {
  const { loginData, state, setState, Register } = React.useContext(AppContext);
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

    if (password.length < 6) {
      console.log("Ingrese una contraseña de 6 digitos");
      setState({ ...state, error: "Ingrese una contraseña de 6 digitos" });
      return;
    }

    Register();

    setState({ ...state, error: null });
    console.log("pasando todo papu");
  };

  return (
    <div className="row d-flex justify-content-center">
      <div className="col-12 col-sm-12 col-md-6">
        <main className="form-signin">
          <form onSubmit={procesarDatos}>
            <h1 className="mt-5"> Únete hoy</h1>
            <p> Empieza tu camino de aprendizaje</p>

            <button className="w-100 btn btn-lg btn-azul   mt-3" type="submit">
              {" "}
              <i class="bi bi-facebook"></i> Continua con facebook
            </button>
            <button
              className="w-100 btn btn-lg btn-blanco mt-3 mb-3"
              type="submit"
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
                onChange={(e) => setState({ ...state, correo: e.target.value })}
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
                  setState({ ...state, password: e.target.value })
                }
                value={password}
              />
            </div>

            <button className="w-100 btn btn-lg btn-success mt-3" type="submit">
              Registrarte
            </button>
            <p className="mt-5 mb-3 text-muted">&copy; 2017–2021</p>
          </form>
        </main>
      </div>
    </div>
  );
};

const PageRegister = withRouter(RegisterPage);

export { PageRegister };
