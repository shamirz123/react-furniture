import React, { useEffect, useState } from 'react';
import '../../Components/main.css'
import Navbar from '../Navbar/Navbar';
import About from '../About/About';
import Services from '../Servics/Services';
import Skill from '../Skills/Skill';
import Project from '../Projects/Project';
import Pricing from '../Pricing/Pricing';
import Contactform from '../ContactForm/Contactform';
import Footer from '../Footer/Footer';
import Sociallinks from '../SocialLinks/Sociallinks';
import Main from '../Main/Main';
import MobileNav from '../MobileNav/MobileNav';

function Home() {

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768); // Set isMobile to true if screen width is less than 768px
        };

        // Initial call to set isMobile based on current screen width
        handleResize();

        // Event listener for window resize to update isMobile
        window.addEventListener('resize', handleResize);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <>
            {/* <Navbar /> */}
            {isMobile ? <MobileNav /> : <Navbar />}
            
            <section className='home-section'>
                <Main/>
            </section>
            <section className='About-us-Section'>
                <About />
            </section>
            <section className='services-section' id='services'>
                <Services />
            </section>

           

        
            <section className='contact-form-section' id='contact-us'>
                <Contactform />
            </section>
            
            {/* <section className='testimonial-section' id='testimonial'>
                <Testimonial />
            </section> */}
            {/* <section className='price-section' id='pricing'>
                <Pricing />
            </section> */}
            {/* <section className='project-sections' id='projects'>
                <Project />
            </section> */}
            <section className='footer-section'>
                <Footer />
            </section>
            <section className='social-link-section'>
                <Sociallinks />
            </section>


        </>
    )
}

export default Home