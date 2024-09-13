import React, { useEffect, useRef } from 'react';
import avatarBg from '@/assets/img/about/avatar_bg.png';
import img550 from '@/assets/img/about/550x640.jpg';
import mycv from '@/assets/mycv.pdf';
import { TypeAnimation } from 'react-type-animation';
import Parallax from 'parallax-js';
const About = () => {
  const sceneEl = useRef(null);

  useEffect(() => {
    if (sceneEl && sceneEl.current) {
      const parallaxInstance = new Parallax(sceneEl.current, {
        relativeInput: true,
        hoverOnly: true,
      });

      parallaxInstance.enable();

      return () => parallaxInstance.disable();
    }
  }, []);
  return (
    <>
      <div className="arlo_tm_section relative" id="about" style={{ paddingTop: 100 }}>
        <div className="arlo_tm_about_wrapper_all">
          <div className="container">
            <div className="arlo_tm_title_holder">
              <h3>About Me</h3>
              <span>Main informations about me</span>
            </div>
            <div className="arlo_tm_about_wrap">
              <div className="author_wrap">
                <div className="leftbox">
                  <div ref={sceneEl} className="about_image_wrap parallax" data-relative-input="true">
                    <div className="image layer" data-depth="0.3">
                      <img src={avatarBg} alt="550x640" />
                      <div
                        className="inner"
                        // data-img-url={avatarBg}
                        style={{ backgroundImage: `url(${avatarBg})` }}
                      ></div>
                    </div>
                    <div className="border layer" data-depth="0.4">
                      <img src={img550} alt="550x640" />
                      <div className="inner"></div>
                    </div>
                  </div>
                </div>
                <div className="rightbox">
                  <div className="arlo_tm_mini_title_holder">
                    <h4>
                      Dear Hiring Manager I'm a &nbsp;
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
                    </h4>
                  </div>
                  <div className="definition" style={{ textAlign: 'justify' }}>
                    <p>
                      Hi! My name is <strong>Bui Le Quoc Hung</strong>. I am a Web Developer, and I'm very passionate and dedicated to my work. I graduated from HCMC University of
                      Technology and Education with a degree in Information Technology <br />I have completed a 6-month internship at TMA Solution, assuming the role of Frontend
                      Developer. During this period, I actively contributed to projects related to Internet of Things (IoT) in collaboration with the company's dedicated IoT team
                    </p>
                  </div>
                  <div className="about_short_contact_wrap">
                    <ul>
                      <li>
                        <span>
                          <label>Birthday:</label> April 30, 2000
                        </span>
                      </li>
                      <li>
                        <span>
                          <label>Address:</label> Go Vap, HCM city
                        </span>
                      </li>
                      <li>
                        <span>
                          <label>Study:</label> UTE University
                        </span>
                      </li>
                      <li>
                        <span>
                          <label>Major:</label> Software Engineer
                        </span>
                      </li>
                      <li>
                        <span>
                          <label>Github:</label>
                          <a href="https://github.com/LeeHungQNG" target="_blank">
                            LeeHungQNG
                          </a>
                        </span>
                      </li>
                      <li>
                        <span>
                          <label>Email:</label>
                          <a href="https://mail.google.com" target="_blank">
                            builequochung3004&#64;gmail.com
                          </a>
                        </span>
                      </li>
                      <li>
                        <span>
                          <label>Phone:</label> <a href="#">0906 427 530</a>
                        </span>
                      </li>
                      <li>
                        <span>
                          <label>Facebook:</label>
                          <a href="https://www.facebook.com/builequochung/" target="_blank">
                            Le Quoc Hung
                          </a>
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className="buttons_wrap">
                    <ul>
                      <li>
                        <a href={mycv} download>
                          <span>Download CV</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
