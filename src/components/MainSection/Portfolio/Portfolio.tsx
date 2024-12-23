import { Link } from 'react-router-dom';
import './Portfolio.css';

export const Portfolio = () => {
  return (
    <section className="portfolio" id="portfolio">
      <div className="portfolio__inner">
        <h2 className="about__title title">Галерея работ</h2>
        <ul className="portfolio__list">
          <li className="portfolio__item">
            <Link to='/weddings'>
              <h3 className="portfolio__title">Свадьбы</h3>
              <div className="portfolio__cover-img">
                <img
                  src="./images/portfolio/weddings/bride1-dancing.jpg"
                  alt="Фото обложки блока `Свадьбы`"
                />
              </div>
            </Link>
          </li>
          <li className="portfolio__item">
            <Link to='/events'>
              <h3 className="portfolio__title">На мероприятия</h3>
              <div className="portfolio__cover-img">
                <img
                  src="./images/portfolio/events/event-cover.jpg"
                  alt="Фото обложки блока `мероприятия`"
                />
              </div>
            </Link>
          </li>
          <li className="portfolio__item">
            <Link  to="/hairstyling">
              <h3 className="portfolio__title">Парикмахерские услуги</h3>
              <div className="portfolio__cover-img">
                <img
                  src="./images/portfolio/hairstyle/hairstyle-cover.jpg"
                  alt="Фото обложки блока `Парикмахерские услуги`"
                />
              </div>
            </Link>
          </li>
          <li className="portfolio__item">
            <Link  to="/photosessions">
              <h3 className="portfolio__title">Фотосессии под ключ</h3>
              <div className="portfolio__cover-img">
                <img
                  src="./images/portfolio/photo-sessions/photosessions-cover.jpg"
                  alt="Фото обложки блока `Фотосессии под ключ`"
                />
              </div>
            </Link>
          </li>
          <li className="portfolio__item">
            <Link to="/backstage">
              <h3 className="portfolio__title">Backstage</h3>
              <div className="portfolio__cover-img">
                <img
                  src="./images/portfolio/backstage/backstage-cover2.jpg"
                  alt="Фото обложки блока `Backstage`"
                />
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
};
