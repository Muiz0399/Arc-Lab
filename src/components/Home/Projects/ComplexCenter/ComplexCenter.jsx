import React from "react";
import "./ComplexCenter.css";
const ComplexCenter = () => {
    return (
        <div className="geometry">
            <div className="g-container">
                <div className="c-c-img"></div>
                <div className="g-c-text" data-aos="fade-up">
                    <div className="top-g">
                        <span className="g-subheading">Building {"{12 / 07 / 2020}"}</span>
                        <h2>
                            <a href="work.html">Cultural Complex Centre</a>
                        </h2>
                    </div>
                    <div className="absolute">
                        <p>
                            Far far away, behind the word mountains, far from the countries
                            Vokalia and Consonantia, there live the blind texts. Separated
                            they live in Bookmarksgrove.
                        </p>
                        <p>
                            <a href="#" className="custom-btn">
                                View Portfolio
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ComplexCenter;
