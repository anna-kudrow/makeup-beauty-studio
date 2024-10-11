export const Adv = () => {
  return (
    <section className="adv" id="advantages">
      <div className="adv__inner">
        <h2 className="adv__title title">Вы можете довериться нам</h2>
        <ul className="adv__list">
          <li className="adv__item">
            <div className="adv__item-inner">
              <div className="adv__item-info">
                <p className="adv__text">
                  <span className="adv__text-bigger">
                    +8 лет <br />
                  </span>
                  работы на телевидении, в рекламе и кино
                </p>
                <p className="adv__text">
                  <span className="adv__text-bigger">
                    +25 лет
                    <br />
                  </span>{" "}
                  в парикмахерском искусстве
                </p>
              </div>
              <div className="adv__item-photo">
                <img
                  width="100"
                  height="156"
                  src="./images/musicians.jpg"
                  alt="Фото анастасии на мероприятии с артистами-баянистами"
                />
              </div>
            </div>
          </li>
          <li className="adv__item">
            <div className="adv__item-inner">
              <div className="adv__item-info">
                <ul className="adv__info-list">
                  <li className="adv__info-item ">
                    Постоянно повышаем квалификацию
                  </li>
                  <li className="adv__info-item ">Знаем трендовые образы </li>
                  <li className="adv__info-item ">
                    Учитываем любые индивидуальные пожелания
                  </li>
                </ul>
              </div>
              <div className="adv__item-photo">
                <img
                  width="100"
                  height="156"
                  src="./images/makeup.png"
                  alt="Анастасия делает мейк для клиентки"
                />
              </div>
            </div>
          </li>
          <li className="adv__item">
            <div className="adv__item-inner">
              <div className="adv__item-info">
                <p className="adv__text">
                  <span className="adv__text-bigger">
                    +200 <br />
                  </span>
                  благодарных отзывов
                </p>
                <button type="button" className="adv__button">
                  Читать отзывы
                </button>
              </div>
              <div className="adv__item-photo">
                <img
                  width="100"
                  height="156"
                  src="./images/client.jpg"
                  alt="Фото благодарной клиентки"
                />
              </div>
            </div>
          </li>
          <li className="adv__item">
            <div className="adv__item-inner">
              <div className="adv__item-info">
                <div className="adv__car-icon"></div>
                <p className="adv__text">
                  Выезд на удобную <br /> для вас локацию
                </p>
              </div>
              <div className="adv__item-photo">
                <img
                  width="100"
                  height="156"
                  src="./images/work-process.jpg"
                  alt="Анастасия за рабочим процессом укладки волос"
                />
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
