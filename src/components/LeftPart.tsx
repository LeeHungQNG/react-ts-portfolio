import React, { useState } from 'react';
import desktopLogo from '@/assets/img/logo/react.png';

interface IProps {
  hideLeftPart: boolean;
  setHideLeftPart: (value: boolean) => void;
}
const LeftPart = (props: IProps) => {
  const [activeTab, setActiveTab] = useState<string>('');

  const handleClickTab = (tab: string, event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    setActiveTab(tab);
    event.preventDefault();
    const section = document.querySelector(`#${tab}`);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };
  return (
    <>
      <div className={props.hideLeftPart === true ? 'arlo_tm_leftpart_wrap opened' : 'arlo_tm_leftpart_wrap'}>
        <div className="leftpart_inner">
          <div className="logo_wrap">
            <a href="#">
              <img src={desktopLogo} alt="desktop-logo" />
            </a>
          </div>
          <div className="menu_list_wrap">
            <ul className="anchor_nav">
              <li>
                <a
                  href="#home"
                  className={activeTab === 'home' ? 'active' : ''}
                  onClick={(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => handleClickTab('home', event)}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className={activeTab === 'about' ? 'active' : ''}
                  onClick={(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => handleClickTab('about', event)}
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className={activeTab === 'skills' ? 'active' : ''}
                  onClick={(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => handleClickTab('skills', event)}
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#project"
                  className={activeTab === 'project' ? 'active' : ''}
                  onClick={(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => handleClickTab('project', event)}
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className={activeTab === 'contact' ? 'active' : ''}
                  onClick={(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => handleClickTab('contact', event)}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="leftpart_bottom">
            <div className="social_wrap">
              <ul>
                <li>
                  <a href="https://www.facebook.com/builequochung/" target="_blank">
                    <i className="xcon-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="xcon-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="xcon-linkedin"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/leehung3004/">
                    <i className="xcon-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="mailto:builequochung3004@gmail.com">
                    <i className="xcon-google"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <a onClick={() => props.setHideLeftPart(!props.hideLeftPart)} className={props.hideLeftPart === true ? 'arlo_tm_resize opened' : 'arlo_tm_resize'} href="#">
            <i className={props.hideLeftPart === true ? 'xcon-angle-left opened' : 'xcon-angle-left'}></i>
          </a>
        </div>
      </div>
    </>
  );
};

export default LeftPart;
