import { useContext } from "react";
import { AppContext } from "../../../context/AppProvider";
import { useProduct } from "../../../hooks/useProduct";

const AdminForm = () => {
  const { user } = useContext(AppContext);
  const { product, setProduct, products, addProduct, updateProduct, deleteProduct, editProduct } = useProduct();
  const {
    nombre,
    short_description,
    imagen,
    precio,
    description,
    categoria,
    disponible,
  } = product;

  const handleInputChange = (event) => {
    setProduct({
      ...product,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div className="row">
      {(user.correo !== "") ? (<h3> Hola de nuevo: {user.correo} </h3>) : (<h1>Hola</h1>)}

      <div className="col-8 mb-5">
        <h4> Formulario </h4>
        <form onSubmit={addProduct}>
          <input
            type="text"
            className="form-control"
            Placeholder="Ingresa producto"
            name="nombre"
            value={nombre}
            onChange={handleInputChange}
          />

          <input
            type="text"
            className="form-control mt-3"
            Placeholder="Ingresa precio"
            value={precio}
            name="precio"
            onChange={handleInputChange}
          />

          <input
            type="text"
            className="form-control mt-3"
            Placeholder="Ingresa url de imagen"
            value={imagen}
            name="imagen"
            onChange={handleInputChange}
          />

          <input
            type="text"
            className="form-control mt-3"
            Placeholder="Ingresa descripcion"
            value={description}
            name="description"
            onChange={handleInputChange}
          />

          <input
            type="text"
            className="form-control mt-3"
            Placeholder="Ingresa short_descripcion"
            value={short_description}
            name="short_description"
            onChange={handleInputChange}
          />

          <input
            type="text"
            className="form-control mt-3"
            Placeholder="Ingresa categoria"
            value={categoria}
            name="categoria"
            onChange={handleInputChange}
          />

          <input
            type="text"
            className="form-control mt-3"
            Placeholder="Ingresa disponibilidad"
            value={disponible}
            name="disponible"
            onChange={handleInputChange}
          />

          <button className="btn btn-dark mt-3" type="submit">
            Agregar producto
          </button>
        </form>

        <button
          className="btn btn-warning mx-3 mt-3"
          onClick={editProduct}
        >
          Editar producto
        </button>
      </div>

      <div className="col-12">
        <h4> Lista de productos</h4>
        <ul className="list-group">
          {products.map((item) => (
            <li
              className="list-group-item d-flex justify-content-between"
              key={item.id}
            >
              <span className="lead">{item.nombre}</span>
              <div>
                <button
                  className="btn btn-danger btn-sm  mx-2"
                  onClick={() => deleteProduct(item.id)}
                >
                  Eliminar
                </button>
                <button
                  className="btn btn-warning btn-sm "
                  onClick={() => updateProduct(item.id)}
                >
                  Editar
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AdminForm;
