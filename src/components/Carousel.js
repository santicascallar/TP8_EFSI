import React from 'react';
import slider from "../imgs/slider.png";

const Carousel = () => {
    return(
        <div>
            <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="3"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={slider} className="d-block w-100" alt="..."/>
            <div className="carousel-caption d-none d-md-block">
               <h5>ELIJA SANITARIOS CAMPANA PARA SU HOGAR</h5>
                        <p>Lo que Ud. necesita</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={slider} className="d-block w-100" alt="..."/>
            <div className="carousel-caption d-none d-md-block">
              <h5>ELIJA SANITARIOS CAMPANA PARA SU HOGAR</h5>
                        <p>Lo que Ud. necesita</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={slider} className="d-block w-100" alt="..."/>
            <div className="carousel-caption d-none d-md-block">
       <h5>ELIJA SANITARIOS CAMPANA PARA SU HOGAR</h5>
                        <p>Lo que Ud. necesita</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={slider} className="d-block w-100" alt="..."/>
            <div className="carousel-caption d-none d-md-block">
             <h5>ELIJA SANITARIOS CAMPANA PARA SU HOGAR</h5>
                        <p>Lo que Ud. necesita</p>
            </div>
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
        </div>
    );
}

export default Carousel;