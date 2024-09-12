import React from 'react';
import 'components/content/Skill.scss';
import ProgressBar from '@ramonak/react-progress-bar';

const Skill = () => {
  return (
    <>
      <div className="arlo_tm_section" id="skills">
        <div className="arlo_tm_skills_wrap">
          <div className="container">
            <div className="inner_wrap">
              <div className="leftbox">
                <div className="arlo_tm_mini_title_holder">
                  <h4>Skill Frontend</h4>
                </div>
                <p>
                  <li>Design and implementation of web frontend systems</li>
                  <li>Framework/Library: React, Redux, Redux-Saga, React-Query (TanStack Query), Bootstrap, Ant design, Tailwind CSS, Material UI, Styled-component, SCSS/SASS</li>
                </p>
              </div>
              <div className="rightbox">
                <div className="progress_bar_wrap_total">
                  <div className="arlo_tm_progress_wrap" data-size="small" data-round="c" data-strip="off">
                    <div className="arlo_tm_progress" data-value="95" data-color="#000">
                      <span>
                        <span className="label">HTML/CSS/Javascript</span>
                      </span>
                      <div className="arlo_tm_bar_bg">
                        <ProgressBar completed={95} bgColor={'#333'} height={'8px'} isLabelVisible={false} />
                      </div>
                    </div>
                    <div className="arlo_tm_progress" data-value="95" data-color="#000">
                      <span>
                        <span className="label">ReactJS (Javascript & Typescript)</span>
                      </span>
                      <div className="arlo_tm_bar_bg">
                        <ProgressBar completed={90} bgColor={'#333'} height={'8px'} isLabelVisible={false} />
                      </div>
                    </div>
                    <div className="arlo_tm_progress" data-value="95" data-color="#000">
                      <span>
                        <span className="label">Design UX/UI</span>
                      </span>
                      <div className="arlo_tm_bar_bg">
                        <ProgressBar completed={95} bgColor={'#333'} height={'8px'} isLabelVisible={false} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="arlo_tm_skills_wrap">
          <div className="container">
            <div className="inner_wrap">
              <div className="leftbox">
                <div className="arlo_tm_mini_title_holder">
                  <h4>Skill Backend</h4>
                </div>
                <p>
                  <li>Programming language: Java, Javascript</li>
                  <li>Design and build RESTful APIs</li>
                  <li>Framework: ExpressJS, Spring</li>
                  <li>Database: MySQL, MongoDB</li>
                </p>
              </div>
              <div className="rightbox">
                <div className="progress_bar_wrap_total">
                  <div className="arlo_tm_progress_wrap" data-size="small" data-round="c" data-strip="off">
                    <div className="arlo_tm_progress" data-value="95" data-color="#000">
                      <span>
                        <span className="label">ExpressJS</span>
                      </span>
                      <div className="arlo_tm_bar_bg">
                        <ProgressBar completed={70} bgColor={'#333'} height={'8px'} isLabelVisible={false} />
                      </div>
                    </div>
                    <div className="arlo_tm_progress" data-value="95" data-color="#000">
                      <span>
                        <span className="label">Java</span>
                      </span>
                      <div className="arlo_tm_bar_bg">
                        <ProgressBar completed={60} bgColor={'#333'} height={'8px'} isLabelVisible={false} />
                      </div>
                    </div>
                    <div className="arlo_tm_progress" data-value="95" data-color="#000">
                      <span>
                        <span className="label">Database MySQL/MongoDB</span>
                      </span>
                      <div className="arlo_tm_bar_bg">
                        <ProgressBar completed={70} bgColor={'#333'} height={'8px'} isLabelVisible={false} />
                      </div>
                    </div>
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

export default Skill;
