import "./landing.css";

import Card from "../../components/card/card";
import Cards from "../../components/cards/cards";

export function PageLanding() {
    return <div className="container mt-3">

      
      <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active " data-bs-interval="5000">
          <img src="https://dynamic-yield.linio.com//api/scripts/8767678/images/20f45c19036fe__backtoschool_bbe1_onsite.jpg" class="d-block w-100" alt="..."/>
        </div>
        <div className="carousel-item" data-bs-interval="5000">
          <img src="https://dynamic-yield.linio.com//api/scripts/8767678/images/15ccb460ce237__backtoschool_bbe2.jpg" class="d-block w-100" alt="..."/>
        </div>
        <div className="carousel-item" data-bs-interval="5000">
          <img src="https://dynamic-yield.linio.com//api/scripts/8767678/images/19f98f129bfcd__backtoschool_bbe3_onsite.jpg" class="d-block w-100" alt="..."/>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
      </div>

      <div className="row">

        <h4 className="mt-3 mb-3">Recomendaciones <strong>para ti</strong> : </h4>

      </div>

     

      <div className="row">
      <Cards/>
      </div>

    </div>


    
    ;
  }