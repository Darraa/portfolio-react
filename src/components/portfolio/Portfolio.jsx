import React from "react";
import "./portfolio.scss";
import todoList from "../../assets/img/todo-list.jpg";
import daPixel from "../../assets/img/dapixel.jpg";
import ticTacToe from "../../assets/img/tic-tac-toe.jpg";

export const Portfolio = () => {
    return (
        <section id="portfolio" className="portfolio">
            <h3>Portfolio</h3>

            <div className="portfolio__item">
                <div className="portfolio__item-description">
                    <h4>Todo-list</h4>
                    <p>
                        This project is an adaptive web app for creating a task
                        list. The project was created using JavaScript and CSS.
                        All recorded tasks are stored in localStorage.
                    </p>
                    <a
                        href="https://darraa.github.io/ToDo-List/"
                        target="_blank"
                    >
                        View Demo &#129042;
                    </a>
                </div>
                <img src={todoList} alt="todo-list" />
            </div>

            <div className="portfolio__item left">
                <div className="portfolio__item-description">
                    <h4>DaPixel</h4>
                    <p>
                        This project is a responsive webpage that was created
                        using HTML, JavaScript, and SCSS. The design was based
                        on a Figma template and the SCSS code was compiled into
                        CSS.
                    </p>
                    <a href="https://darraa.github.io/DaPixel/" target="_blank">
                        View Demo &#129042;
                    </a>
                </div>
                <img src={daPixel} alt="dapixel" />
            </div>

            <div className="portfolio__item">
                <div className="portfolio__item-description">
                    <h4>Tic Tac Toe</h4>
                    <p>
                        This project is a simple implementation of the classic
                        game of Tic Tac Toe. The project was created using
                        JavaScript and CSS.
                    </p>
                    <a
                        href="https://darraa.github.io/Tic_Tac_Toe/"
                        target="_blank"
                    >
                        View Demo &#129042;
                    </a>
                </div>
                <img src={ticTacToe} alt="tic-tac-toe" />
            </div>
        </section>
    );
};
