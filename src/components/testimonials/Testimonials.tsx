import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./styles.css"

export default class MultipleItems extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      variableWidth: true,
      initialSlide: 0,
      slidesToShow: 3,
      slidesToScroll: 2,
    };
    return (
      <div>
        <h2>What Clients Say</h2>
        <Slider {...settings}>
          <div>
            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididu
              nt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."</p>
              <div className="wrapper">
                  <div>  
                    <img src="https://res.cloudinary.com/remiljw/image/upload/r_30/v1558533081/bitmoji-20190212022650.png" alt="random" />
                  </div>
                  <div className="text-wrap">
                    <p>John Doe<br></br>
                    CEO John Doe Inc</p>
                  </div>
              </div>
          </div>
          <div>
            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididu
              nt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."</p>
              <div className="wrapper">
                  <div>  
                    <img src="https://res.cloudinary.com/remiljw/image/upload/r_30/v1558533081/bitmoji-20190212022650.png" alt="random" />
                  </div>
                  <div className="text-wrap">
                    <p>John Doe<br></br>
                     CEO John Doe Inc</p>
                  </div>
              </div>
          </div>
          <div>
            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididu
              nt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."</p>
              <div className="wrapper">
                  <div>  
                    <img src="https://res.cloudinary.com/remiljw/image/upload/r_30/v1558533081/bitmoji-20190212022650.png" alt="random" />
                  </div>
                  <div className="text-wrap">
                    <p>John Doe<br></br>
                    CEO John Doe Inc</p>
                  </div>
              </div>
          </div>
          <div>
            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididu
              nt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."</p>
              <div className="wrapper">
                  <div>  
                    <img src="https://res.cloudinary.com/remiljw/image/upload/r_30/v1558533081/bitmoji-20190212022650.png" alt="random" />
                  </div>
                  <div className="text-wrap">
                    <p>John Doe<br></br>
                    CEO John Doe Inc</p>
                  </div>
              </div>
          </div>
          <div>
            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididu
              nt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."</p>
              <div className="wrapper">
                  <div>  
                    <img src="https://res.cloudinary.com/remiljw/image/upload/r_30/v1558533081/bitmoji-20190212022650.png" alt="random" />
                  </div>
                  <div className="text-wrap">
                    <p>John Doe<br></br>
                    CEO John Doe Inc</p>
                  </div>
              </div>
          </div>
          <div>
            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididu
              nt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."</p>
              <div className="wrapper">
                  <div>  
                    <img src="https://res.cloudinary.com/remiljw/image/upload/r_30/v1558533081/bitmoji-20190212022650.png" alt="random" />
                  </div>
                  <div className="text-wrap">
                    <p>John Doe<br></br>
                    CEO John Doe Inc</p>
                  </div>
              </div>
          </div>
        </Slider>
      </div>
    );
  }
}