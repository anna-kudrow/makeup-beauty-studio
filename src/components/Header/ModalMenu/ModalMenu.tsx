import './ModalMenu.css';

export const ModalMenu = () => {
  return (
    <nav className="modal-menu slide-in-right">
      <ul className="modal-menu__list">
        <li className="modal-menu__item ">
          <a href="#about" className="modal-menu__link">
            О нас
          </a>
        </li>
        <li className="modal-menu__item">
          <a href="#gallery" className="modal-menu__link">
            Галерея
          </a>
        </li>
        <li className="modal-menu__item">
          <a href="#advantages" className="modal-menu__link">
            Преимущества
          </a>
        </li>
        <li className="modal-menu__item">
          <a href="#achievments" className="modal-menu__link">
            Достижения
          </a>
        </li>
        <li className="modal-menu__item">
          <a href="#services" className="modal-menu__link">
            Услуги
          </a>
        </li>
      </ul>
    </nav>
  )
}
