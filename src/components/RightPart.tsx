import React from 'react';
import HomeCV from './content/HomeCV';
import About from './content/About';
import Skill from './content/Skill';
import Project from './content/Project';
import Contact from './content/Contact';

const RightPart = () => {
  return (
    <>
      <div className="arlo_tm_rightpart">
        <div className="rightpart_inner">
          <HomeCV />

          {/*<!-- ABOUT -->*/}
          <About />
          {/*<!-- /ABOUT -->*/}

          {/*<!-- SKILLS -->*/}
          <Skill />
          {/*<!-- /SKILLS -->*/}

          {/*<!-- PROJECT -->*/}
          <Project />
          {/*<!-- /PROJECT -->*/}

          {/*<!-- CONTACT & FOOTER -->*/}
          <Contact />
          {/*<!-- /CONTACT & FOOTER -->*/}
        </div>
      </div>
    </>
  );
};

export default RightPart;
