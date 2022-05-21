import { useContext } from "react";
import { BASE_URI, token_key } from "../config";
import { AppContext } from "../context/AppProvider";

export const useProduct = () => {
  const { product, products, setProducts, setProduct } = useContext(AppContext);

  const addProduct = async () => {
    try {
      const response = await fetch(`${BASE_URI}/productos/create/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${sessionStorage.getItem(token_key)}`,
        },
        body: JSON.stringify(product),
      });
      const data = await response.json();
      setProducts([...products, data]);
    } catch (error) {
      console.log(error);
    }
  };

  const editProduct = async (id) => {
    const productoToUpdate = products.find((product) => product.id === id);

    if (productoToUpdate) {
      setProduct(productoToUpdate);
    } else {
      console.log("No se encontro el producto");
    }
  };

  const updateProduct = async (id) => {
    try {
      const response = await fetch(`${BASE_URI}/productos/update/${id}/`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${sessionStorage.getItem(token_key)}`,
        },
        body: JSON.stringify(product),
      });
      const data = await response.json();
      setProducts([...products, data]);
      setProduct({
        nombre: "",
        short_description: "",
        imagen: "",
        precio: "",
        description: "",
        categoria: "",
        disponible: "",
      });
    } catch (error) {
      console.log(error);
    }
  };

  const deleteProduct = async (id) => {
    try {
      await fetch(`${BASE_URI}/productos/delete/${id}/`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${sessionStorage.getItem(token_key)}`,
        },
      });
      setProducts(products.filter((product) => product.id !== id));
      console.log("Producto eliminado");
    } catch (error) {
      console.log(error);
    }
  };

  return {
    product,
    setProduct,
    products,
    addProduct,
    updateProduct,
    editProduct,
    deleteProduct,
  };
};
