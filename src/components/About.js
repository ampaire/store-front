import React from 'react';
import { Image, Container, Row } from 'react-bootstrap';

import about from '../assets/about.jpg';
import './About.css';

const About = () => {
    return (
        <div className="px-0">
            <Image src={about} alt="about-image" fluid className="mb-4" />
            <Container>
                <Row className="justify-content-center text-center">
                    <blockquote className="blockquote col-12 col-sm-10 col-lg-8">
                        <p>“A touch of Africa to your wadrobe”</p>
                        <footer className="blockquote-footer">Fortunate</footer>
                    </blockquote>
                </Row>
                <h1 className="text-center">About us</h1>
                <div id="pars" className="mx-3 mx-md-4 mx-lg-5 text-left">
                    <p className="mt-3 mt-md-4 mt-lg-5">FORNA FASHIONS is a clothing line located in ........, Uganda. It was founded in 2021, on the basis of adding 
                    creativity to African styles. It specializes in manufacturing African fashionable clothing and outfits. We believe there is great artistry in subdued simplicity, 
                    and strive to reflect that in all our product lines.</p>
                   
                    {/*  added padding on this last paragraph to stretch screen down but feel free to change for footer */}
                    <p id="last-par" className="mt-3 mt-md-4 mt-lg-5">All of our clothes are designed and manufactured with the highest quality material. 
                    A purchase from any of our lines is meant to last forever. Discover your true complexity with FORNA FASHIONS today!</p>
                </div>
            </Container>
        </div>
    );
};

export default About;