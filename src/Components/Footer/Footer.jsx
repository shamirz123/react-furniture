import React from 'react';
import { Link } from 'react-scroll';
import { MdOutlineMail } from "react-icons/md";
import { IoMdCall } from "react-icons/io";
import { FloatingWhatsApp } from 'react-floating-whatsapp';



function Footer() {
    const whatsappProps = {
        accountName: 'LSFurniture',
        phoneNumber: '+92 331569774',
        darkMode: false,
        avatar: '/assets/img/favicon.svg',
        notification: true,
    }
    return (
        <div>
            <div className="container">
                <div className="footer-section-wrapper">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <img src="/assets/img/logo.svg" style={{
                                width:"140px"
                            }}/>
                        </div>
                        <div className="col-lg-5 col-md-6 col-sm-12">
                            <div className="quick-link">
                                <h5>Quick Link</h5>
                                <div className=''>
                                    <ul className=''>
                                        <li>
                                            <Link to="services" smooth={true} duration={500}>Service</Link>
                                        </li>
                                        <li>
                                            <Link to="about" smooth={true} duration={500}>About Us</Link>
                                        </li>
                                        <li>
                                            <Link to="contact-us" smooth={true} duration={500}>Contact</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="footer-contact">
                                <h5>Contact</h5>
                                <div className='d-flex'>
                                    <span>
                                        <MdOutlineMail />
                                    </span>
                                    <p className='ml-3'>lifestandardfurniture@gmail.com</p>
                                </div>
                                <div className='d-flex'>
                                    <span>
                                        <IoMdCall />
                                    </span>
                                    <p className='ml-3'>+92 331-5629774</p>
                                </div>
                            </div>
                        </div>


                    </div>
                    <FloatingWhatsApp {...whatsappProps} />

                </div>
            </div>
        </div>
    )
}

export default Footer