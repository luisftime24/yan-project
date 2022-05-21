import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Footer } from "../components/footer/footer";

import "../assets/style/main.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { Header } from "../components/header/header";
import { Main } from "../components/main/main";
import { Admin } from "../pages/admin/admin";
import { PageAdminCrear } from "../pages/admin/crear/admin-crear";
import { PageAdminEditar } from "../pages/admin/editar/admin-editar";
import { PageCarrito } from "../pages/carrito/carrito";
import { PageCatalogo } from "../pages/catalogo/catalogo";
import { PagePagos } from "../pages/checkout/checkout";
import { PageCrud } from "../pages/crud/crud";
import { PageLanding } from "../pages/landing/landing";
import { PageLogin } from "../pages/login/loginPage";
import { PageProducto } from "../pages/producto/producto";
import { PageRegister } from "../pages/register/registerPage";

const AppRouter = () => {
  return (
    <Router>
      <div className="wrapper">
        <Header />
        <Main>
          <Switch>
            <Route path="/admin/editar/:id">
              <PageAdminEditar />
            </Route>
            <Route path="/admin/crear">
              <PageAdminCrear />
            </Route>
            <Route path="/crud">
              <PageCrud />
            </Route>
            <Route path="/checkout">
              <PagePagos />
            </Route>
            <Route path="/landing">
              <PageLanding />
            </Route>
            <Route path="/catalogo">
              <PageCatalogo />
            </Route>
            <Route path="/producto/:id">
              <PageProducto />
            </Route>
            <Route path="/login">
              <PageLogin />
            </Route>
            <Route path="/admin">
              <Admin />
            </Route>
            <Route path="/register">
              <PageRegister />
            </Route>
            <Route path="/carrito">
              <PageCarrito />
            </Route>
          </Switch>
        </Main>

        <Footer />
      </div>
    </Router>
  );
};

export default AppRouter;
