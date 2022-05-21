import React from 'react';

import "./card.css";

function Card() {
  return (
    <div className="card" >
    <img src="https://i0.wp.com/hipertextual.com/wp-content/uploads/2021/11/macbook-pro-13-2020.jpeg?fit=2560%2C1707&ssl=1" class="card-img-top" alt="..."/>
    <div className="card-body">
      <h6 className="card-title mb-2">Xiaomi MI 11 Lite 128GB/6GB VERSION GLOBAL </h6>
      <h5 className="miclase">S/45.99</h5>
      <div className="d-flex justify-content-start">

      
        <button className="btn btn-primary btn-lg mx-3 " type="button"> Comprar ahora </button>

        </div>
    </div>
  </div>

  );
}

export default Card;
  