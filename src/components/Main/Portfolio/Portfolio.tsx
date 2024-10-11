import './Portfolio.scss';

export const Portfolio = () => {
  return (
    <section className="portfolio" id="gallery">
      <div className="portfolio__inner">
        <ul className="portfolio__list">
          <li className="portfolio__item">
            <a href="#">
              <h3 className="portfolio__title">На мероприятия</h3>
              <div className="portfolio__cover-img">
                <img
                  src="./images/portfolio/events/events-cover.png"
                  alt="Фото обложки блока `мероприятия`"
                />
              </div>
            </a>
          </li>
          <li className="portfolio__item">
            <a href="#">
              <h3 className="portfolio__title">Парикмахерские услуги</h3>
              <div className="portfolio__cover-img">
                <img
                  src="./images/portfolio/hairstyle/hair-cover.png"
                  alt="Фото обложки блока `Парикмахерские услуги`"
                />
              </div>
            </a>
          </li>
          <li className="portfolio__item">
            <a href="#">
              <h3 className="portfolio__title">Фотосессии под ключ</h3>
              <div className="portfolio__cover-img">
                <img
                  src="./images/portfolio/photo-sessions/photo-sessions-cover.png"
                  alt="Фото обложки блока `Фотосессии под ключ`"
                />
              </div>
            </a>
          </li>
          <li className="portfolio__item">
            <a href="#">
              <h3 className="portfolio__title">Backstage</h3>
              <div className="portfolio__cover-img">
                <img
                  src="./images/portfolio/backstage/backstage-cover.png"
                  alt="Фото обложки блока `Backstage`"
                />
              </div>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};
