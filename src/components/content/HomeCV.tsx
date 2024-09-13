import React from 'react';
import { TypeAnimation } from 'react-type-animation';

const HomeCV = () => {
  const handleScrollToAbout = () => {
    const section = document.querySelector('#about');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <div className="arlo_tm_section" id="home">
        <div className="arlo_tm_hero_header_wrap">
          <div className="arlo_tm_universal_box_wrap">
            <div className="bg_wrap">
              <div className="overlay_image hero jarallax" data-speed="0.1"></div>
              <div className="overlay_color hero"></div>
            </div>
            <div className="content hero">
              <div className="inner_content">
                <div className="image_wrap">
                  <img src="img/hero/avatar_cv.jpg" alt="hero" />
                </div>
                <div className="name_holder">
                  <h3>
                    Quốc Hưng <span>Dev</span>
                  </h3>
                </div>
                <div className="text_typing">
                  <p>
                    I'm a{/* <> </> */}
                    &nbsp;
                    <TypeAnimation
                      sequence={[
                        // Same substring at the start will only be typed out once, initially
                        'Web Developer',
                        2000, // wait 1s before replacing "Mice" with "Hamsters"
                        'Frontend Developer',
                        2000,
                        'Freelancer',
                        2000,
                      ]}
                      wrapper="span"
                      speed={50}
                      // style={{ fontSize: '2em', display: 'inline-block' }}
                      repeat={Infinity}
                    />
                    {/* <span className="arlo_tm_animation_text_word"></span> */}
                  </p>
                </div>
              </div>
            </div>
            <div
              className="arlo_tm_arrow_wrap bounce anchor"
              onClick={(event) => {
                event.preventDefault();
                handleScrollToAbout();
              }}
            >
              <a href="#about">
                <i className="xcon-angle-double-down"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeCV;
