import './Header.css';
import DesktopNav from "./DesktopNav.tsx/DesktopNav";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faX } from '@fortawesome/free-solid-svg-icons';

import { useState } from 'react';
import { ModalMenu } from './ModalMenu/ModalMenu';

export const Header = () => {
  const [navToggleOpened, setNavToggleOpened] = useState(false);
  const handleNavToggleClick = () => {
    setNavToggleOpened(!navToggleOpened);
  }
  
  return (
    <header className="header">
      <div className="header__inner">
        <div className="header__logo">
          <a className="logo__link">
            <span className="logo-link__upper">Boyarinova_studio</span>
            <span className="logo-link__bottom">Анастасия & Светлана</span>
          </a>
        </div>
        <div className="header__right-box">
          <DesktopNav />
          <div className="header__contacts">
            <a
              className="instagram-link"
              href="https://www.instagram.com/boyarinova_studio?igshid=YmMyMTA2M2Y%3D"
            ></a>
            <a className="phone-num" href="tel:+79037522505">
              8-903-752-25-05
            </a>
          </div>
          <button className="header__menu-toggle" onClick={handleNavToggleClick}>
            {!navToggleOpened ? <FontAwesomeIcon icon={faBars} style={{color: "#363636",width: "20px", height: "20px",}} /> : <FontAwesomeIcon icon={faX} style={{color: "#363636", width: "20px", height: "20px",}} />}
          </button>
        </div>
        {navToggleOpened ? <ModalMenu/> : null}
      </div>
    </header>
  );
};
