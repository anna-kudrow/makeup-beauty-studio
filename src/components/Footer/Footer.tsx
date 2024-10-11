export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__logo">
          <a className="logo__link logo__link-footer">
            <span className="logo-link__upper logo-link__upper-footer">
              Boyarinova_studio
            </span>
            <span className="logo-link__bottom">Анастасия &Светлана</span>
          </a>
        </div>
        <div className="footer__content">
          <nav className="footer__nav">
            <ul className="nav__list">
              <li className="nav__item">
                <a href="#about">О нас</a>
              </li>
              <li className="nav__item">
                <a href="#gallery">Фотогалерея</a>
              </li>
              <li className="nav__item">
                <a href="#services">Услуги</a>
              </li>
            </ul>
          </nav>
          <div className="footer__social-media">
            <ul className="social-media__list">
              <li className="social-media__item">
                <a href="https://www.instagram.com/boyarinova_studio?igshid=YmMyMTA2M2Y%3D">
                  Instagram
                </a>
              </li>
              <li className="social-media__item">
                <a href="https://t.me/BoyarinovaAn">Telegram</a>
              </li>
              <li className="social-media__item">
                <a href="https://wa.me/89037522505">Whatsapp</a>
              </li>
            </ul>
          </div>
          <div className="footer__contacts">
            <ul className="contacts__list">
              <li className="contacts__item">
                <a href="tel:+79037522505">8-903-752-25-05</a>
              </li>
              <li className="contacts__item">
                г. Москва, ул. Высокая 8, 1 этаж
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
