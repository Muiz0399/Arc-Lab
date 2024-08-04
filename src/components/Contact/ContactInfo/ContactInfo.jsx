import React from 'react';
import './ContactInfo.css';

const ContactInfo = () => {
    return (
        <div className="contact-info-container">
            <div className="contact-row">
                <div className="col-md-4 text-center border-height py-4">
                    <div className="icon">
                        <span className="fa fa-map"></span>
                    </div>
                    <span>Address:</span><p> 198 West 21th Street, Suite 721 New York NY 10016</p>
                </div>
                <div className="col-md-4 text-center border-height py-4">
                    <div className="icon">
                        <span className="fa fa-phone"></span>
                    </div>
                    <span>Phone:</span>  <p> <a href="tel://1234567920">+ 1235 2355 98</a></p>
                </div>
                <div className="col-md-4 text-center border-height py-4 brr">
                    <div className="icon">
                        <span className="fa fa-paper-plane"></span>
                    </div>
                    <span>Email:</span> <p> <a href="mailto:info@yoursite.com">info@yoursite.com</a></p>
                </div>
            </div>
        </div>
    );
};

export default ContactInfo;
