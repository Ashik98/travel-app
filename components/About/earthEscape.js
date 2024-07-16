import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import Image from "next/image";

import aboutImg from "../../public/images/earthe10.jpg";

const EarthEscape = () => {
  const [toggler, setToggler] = useState(false);

  return (
    <>
      <FsLightbox
        toggler={toggler}
        sources={["https://www.youtube.com/embed/bk7McNUjWgw"]}
      />

      <div className="about-area ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5 col-md-12">
              <div className="about-image">
                <Image
                  src={aboutImg}
                  alt="About Us"
                  className="rounded-10"
                  width={500}
                  height={750}
                />

                <div className="video-box">
                  <div
                    className="video-btn"
                    onClick={() => setToggler(!toggler)}
                  >
                    <i className="fa-solid fa-play"></i>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-7 col-md-12">
              <div className="about-content about-content-two">
                <div className="section-title">
                  <h2>Earthen Escape</h2>
                  <p>
                    Experience the rustic charm of our Mud House Package, snuggled in the serene hills of Vattavada.
                  </p>
                </div>

                <div className="about-text">
                  <h4>Package Includes</h4>
                  <ul>
                    <li>Accommodation in a traditional mud house</li>
                    <li>Guided visit to nearby waterfalls or scenic viewpoints</li>
                    <li>Complimentary tea/coffee in the morning or evening</li>
                    <li>Breakfast & Dinner featuring local flavors</li>
                    <li>Strawberry farm tour and hands-on farming experience</li>
                    <li>Free Wi-Fi access in common areas</li>
                  </ul>
                </div>

                <div className="about-text">
                  <h4>Price</h4>
                  <p>
                    Starting from Rs.3000/- per person
                    Book Now to discover the authentic charm of Vattavada in our Earthen Escape Package!
                  </p>
                </div>

                <div className="about-text">
                  <h4>Optional Add-ons</h4>
                  <ul>
                    <li>
                      <i className="fa-solid fa-circle-check"></i>
                      Cycling tour around Vattavada to explore nearby villages
                    </li>
                    <li>
                      <i className="fa-solid fa-circle-check"></i>
                      Delightful Barbecue Experience
                    </li>
                    <li>
                      <i className="fa-solid fa-circle-check"></i>
                      Jeep safari to remote viewpoints and waterfalls
                    </li>
                    <li>
                      <i className="fa-solid fa-circle-check"></i>
                      Evening bonfire with local music and storytelling (Rs.500/- per person)
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EarthEscape;
