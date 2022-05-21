import "antd/dist/antd.css";
import axios from "axios";

import "./crud.css";

import React, { useState } from "react";

import { Typography, Space } from "antd";

import { Button, Select, Row, Col, Input, Modal } from "antd";

import { Table } from "antd";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

export function PageCrud() {
  const { Option } = Select;

  const [proyecto, setProyecto] = React.useState([]);

  const [instancia, setInstancia] = React.useState({
    id: "",
    nombre: "",
    description: "",
    ubicacion: "",
    estado: "",
  });

  const [isModalVisible, setIsModalVisible] = useState(false);

  const [isModalEditarVisible, setIsModalEditarVisible] = useState(false);

  const [isModalEliminarVisible, setIsModalEliminarVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const showModalEditar = () => {
    setIsModalEditarVisible(true);
  };

  const handleOkEditar = () => {
    setIsModalEditarVisible(false);
  };

  const handleCancelEditar = () => {
    setIsModalEditarVisible(false);
  };

  const showModalEliminar = () => {
    setIsModalEliminarVisible(true);
  };

  const handleOkEliminar = () => {
    setIsModalEliminarVisible(false);
  };

  const handleCancelEliminar = () => {
    setIsModalEliminarVisible(false);
  };

  const { Text } = Typography;
  const { Search } = Input;

  const columns = [
    {
      title: "Nombre",
      dataIndex: "nombre",
      key: "nombre",
    },
    {
      title: "Id",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Descripción",
      dataIndex: "description",
      key: "description",
    },

    {
      title: "Ubicación",
      dataIndex: "ubicacion",
      key: "ubicacion",
    },

    {
      title: "Estado",
      key: "estado",
      dataIndex: "estado",
      render: (estado) => (
        <>
          {estado === "true" ? (
            <Text type="success">En proceso</Text>
          ) : (
            <Text type="danger">Finalizado</Text>
          )}
        </>
      ),
    },
    {
      title: "Acción",
      key: "action",
      render: (fila) => (
        <Space size="middle">
          <Button
            onClick={() => seleccionarProyecto(fila, "Editar")}
            size="middle"
          ></Button>

          <div
            onClick={() => seleccionarProyecto(fila, "Editar")}
            size="middle"
          >
            <FontAwesomeIcon
              icon={faEdit}
              size="lg"
              color="Dodgerblue"
              cursor="pointer"
            />
          </div>

          <div
            onClick={() => seleccionarProyecto(fila, "Eliminar")}
            size="middle"
          >
            <FontAwesomeIcon
              icon={faTrash}
              size="lg"
              color="tomato"
              cursor="pointer"
            />
          </div>

          <Button
            onClick={() => seleccionarProyecto(fila, "Eliminar")}
            size="middle"
          ></Button>
        </Space>
      ),
    },
  ];

  const seleccionarProyecto = (instancia, caso) => {
    setInstancia(instancia);
    caso === "Editar" ? showModalEditar() : showModalEliminar();
  };

  const handleCambio = (e) => {
    const { name, value } = e.target;
    setInstancia({ ...instancia, [name]: value });
    console.log(instancia);
  };

  const handleInputChange = (event) => {
    setInstancia({
      ...instancia,
      [event.target.name]: event.target.value,
    });
  };

  const obtenerDato = async () => {
    try {
      const response = await axios.get(
        "https://61f091c4732d93001778eac4.mockapi.io/computer/proyecto"
      );

      const arrayData = response.data;

      setProyecto(arrayData);
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    obtenerDato();
  }, []);

  const enviarDatos = async (e) => {
    delete instancia.id;
    e.preventDefault();

    axios
      .post(
        "https://61f091c4732d93001778eac4.mockapi.io/computer/proyecto",
        instancia
      )
      .then(function (response) {
        obtenerDato();
        handleCancel();

        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

    setInstancia({
      id: "",
      nombre: "",
      description: "",
      ubicacion: "",
      estado: "",
    });
  };

  const data = proyecto;

  const actualizarProducto = () => {
    axios
      .put(
        `https://61f091c4732d93001778eac4.mockapi.io/computer/proyecto/${instancia.id}`,
        instancia
      )
      .then(function (response) {
        console.log(response);
        var dataAuxiliar = data;
        dataAuxiliar.map((elemento) => {
          if (elemento.id === instancia.id) {
            elemento.nombre = instancia.nombre;
            elemento.description = instancia.description;
            elemento.ubicacion = instancia.ubicacion;
            elemento.estado = instancia.estado;
          }
        });
        setInstancia(dataAuxiliar);

        obtenerDato();
        handleCancelEditar();
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const eliminarProyecto = () => {
    axios
      .delete(
        `https://61f091c4732d93001778eac4.mockapi.io/computer/proyecto/${instancia.id}`
      )
      .then(function (response) {
        console.log(response);
        console.log("eliminado papu");
        obtenerDato();
        handleCancelEliminar();
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div>
      <h3>Lista de proyectos</h3>
      <hr />

      <br />
      <br />

      <Row>
        <Col span={24}>
          <div class="d-flex justify-content-end">
            <Space size="middle">
              <Select defaultValue="Yan" size="large" style={{ width: 120 }}>
                <Option value="Yan">Proyecto</Option>
              </Select>

              <Search
                placeholder=""
                allowClear
                enterButton="Search"
                size="large"
              />

              <Button
                type="success"
                size="large"
                className="botonverde"
                onClick={showModal}
              >
                AÑADIR PROYECTO
              </Button>
            </Space>
          </div>

          <br />
          <br />

          <Table columns={columns} dataSource={data} />
        </Col>
      </Row>
      <br />
      <br />
      <Row>
        <Col sm={24} lg={12}>
          <br />
          <br />

          <Modal
            title="Nuevo proyecto"
            visible={isModalVisible}
            onOk={handleOk}
            destroyOnClose={true}
            onCancel={handleCancel}
            centered
            footer={[
              <Button type="success" size="large" onClick={handleCancel}>
                Cancelar
              </Button>,

              <Button type="primary" size="large" onClick={enviarDatos}>
                Guardar
              </Button>,
            ]}
          >
            <form>
              <div class="form-group">
                <label>Nombre del proyecto</label>
                <input
                  type="text"
                  class="form-control mt-2"
                  name="nombre"
                  onChange={handleCambio}
                />
              </div>

              <div class="form-group mt-3">
                <label>ID del proyecto</label>
                <input
                  type="text"
                  class="form-control mt-2"
                  name="id"
                  onChange={handleCambio}
                />
              </div>

              <div class="form-group mt-3">
                <label for="exampleFormControlTextarea1">Descripción</label>
                <textarea
                  class="form-control mt-2"
                  rows="3"
                  name="description"
                  onChange={handleCambio}
                ></textarea>
              </div>

              <div class="form-group mt-3">
                <label for="exampleFormControlInput1">Ubicación</label>
                <input
                  type="text"
                  class="form-control mt-2"
                  name="ubicacion"
                  onChange={handleCambio}
                />
              </div>

              <div class="form-group mt-3">
                <label for="exampleFormControlSelect1">Estado </label>

                <select
                  class="form-control mt-2"
                  name="estado"
                  defaultValue="true"
                  onChange={handleCambio}
                >
                  <option value="false">Activo</option>
                  <option value="true">No activo</option>
                </select>
              </div>
            </form>
          </Modal>

          <Modal
            title="Editar proyecto"
            visible={isModalEditarVisible}
            onOk={handleOkEditar}
            onCancel={handleCancelEditar}
            centered
            footer={[
              <Button type="success" size="large" onClick={handleCancelEditar}>
                Cancelar
              </Button>,

              <Button type="primary" size="large" onClick={actualizarProducto}>
                Guardar
              </Button>,
            ]}
          >
            <form>
              <div class="form-group">
                <label>Nombre del proyecto</label>
                <input
                  type="text"
                  class="form-control mt-2"
                  name="nombre"
                  value={instancia.nombre}
                  onChange={handleInputChange}
                />
              </div>

              <div class="form-group mt-3">
                <label>ID del proyecto</label>
                <input
                  type="text"
                  class="form-control mt-2"
                  name="id"
                  value={instancia.id}
                  onChange={handleInputChange}
                />
              </div>

              <div class="form-group mt-3">
                <label for="exampleFormControlTextarea1">Descripción</label>
                <textarea
                  class="form-control mt-2"
                  rows="3"
                  name="description"
                  value={instancia.description}
                  onChange={handleInputChange}
                ></textarea>
              </div>

              <div class="form-group mt-3">
                <label for="exampleFormControlInput1">Ubicación</label>
                <input
                  type="text"
                  class="form-control mt-2"
                  name="ubication"
                  value={instancia.ubicacion}
                  onChange={handleInputChange}
                />
              </div>

              <div class="form-group mt-3">
                <label for="exampleFormControlSelect1">Estado </label>

                <select
                  class="form-control mt-2"
                  name="estado"
                  value={instancia.estado}
                  onChange={handleInputChange}
                >
                  <option value={true}>Activo</option>
                  <option value={false}>No activo</option>
                </select>
              </div>
            </form>
          </Modal>

          <Modal
            title="Eliminar proyecto"
            visible={isModalEliminarVisible}
            onOk={handleOkEliminar}
            onCancel={handleCancelEliminar}
            centered
            footer={[
              <Button
                type="success"
                size="large"
                onClick={handleCancelEliminar}
              >
                No
              </Button>,

              <Button type="primary" size="large" onClick={eliminarProyecto}>
                Si
              </Button>,
            ]}
          >
            Estas seguro que deseas eliminar el proyecto{" "}
            <b>{instancia && instancia.nombre}</b> ?
          </Modal>
        </Col>
      </Row>
    </div>
  );
}
