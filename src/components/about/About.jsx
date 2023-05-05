import React from "react";
import "./about.scss";
import photo from "../../assets/img/photo.jpg";
import cv from "../../assets/cv/Front-End_Developer_Palii_Dariia.pdf";

const About = ({setIsModalOpen}) => {

    return (
        <section id="about" className="about">
            <img src={photo} alt="photo" />

            <div className="about__description">
                <h3>About me</h3>
                <p>
                    My name is Dariia Palii and I'm a beginner Frontend
                    developer with strong skills in HTML, CSS and JavaScript.
                    Though I have not yet worked on a commercial project, I have
                    developed several websites and web applications during my
                    studies. I'm constantly learning and exploring new
                    technologies and tools to improve my coding abilities and
                    keep up with the latest trends in the industry.
                </p>
                <br />
                <p>
                    My main motivation for pursuing a career in Frontend
                    development is the ability to create visually appealing and
                    user-friendly interfaces that can enhance users' online
                    experience. I am passionate about turning design concepts
                    into interactive web pages and applications. My personal
                    qualities include attention to detail, self-motivation, and
                    creativity.
                </p>
                <a href={cv} download="">
                    <button className="custom__btn btn">
                        <span>Download CV</span>
                    </button>
                </a>
                <button
                    className="custom__btn btn btn__show-modal"
                    onClick={() => setIsModalOpen(true)}
                >
                    <span>Hire Me</span>
                </button>
            </div>
        </section>
    );
};

export default About;
