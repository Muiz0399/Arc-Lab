import React from "react";
import "./ContactMap.css";
const ContactMap = () => {
  return (
    <div className="map-container">
      <div id="map" className="bg-white" style={{ height: "400px" }}>
        <div>
          <div className="gm-err-container">
            <div className="gm-err-content">
              <div className="gm-err-icon">
                <img
                  src="https://maps.gstatic.com/mapfiles/api-3/images/icon_error.png"
                  alt=""
                  draggable="false"
                />
              </div>
              <div className="gm-err-title">Oops! Something went wrong.</div>
              <div className="gm-err-message">
                This page didn't load Google Maps correctly. See the JavaScript
                console for technical details.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMap;
