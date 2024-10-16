import "./DesktopNav.css";


function DesktopNav() {
  return (
    <nav className="desktop-menu">
      <ul className="desktop-menu__list">
        <li className="desktop-menu__item ">
          <a href="#about" className="desktop-menu__link">
            О НАС
          </a>
        </li>
        <li className="desktop-menu__item">
          <a href="#gallery" className="desktop-menu__link">
            ГАЛЕРЕЯ
          </a>
        </li>
        <li className="desktop-menu__item">
          <a href="#advantages" className="desktop-menu__link">
            ПРЕИМУЩЕСТВА
          </a>
        </li>
        <li className="desktop-menu__item">
          <a href="#achievments" className="desktop-menu__link">
            ДОСТИЖЕНИЯ
          </a>
        </li>
        <li className="desktop-menu__item">
          <a href="#services" className="desktop-menu__link">
            УСЛУГИ
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default DesktopNav;
