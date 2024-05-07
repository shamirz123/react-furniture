import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import '../main.css';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import Sociallinks from '../SocialLinks/Sociallinks';


function Chairs() {

  const [loading, setLoading] = useState(false);

  const chairs = [
    {
      image: "/assets/img/chair-1.webp",
      price: "$199",
      para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fringilla, urna vel consectetur condimentum, ligula mi mattis leo, eget aliquet eros tortor et purus. Mauris dignissim quam at augue bibendum euismod."
    },
    {
      image: "/assets/img/chair-2.webp",
      price: "$149",
      para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fringilla, urna vel consectetur condimentum, ligula mi mattis leo, eget aliquet eros tortor et purus. Mauris dignissim quam at augue bibendum euismod."
    },
    {
      image: "/assets/img/chair-3.webp",
      price: "$179",
      para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fringilla, urna vel consectetur condimentum, ligula mi mattis leo, eget aliquet eros tortor et purus. Mauris dignissim quam at augue bibendum euismod."
    },
    {
      image: "/assets/img/chair-4.webp",
      price: "$249",
      para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fringilla, urna vel consectetur condimentum, ligula mi mattis leo, eget aliquet eros tortor et purus. Mauris dignissim quam at augue bibendum euismod."
    },
    {
      image: "/assets/img/chair-5.webp",
      price: "$159",
      para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fringilla, urna vel consectetur condimentum, ligula mi mattis leo, eget aliquet eros tortor et purus. Mauris dignissim quam at augue bibendum euismod."
    }
  ];

  // Carousel responsive configuration
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <>
    <div className='chairs-wrappers'>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-12 col-sm-12">
            <div className='left-bar'>
              {loading ? (
                <>
                  <div className="umrah-visa-search-img mb-lg-4 mb-md-4 mb-4 p-2">
                    <div
                      id="custCarousel"
                      className="carousel slide p-3"
                      data-ride="carousel"
                      align="center"
                    >
                      <div className="carousel-inner cus-carousel-inner">
                        {/* Static placeholders for image spinner */}
                        <div className="carousel-item active">
                          <div className="image-spinner-placeholder"></div>
                        </div>
                      </div>
                      <a
                        className="tour-detail-arrows carousel-control-prev"
                        href="#custCarousel"
                        data-slide="prev"
                      >
                        <span className="carousel-control-prev-icon"></span>
                      </a>
                      <a
                        className="tour-detail-arrows carousel-control-next"
                        href="#custCarousel"
                        data-slide="next"
                      >
                        <span className="carousel-control-next-icon"></span>
                      </a>
                    </div>
                    {/* Static placeholders for small image loaders */}
                    <div className="mt-lg-3 mt-md-3 d-none d-lg-block d-md-block">
                      <div style={{ display: "flex", padding: "0px 20px" }}>
                        <div className="w-100" style={{ display: "flex", justifyContent: "center" }}>
                          <div style={{ width: "20%", textAlign: "center" }} className="small-image-loader-placeholder"></div>
                          <div style={{ width: "20%", textAlign: "center" }} className="small-image-loader-placeholder"></div>
                          <div style={{ width: "20%", textAlign: "center" }} className="small-image-loader-placeholder"></div>
                          <div style={{ width: "20%", textAlign: "center" }} className="small-image-loader-placeholder"></div>
                          <div style={{ width: "20%", textAlign: "center" }} className="small-image-loader-placeholder"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Static placeholders for shimmer effect */}
                  <h1 className="shimmer"></h1>
                  <p className="shimmer"></p>
                  <p className="shimmer"></p>
                  <p className="shimmer"></p>
                  <h1 className="shimmer"></h1>
                  <p className="shimmer"></p>
                  <p className="shimmer"></p>
                  <p className="shimmer"></p>
                </>
              ) : (
                <>
                  <div className="umrah-visa-search-img mb-lg-4 mb-md-4 mb-4 p-2">
                    <div
                      id="custCarousel"
                      className="carousel slide p-3"
                      data-ride="carousel"
                      align="center"
                    >
                      <div className="carousel-inner cus-carousel-inner">
                        {/* Static images */}
                        <div className="carousel-item active"
                         
                        >
                          <div className='d-flex justify-content-center align-item-center' style={{
                            width:'600px',
                            height:"600px",
                          }}>
                              <img src="/assets/img/chair-detail-5.jpg" style={{
                                width:"100%",
                                height:"auto"
                              }} />
                          </div>

                        </div>
                        <div className="carousel-item">
                        <div className='d-flex justify-content-center align-item-center' style={{
                            width:'600px',
                            height:"600px",
                          }}>
                              <img src="/assets/img/chair-detail-2.webp" style={{
                                width:"100%",
                                height:"auto"
                              }} />
                          </div>

                        </div>
                        <div className="carousel-item">
                        <div className='d-flex justify-content-center align-item-center' style={{
                            width:'600px',
                            height:"600px",
                          }}>
                              <img src="/assets/img/chair-image-2.webp" style={{
                                width:"100%",
                                height:"auto"
                              }} />
                          </div>
                        </div>
                        <div className="carousel-item" >
                        <div className='d-flex justify-content-center align-item-center' style={{
                            width:'600px',
                            height:"600px",
                          }}>
                              <img src="/assets/img/chair-8.webp" style={{
                                width:"100%",
                                height:"auto"
                              }} />
                          </div>

                        </div>
                      </div>
                      <a
                        className="tour-detail-arrows carousel-control-prev"
                        href="#custCarousel"
                        data-slide="prev"
                      >
                        <span className="carousel-control-prev-icon"></span>
                      </a>
                      <a
                        className="tour-detail-arrows carousel-control-next"
                        href="#custCarousel"
                        data-slide="next"
                      >
                        <span className="carousel-control-next-icon"></span>
                      </a>
                    </div>
                    {/* Static small image loaders */}
                    <div className="mt-lg-3 mt-md-3 d-none d-lg-block d-md-block">
                      <div style={{ display: "flex", padding: "0px 20px" }}>
                        <div className="list-inline-item active carousel-immg">
                          <a id="carousel-selector-0" data-slide-to="0" data-target="#custCarousel">
                            <div
                              className='small-images'
                              style={{
                                background: "url(/assets/img/chair-detail-5.jpg)",
                              }}
                            ></div>
                          </a>
                        </div>
                        <div className="list-inline-item active carousel-immg">
                          <a id="carousel-selector-1" data-slide-to="1" data-target="#custCarousel">
                            <div
                              className='small-images'
                              style={{
                                background: "url(/assets/img/chair-detail-2.webp)",
                              }}
                            ></div>
                          </a>
                        </div>
                        <div className="list-inline-item active carousel-immg">
                          <a id="carousel-selector-2" data-slide-to="2" data-target="#custCarousel">
                            <div
                              className='small-images'
                              style={{
                                background: "url(/assets/img/chair-image-2.webp)",
                              }}
                            ></div>
                          </a>
                        </div>
                        <div className="list-inline-item active carousel-immg">
                          <a id="carousel-selector-4" data-slide-to="3" data-target="#custCarousel">
                            <div
                              className='small-images'
                              style={{
                                background: "url(/assets/img/chair-8.webp)",
                              }}
                            ></div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                
                </>
              )}





            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12"></div>
        </div>
      </div>
    </div>
    <Footer/>
    <Sociallinks/>
    </>

  );
}

export default Chairs;
