import React from "react";
import { firebase } from "./firebase";

import { Link } from "react-router-dom";

const Tienda = () => {
  const [productos, setProductos] = React.useState([]);

  React.useEffect(() => {
    ontenerDatos();
  }, []); 

  const ontenerDatos = async () => {
    try {
      const db = firebase.firestore();
      const data = await db.collection("productos").get();

      const arrayData = data.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      console.log(arrayData);
      setProductos(arrayData);
    } catch (err) {
      console.error(err);
    }
  };

  return productos.map((item) => (
    <div className="col-12 col-sm-12 col-md-3">
      <div className="card" key={item.id}>
        <img src={item.imagen} className="card-img-top" alt="..." />
        <div className="card-body">
          <h6 className="card-title mb-2">
            <Link to={`/producto/1 `}>{item.nombre}</Link>
          </h6>
          <h5 className="miclase">S/{item.precio}</h5>
          <div className="d-flex justify-content-start">
            <button className="btn btn-outline-primary btn-lg" type="button">
              <i className="bi bi-cart"></i>
            </button>
            <button className="btn btn-primary btn-lg mx-3 " type="button">
              Comprar ahora
            </button>
          </div>
        </div>
      </div>
    </div>
  ));
};

export default Tienda;
