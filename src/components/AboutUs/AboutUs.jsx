import React from "react";
import images from "../../constants/images";
import "./AboutUs.css";

const AboutUs = () => (
    <div id="about" className='about section__padding'>
        <div className='container'>
            <div className='about__content text__center'>
                <h2 className='section__title text__cap'>about us</h2>
                <p className='para__text text__grey'>
                    In Tech is a small startup with a big dream, led by our visionary CEO, Jeremia Sibarani. Founded by Jeremia, a young entrepreneur from a rural village, our mission is to empower our community through technology. With passion and determination, we're committed to driving technological progress in our hometown and beyond. Join us in shaping a brighter future together.
                </p>
                <p>
                In Tech - Empowering Communities, Advancing Technology.
                </p>
                <img src={images.logo1} alt="" />
            </div>
        </div>
    </div>
)

export default AboutUs;