import React, { useEffect } from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from 'react-router-dom';
import '../main.css'

function Services() {

    useEffect(() => {
        window.scrollTo(0, 0);
      });
    // Define an array of objects containing image URLs, titles, descriptions, and links
    const images = [
        {
            id: 1,
            url: '/assets/img/slider-chair.webp',
            title: 'Chair',
            desc: 'Sleek and comfortable chair for modern living spaces.',
            link: '/chairs-detail' // Add a link for the chair
        },
        {
            id: 2,
            url: '/assets/img/slider-sofa.webp',
            title: 'Sofa',
            desc: 'Luxurious sofa for stylish relaxation',
            link: '/sofa-detail' // Add a link for the sofa
        },
        {
            id: 3,
            url: '/assets/img/slider-bed.webp',
            title: 'Bed',
            desc: 'Elegant bed frame for a cozy bedroom ambiance.',
            link: '/beds-detail' // Add a link for the bed
        },
    ];

    return (
        <>
            <div className='container'>
                <div className="">
                    <Carousel
                        additionalTransfrom={0}
                        arrows
                        autoPlaySpeed={3000}
                        centerMode={false}
                        className=""
                        containerClass="container-with-dots"
                        dotListClass=""
                        draggable
                        focusOnSelect={false}
                        infinite
                        itemClass=""
                        keyBoardControl
                        minimumTouchDrag={80}
                        pauseOnHover
                        renderArrowsWhenDisabled={false}
                        renderButtonGroupOutside={false}
                        renderDotsOutside={false}
                        responsive={{
                            desktop: {
                                breakpoint: {
                                    max: 3000,
                                    min: 1024,
                                },
                                items: 3,
                                partialVisibilityGutter: 40,
                            },
                            mobile: {
                                breakpoint: {
                                    max: 464,
                                    min: 0,
                                },
                                items: 1,
                                partialVisibilityGutter: 30,
                            },
                            tablet: {
                                breakpoint: {
                                    max: 1024,
                                    min: 464,
                                },
                                items: 2,
                                partialVisibilityGutter: 30,
                            },
                        }}
                        rewind={false}
                        rewindWithAnimation={false}
                        rtl={false}
                        shouldResetAutoplay
                        showDots={false}
                        sliderClass=""
                        slidesToSlide={1}
                        swipeable
                    >
                        {/* Use map() to render each image */}
                        {images.map((image) => (
                            <div key={image.id}>
                                <div className="work1 ml-2 mr-2">
                                    <div className="image-box">
                                        <div className="name-desc hover-1 image-box rounded">
                                            <div className="img align-items-center justify-content-center rounded">
                                                <img className="" src={image.url} alt={image.title} />
                                                <a href="#" className="icon d-flex align-items-center justify-content-center">
                                                    <span className="ion-ios-search"></span>
                                                </a>
                                            </div>
                                            <div className="hover-1-content p-2">
                                                <div className="sub-txt-desc float-left pl-2">
                                                    <h4>{image.title}</h4>
                                                </div>
                                                <br />
                                                <div className="sub-txt-desc float-left pl-2">
                                                   <p className='mb-0'> {image.desc} </p>
                                                </div>
                                                <br />
                                                <p className="hover-1-description float-left mb-0">
                                                    <Link to={image.link}>
                                                        <strong>Learn More</strong>{" "}
                                                        <i className="fa fa-angle-double-right"></i>{" "}
                                                    </Link>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Carousel>
                </div>
            </div>
        </>
    )
}

export default Services;
