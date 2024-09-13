import React from 'react';
import Preloader from '../components/Preloader';
import LeftPart from '../components/LeftPart';
import RightPart from '../components/RightPart';
import MenuMobile from '../components/mobile/MenuMobile';
import { FloatButton } from 'antd';
const Portfolio = () => {
  return (
    <div className="arlo_tm_wrapper_all">
      <div id="arlo_tm_popup_blog">
        <div className="container">
          <div className="inner_popup scrollable"></div>
        </div>
        <span className="close">
          <a href="#"></a>
        </span>
      </div>

      {/*<!-- PRELOADER -->*/}
      <Preloader />
      {/*<!-- /PRELOADER -->*/}

      {/*<!-- MOBILE MENU -->*/}
      <MenuMobile />
      {/*<!-- /MOBILE MENU -->*/}

      {/*<!-- CONTENT -->*/}
      <div className="arlo_tm_content">
        {/*<!-- LEFTPART -->*/}
        <LeftPart />
        {/*<!-- /LEFTPART -->*/}

        {/*<!-- RIGHTPART -->*/}
        <RightPart />
        {/*<!-- /RIGHTPART -->*/}

        <FloatButton.BackTop tooltip={<div>Scroll to Top</div>} />
      </div>
    </div>
  );
};

export default Portfolio;
