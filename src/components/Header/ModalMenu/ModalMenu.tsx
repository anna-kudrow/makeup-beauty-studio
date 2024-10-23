import { Link } from 'react-router-dom';
import './ModalMenu.css';
import { HashLink } from 'react-router-hash-link';

export const ModalMenu = () => {
  return (
    <nav className="modal-menu slide-in-right">
      <ul className="modal-menu__list">
        <li className="modal-menu__item ">
          <Link to="/" className="modal-menu__link">
            Главная
          </Link>
        </li>
        <li className="modal-menu__item ">
          <HashLink smooth to="/#about" className="modal-menu__link">
            О нас
          </HashLink>
        </li>
        <li className="modal-menu__item">
          <HashLink smooth to="/#gallery" className="modal-menu__link">
            Галерея
          </HashLink>
        </li>
        <li className="modal-menu__item">
          <HashLink smooth to="/#advantages" className="modal-menu__link">
            Преимущества
          </HashLink>
        </li>
        <li className="modal-menu__item">
          <HashLink smooth to="/#achievments" className="modal-menu__link">
            Достижения
          </HashLink>
        </li>
        <li className="modal-menu__item">
          <HashLink smooth to="/#services" className="modal-menu__link">
            Услуги
          </HashLink>
        </li>
      </ul>
    </nav>
  )
}
