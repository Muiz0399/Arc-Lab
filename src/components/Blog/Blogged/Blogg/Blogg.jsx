import React from "react";
import "./Blogg.css";

const Blogs = ({ imgUrl }) => {
    return (
        <div className="b-pl">
            <div className="plan-card">
                <div className="blog-img">
                    <img src={imgUrl} alt="" />
                </div>
                <div className="blog-text">
                    <div class="meta-3">
                        <div>
                            <a href="#">June 01, 2020</a>
                        </div>
                        <div>
                            <a href="#">Admin</a>
                        </div>
                        <div>
                            <a href="#" class="meta-chat">
                                <span class="fa fa-comment"></span> 3
                            </a>
                        </div>
                    </div>
                    <h3 class="b-heading">
                        <a href="#">Make Peace With Your Broken Pieces</a>
                    </h3>
                </div>
            </div>
        </div>
    );
};

export default Blogs;
