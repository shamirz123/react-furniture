import React, { useState, useEffect } from "react";
import { TypeAnimation } from "react-type-animation";
import { MdNavigateNext } from "react-icons/md";
import resumePDF from "/assets/img/resume.pdf";
import {
  Carousel as CCarousel,
  CarouselItem as CCarouselItem,
  Image as CImage,
} from "react-bootstrap";

function Main() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setActiveIndex(selectedIndex);
  };

  const renderDots = () => {
    return (
      <ul className="carousel-dots">
        {[...Array(3)].map((_, index) => (
          <li
            key={index}
            className={index === activeIndex ? "active" : ""}
            onClick={() => handleSelect(index)}
          />
        ))}
      </ul>
    );
  };

  return (
    <>
      <div className="carousel-section">
        <div className="container">
          <div className="carousel-wrapper">
            <CCarousel
              activeIndex={activeIndex}
              onSelect={handleSelect}
              controls={false}
            >
              <CCarouselItem>
                <div className="carousel-item-content">
                  <h2 className="carousel-item-heading">THE LATEST</h2>
                  <h1>Furniture</h1>
                  <p className="carousel-item-paragraph">
                    Elevate your home with our modern furniture pieces,
                    meticulously crafted to blend elegance with functionality.
                    Experience the perfect harmony of contemporary design and
                    timeless appeal.
                  </p>
                </div>
              </CCarouselItem>
              <CCarouselItem>
                <div className="carousel-item-content">
                  <h2 className="carousel-item-heading">THE LATEST</h2>
                  <h1>Furniture</h1>

                  <p className="carousel-item-paragraph">
                    Explore our exquisite selection of handcrafted furniture,
                    meticulously designed to elevate your living spaces. Immerse
                    yourself in the perfect blend of style, comfort, and
                    functionality.
                  </p>
                </div>
              </CCarouselItem>
              <CCarouselItem>
                <div className="carousel-item-content">
                  <h2 className="carousel-item-heading">THE LATEST</h2>
                  <h1>Furniture</h1>

                  <p className="carousel-item-paragraph">
                    Embrace the warmth of rustic living with our charming
                    furniture collections. Each piece tells a story, bringing
                    nature's beauty into your home. Discover the artistry in
                    simplicity.
                  </p>
                </div>
              </CCarouselItem>
            </CCarousel>
            {renderDots()}

            {/* <div className='row'>
                            <div className="col-lg-6 col-sm-12 col-md-12">
                                <div className='mt-5 pt-5'>
                                    <h3 className='animated-text'>Hello 👋 I'm</h3>
                                    <div className='typewriter'>
                                        <h1>{text}</h1>
                                    </div>
                                    <TypeAnimation
                                        sequence={[
                                            "I am a front-end developer...",
                                            1000,
                                            'I am a Reactjs developer...',
                                            1000,
                                            'I am a front-end designer...',
                                            1000,
                                            'I am a UI/UX designer...',
                                            1000,
                                        ]}
                                        wrapper="span"
                                        speed={50}
                                        repeat={Infinity}
                                        className='Animation-text-wrapper'
                                    />

                                    <p>As a web developer, I am driven by a passion for creating innovative and user-friendly digital experiences. With a keen eye for detail and a commitment to excellence, I transform ideas into well-crafted, responsive websites that leave a lasting impression.</p>

                                    <div className="d-flex hireme-btn">
                                        <div className="p-2">
                                            <button onClick={handleScrollToContact}>Hire me</button>
                                        </div>
                                        <div className="p-2 ">
                                            <button className='resume-btn' onClick={handleDownload}>
                                                <u>Download resume</u> <i className="icon"><MdNavigateNext /></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-sm-12 col-md-6"></div>
                        </div> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
