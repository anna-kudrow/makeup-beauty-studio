import DesktopNav from './DesktopNav.tsx/DesktopNav';


export const Header = () => {
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
                  href="https://www.instagram.com/boyarinova_studio?igshid=YmMyMTA2M2Y%3D"></a>
                <a className="phone-num" href="tel:+79037522505"
                  >8-903-752-25-05</a>
              </div>
              <div className="header__menu"></div>
            </div>
          </div>
        </header>
  )
}
