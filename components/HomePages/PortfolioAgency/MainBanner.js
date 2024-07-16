import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import Link from "next/link";
import VisibilitySensor from "react-visibility-sensor";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

const MainBanner = () => {
  const [toggler, setToggler] = useState(false);
  return (
    <>
      <FsLightbox
        toggler={toggler}
        sources={["https://www.youtube.com/embed/bk7McNUjWgw"]}
      />

      <Swiper
        cssMode={true}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="hero-slider"
      >
        <SwiperSlide>
          <div 
            className="hero-banner overly" 
            style={{ 
              backgroundImage: `url(/images/earthe11.jpg)` 
            }}
          >
            <div className="d-table">
              <div className="d-table-cell">
                <div className="container">
                  <VisibilitySensor>
                    {({ isVisible }) => (
                      <div className="main-banner-content text-center">
                        <h1
                          className={
                            isVisible
                              ? "animated fadeInUp opacityOne"
                              : "opacityZero"
                          }
                        >
                          Embrace Nature's Whisper at Vattavada
                        </h1>

                        <p
                          className={
                            isVisible
                              ? "animated fadeInUp opacityOne"
                              : "opacityZero"
                          }
                        >
                          Allow the mesmerizing beauty of this paradise to weave a tale of an unforgettable      
                          journey, enriched by our exceptional tent accommodations
                        </p>

                        <div
                          className={
                            isVisible
                              ? "animated fadeInUp opacityOne"
                              : "opacityZero"
                          }
                        >
                          {/* <Link href="/contact-us/" className="btn btn-primary">
                            Contact Us
                          </Link> */}

                          <button
                            onClick={() => setToggler(!toggler)}
                            className="btn btn-secondary"
                          >
                            <i ></i> Contact Us Today
                          </button>
                        </div>
                      </div>
                    )}
                  </VisibilitySensor>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div 
            className="hero-banner overly"
            style={{ 
              backgroundImage: `url(/images/wall2.jpg)` 
            }}
          >
            <div className="d-table">
              <div className="d-table-cell">
                <div className="container">
                  <VisibilitySensor>
                    {({ isVisible }) => (
                      <div className="main-banner-content text-center">
                        <h1
                          className={
                            isVisible
                              ? "animated fadeInUp opacityOne"
                              : "opacityZero"
                          }
                        >
                          Where Nature Meets Comfort!

                        </h1>

                        <p
                          className={
                            isVisible
                              ? "animated fadeInUp opacityOne"
                              : "opacityZero"
                          }
                        >
                          Let the beauty of this paradise unfold as you embark on an unforgettable journey,  complemented by our exceptional tent stays.
                        </p>

                        <div
                          className={
                            isVisible
                              ? "animated fadeInUp opacityOne"
                              : "opacityZero"
                          }
                        >
                          <Link href="/contact-us/" className="btn btn-primary">
                            Contact Us
                          </Link>

                          <button
                            onClick={() => setToggler(!toggler)}
                            className="btn btn-secondary"
                          >
                            <i className="fa-solid fa-play me-1"></i> How it works
                          </button>
                        </div>
                      </div>
                    )}
                  </VisibilitySensor>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div 
            className="hero-banner overly"
            style={{ 
              backgroundImage: `url(/images/earthe7.jpg)` 
            }}
          >
            <div className="d-table">
              <div className="d-table-cell">
                <div className="container">
                  <VisibilitySensor>
                    {({ isVisible }) => (
                      <div className="main-banner-content text-center">
                        <h1
                          className={
                            isVisible
                              ? "animated fadeInUp opacityOne"
                              : "opacityZero"
                          }
                        >
                          Cozy Tent Stay in Vattavada
                        </h1>

                        <p
                          className={
                            isVisible
                              ? "animated fadeInUp opacityOne"
                              : "opacityZero"
                          }
                        >
                         Escape to the tranquil landscapes of Vattavada with our exclusive tent stay package, designed to offer you a blend of comfort and adventure.
                        </p>

                        <div
                          className={
                            isVisible
                              ? "animated fadeInUp opacityOne"
                              : "opacityZero"
                          }
                        >
                          <Link href="/contact-us/" className="btn btn-primary">
                            Contact Us
                          </Link>

                          <button
                            onClick={() => setToggler(!toggler)}
                            className="btn btn-secondary"
                          >
                            <i className="fa-solid fa-play me-1"></i> How it works
                          </button>
                        </div>
                      </div>
                    )}
                  </VisibilitySensor>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  )
}
  
export default MainBanner;