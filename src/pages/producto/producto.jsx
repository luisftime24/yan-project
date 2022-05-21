import React from 'react';

import { useParams } from 'react-router-dom';

export function PageProducto() {

    useParams()
    console.log(useParams())

    const {id} = useParams()

    const [producto, setProducto] = React.useState([])

    React.useEffect (() => {
        ontenerDatos()
    },[])

    console.log(id)

    const ontenerDatos = async () => {
      const data = await fetch(`https://api-tienda-django.herokuapp.com/productos/${id}/`)
      
      const productos = await data.json()

      setProducto(productos)

      

    }

    return (
      <main id="main">
        <section className="section">
          <div className="site-section pb-0 mb-2 mt-5">
            <div className="container">
              <div className="row align-items-stretch">
                <div className="col-md-8" data-aos="fade-up">
                  <div
                    id="carouselExampleIndicators"
                    className="carousel slide"
                    data-bs-ride="carousel"
                  >
                    <div className="carousel-indicators">
                      <button
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide-to="0"
                        className="active"
                        aria-current="true"
                        aria-label="Slide 1"
                      ></button>
                      <button
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide-to="1"
                        aria-label="Slide 2"
                      ></button>
                      <button
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide-to="2"
                        aria-label="Slide 3"
                      ></button>
                    </div>
                    <div className="carousel-inner">
                      <div className="carousel-item active w-80">
                        <img
                          src={`https://res.cloudinary.com/dioymlgd1/${producto.imagen}`}
                          className="mw-100 d-inline-block"
                          alt="..."
                        />
                      </div>
                      <div className="carousel-item">
                        <img
                          src="https://www.profesionalreview.com/wp-content/uploads/2019/05/Corsair-Hydro-X-06.jpg"
                          className="mw-100 d-inline-block"
                          alt="..."
                        />
                      </div>
                      <div className="carousel-item">
                        <img
                          src="https://www.profesionalreview.com/wp-content/uploads/2019/05/Corsair-Hydro-X-07.jpg"
                          className="mw-100 d-inline-block"
                          alt="..."
                        />
                      </div>
                    </div>
                    <button
                      className="carousel-control-prev"
                      type="button"
                      data-bs-target="#carouselExampleIndicators"
                      data-bs-slide="prev"
                    >
                      <span
                        className="carousel-control-prev-icon"
                        aria-hidden="true"
                      ></span>
                      <span className="visually-hidden">Previous</span>
                    </button>
                    <button
                      className="carousel-control-next"
                      type="button"
                      data-bs-target="#carouselExampleIndicators"
                      data-bs-slide="next"
                    >
                      <span
                        className="carousel-control-next-icon"
                        aria-hidden="true"
                      ></span>
                      <span className="visually-hidden">Next</span>
                    </button>
                  </div>

                  <div ClassName="container">
                    <div className="card mt-3">
                      <div className="card-body">
                        <h4 className="card-title">Descripción</h4>
                        <p className="fs-6">
                        {producto.description}
                        </p>
                        <br />
                        
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="col-md-4 ml-auto"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  

                  <div className="card">
                    
                    <div className="card-body">
                      <h3 className="card-title">{producto.nombre} </h3>
                      
                      <p className="card-text">
                        With supporting text below as a natural lead-in to
                        additional content.
                      </p>
                      <div className ="d-flex">
                      <h3> S/ {producto.precio} </h3>
                      <p className="bg-success p-2 text-white mx-2 rounded"> <strong> 50 % dto </strong> </p>

                      

                      </div>

                      
                      

                      <div className="d-grid gap-2">
                        <button className="btn btn-primary btn-lg mb-1" type="button">Compralo ahora</button>
                        <button className="btn btn-outline-secondary btn-lg" type="button"> <i class="bi bi-cart"></i> Agregar a mi carrito</button>
                        
                      </div>

                      <div className ="d-flex mt-4 bg-light">
                        <img src="https://static.crehana.com/static/img/checkout/garantia.png" alt="" />
                        <p className="mx-2">Te devolvemos tu compra al 100% si no estás contento con tu producto.</p>

                      </div>
                    </div>



                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    );
  }
  