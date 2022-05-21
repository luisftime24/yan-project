import { createContext, useState, useEffect } from "react";

import { BASE_URI, token_key } from "../config";

export const AppContext = createContext();

const AppProvider = (props) => {
  const initialUser = {
    correo: "",
    isLoggedIn: false,
    access: "",
    refresh: "",
  };
  const initialProduct = {
    nombre: "",
    short_description: "",
    imagen: "",
    precio: "",
    description: "",
    categoria: "",
    disponible: "",
  };
  const [user, setUser] = useState(initialUser);
  const [state, setState] = useState({
    error: null,
    loading: false,
  });
  const [loginData, setLoginData] = useState({
    correo: "",
    password: "",
  });
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState(initialProduct);

  useEffect(() => {
    isLogged();
  }, []);

  const isLogged = () => {
    const token = sessionStorage.getItem(token_key);
    if (token) {
      const user = JSON.parse(token);
      setUser(user);
    } else {
      setUser(initialUser);
    }
  };

  const Login = async () => {
    setState({ ...state, loading: true });
    try {
      const response = await fetch(`${BASE_URI}/auth/inicio-sesion/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginData),
      });
      const data = await response.json();
      if (data.error) {
        setState({ ...state, error: data.error });
      } else {
        const user = {
          isLoggedIn: true,
          correo: loginData.correo,
          access: data.access,
          refresh: data.refresh,
        };

        setUser(user);
        sessionStorage.setItem(token_key, JSON.stringify(user));
      }
    } catch (error) {
      setState({ ...state, error: error.message });
    }
    setState({ ...state, loading: false });
  };

  const Register = async () => {
    setState({ ...state, loading: true });
    try {
      const response = await fetch(`${BASE_URI}/auth/registro/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginData),
      });
      const data = await response.json();
      if (data.error) {
        setState({ ...state, error: data.error });
      } else {
        const user = {
          isLoggedIn: true,
          correo: loginData.correo,
          access: data.access,
          refresh: data.refresh,
        };

        setUser(user);
        sessionStorage.setItem(token_key, JSON.stringify(user));
      }
    } catch (error) {
      setState({ ...state, error: error.message });
    }
    setState({ ...state, loading: false });
  };

  const Logout = () => {
    setUser(initialUser);
    if (sessionStorage.getItem(token_key)) {
      sessionStorage.removeItem(token_key);
    }
    setUser(initialUser);
  };

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    try {
      const response = await fetch(`${BASE_URI}/productos/`);
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AppContext.Provider
      value={{
        user,
        loginData,
        setLoginData,
        state,
        setState,
        Login,
        Logout,
        Register,
        products,
        setProducts,
        product,
        setProduct,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppProvider;
