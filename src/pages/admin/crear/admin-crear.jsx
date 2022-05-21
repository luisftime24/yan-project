import { useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

export function PageAdminCrear() {
  const [form, setForm] = useState({
    nombre: "",
    imagenes: "",
    precio: "",
    description: "",
  });
  let history = useHistory();
  const [productos, setProductos] = useState([]);
  function guardarAdmin() {
    axios
      .post("https://61ef3f1cd593d20017dbb3e3.mockapi.io/producto/", form)
      .then(() => {
        alert("Se grabo correctamente");
        window.location.reload();
      })
      .catch(() => {
        alert("No se pudo realizar la grabacion , intentalo mas tarde");
      });
  }

  async function deleteProducto(id) {
    try {
      axios.delete(
        `https://61ef3f1cd593d20017dbb3e3.mockapi.io/producto/${id}`
      );
      alert("Se elimino correctamente" + id);
      getProducto();
    } catch (e) {
      alert("No se pudo eliminar el elemento, intentalo mas tarde");
    }
  }

  function redireccionarAEditar(id) {
    console.log("click redireccionarAEditar!!", id);
    history.push(`/admin/editar/${id}`);
  }

  function getProducto() {
    axios
      .get("https://61ef3f1cd593d20017dbb3e3.mockapi.io/producto")
      .then((respuesta) => {
        setProductos(respuesta.data);
      });
  }
  useEffect(() => {
    getProducto();
  }, []);
  return (
    <div className="row">
      <div className="col-8 mb-2">
        <h4> Registro de Productos </h4>
        <form
          onSubmit={(evt) => {
            evt.preventDefault();
            guardarAdmin();
            console.log("form", form);
          }}
        >
          <div className="col-8  mb-2">
            <input
              type="text"
              className="form-control my-2"
              placeholder="Ingresar Nombre"
              required
              value={form.nombre}
              onChange={(evt) => {
                setForm((state) => ({ ...state, nombre: evt.target.value }));
              }}
            />
            <input
              type="text"
              className="form-control my-2"
              placeholder="Ingresar Precio"
              required
              value={form.precio}
              onChange={(evt) => {
                setForm((state) => ({ ...state, precio: evt.target.value }));
              }}
            />
            <input
              type="text"
              className="form-control my-2"
              placeholder="Ingresar Imagen"
              required
              value={form.imagenes}
              onChange={(evt) => {
                setForm((state) => ({ ...state, imagenes: evt.target.value }));
              }}
            />
            <textarea
              name=""
              id=""
              rows="2"
              className="form-control"
              placeholder="Ingresar descripcion"
              required
              value={form.description}
              onChange={(evt) => {
                setForm((state) => ({
                  ...state,
                  description: evt.target.value,
                }));
              }}
            ></textarea>
          </div>
          <div className="flex justify-center">
            <button className="btn btn-dark">CREAR</button>
          </div>
        </form>
      </div>
      <div className="col-12">
        <h4> Lista de productos</h4>
        {
          <ul className="list-group">
            {productos.map((item) => (
              <li
                className="list-group-item d-flex justify-content-between"
                key={item.id}
              >
                <span className="lead">{item.pk} </span>
                <span className="lead"> {item.nombre} </span>
                <span className="lead"> {item.precio} </span>

                <div>
                  <button
                    className="btn btn-warning btn-sm"
                    onClick={() => redireccionarAEditar(item.pk)}
                  >
                    Editar
                  </button>
                  <button
                    className="btn btn-danger btn-sm  mx-2"
                    onClick={() => deleteProducto(item.pk)}
                  >
                    Eliminar
                  </button>
                </div>
              </li>
            ))}
          </ul>
        }
      </div>
    </div>
  );
}
