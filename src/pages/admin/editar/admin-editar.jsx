import { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";

export function PageAdminEditar() {
  let params = useParams();
  let history = useHistory();

  const [form, setForm] = useState({
    nombre: "",
    imagenes: "",
    precio: "",
    description: "",
  });

  function getProducto() {
    axios
      .get(`https://61ef3f1cd593d20017dbb3e3.mockapi.io/producto/${params.id}`)
      .then((respuesta) => {
        console.log("respuesta", respuesta.data);
        setForm(respuesta.data);
      });
  }

  function actualizarProducto() {
    axios
      .put(
        `https://61ef3f1cd593d20017dbb3e3.mockapi.io/producto/${params.id}`,
        form
      )
      .then(() => {
        alert("SE EDITO CORRECTAMENTE");
        history.push("/admin/crear");
      })
      .catch(() => {
        alert("No se pudo actualizar, intentelo mas tarde");
      });
  }

  useEffect(() => {
    // estado inicial
    getProducto();
  }, []);

  return (
    <div className="row">
      <div className="col-8">
        <h4> Editar Producto </h4>
        <form
          onSubmit={(evt) => {
            evt.preventDefault();
            actualizarProducto();
            console.log("form", form);
          }}
        >
          <div className="col-8 mb-2">
            <input
              type="text"
              className="form-control"
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
              className="form-control my-2"
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
            <button className="btn btn-dark">ACTUALIZAR</button>
          </div>
        </form>
      </div>
    </div>
  );
}
