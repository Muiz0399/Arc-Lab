import React from "react";
import "./HomeAbout.css";
const HomeAbout = () => {
  return (
    <div className="home-about">
      <div className="h-a-container">
        <div className="h-a-imgs">
          <div className="h-a-img-a">
          </div>
          <div className="h-a-img-b">
     
            <div class="h-a-img-b-form">
              <div class="b-form-container">
                <span class="ha-heading">Be Part of our Business</span>
                <h3>Request A Quote</h3>
              </div>
              <form
                action="#"
                class="request-form ftco-animate fadeInUp ftco-animated"
              >
                <div class="form-group">
                  <input
                  
                    type="text"
                    class="form-control fc"
                    placeholder="First Name"
                  />
                </div>
                <div class="form-group">
                  <input
                   
                    type="text"
                    class="form-control fc"
                    placeholder="Last Name"
                  />
                </div>
                <div class="form-group">
                  <div class="form-field">
                    <div class="select-wrap">
                      <div class="icon-arr">
                        <span class="ion-ios-arrow-down"></span>
                      </div>
                      <select name="" id="" class="form-control">
                        <option value="">Select Your Services</option>
                        <option value="">Construction</option>
                        <option value="">Renovation</option>
                        <option value="">Interior Design</option>
                        <option value="">Exterior Design</option>
                        <option value="">Painting</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div class="form-group">
                  <input type="text" class="form-control fc" placeholder="Phone"  />
                </div>
                <div class="form-group">
                  <textarea
                    name=""
                    id=""
                    cols="30"
                    rows="2"
                    class="form-control fc"
                    placeholder="Message"
                   
                  ></textarea>
                </div>
                <div class="form-group">
                  <input
                    type="submit"
                    value="Request A Quote"
                    class="btn btn-primary py-3 px-4"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="h-a-text" data-aos="fade-up">
          <h2>ArchLab</h2>
          <p>
            A small river named Duden flows by their place and supplies it with
            the necessary regelialia. It is a paradisematic country, in which
            roasted parts of sentences fly into your mouth.
          </p>
          <p>
            On her way she met a copy. The copy warned the Little Blind Text,
            that where it came from it would have been rewritten a thousand
            times and everything that was left from its origin would be the word
            "and" and the Little Blind Text should turn around and return to its
            own, safe country. But nothing the copy said could convince her and
            so it didn’t take long until a few insidious Copy Writers ambushed
            her, made her drunk with Longe and Parole and dragged her into their
            agency, where they abused her for their.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeAbout;
