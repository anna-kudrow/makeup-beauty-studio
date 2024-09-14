
import './App.css'
import './scss/style.scss'

function App() {  
   return(    
   <>
        <header className="header">
          <div className="header__inner">
            <div className="header__logo">
              <a className="logo__link">
                <span className="logo-link__upper">Boyarinova_studio</span>
                <span className="logo-link__bottom">Анастасия &Светлана</span>
              </a>
            </div>
            <div className="header__right-box">
              <div className="header__contacts">
                <a
                  className="instagram-link"
                  href="https://www.instagram.com/boyarinova_studio?igshid=YmMyMTA2M2Y%3D"
                ></a>
                <a className="phone-num" href="tel:+79037522505"
                  >8-903-752-25-05</a>
              </div>
              <div className="header__menu"></div>
            </div>
          </div>
        </header>
        <main className="main">
          <section className="promo">
            <div className="promo__inner">
              <div className="promo__grid">
                <div className="promo__title-box">
                  <span className="promo__title--rouge-color">макияж</span>
                  <span className="promo__title--brown-color">прически</span>
                  <span className="promo__title--brown-color">стиль</span>
                  <div className="promo__title-name__wrapper">
                    <span className="promo__title-name slide-in-blurred-bottom"
                      >Boyarinova_studio</span>
                  </div>
                </div>
                <div className="promo__photo1-wrapper">
                  <div className="promo__photo1"><img src="./images/cover1x3.jpg" alt="Фото модели ч/б"/></div>
                </div>
                <div className="promo__photo2-wrapper">
                  <div className="promo__photo2"><img src="./images/cover2x3.jpg" alt="Фото модели для обложки"/></div>
                </div>
              </div>
              <button className="start-button" type="button">
                Начать преображение
              </button>
            </div>
          </section>
          <section className="about">
            <div className="about__inner">
                <h2 className="about__title title">О НАС</h2>
                <div className="about__anastasiya">
                  <h3 className="about__small-title">Анастасия</h3>
                  <p className="about__text">
                    Я профессиональный визажист, гример, свадебный стилист.  За свою карьеру учавствовала самых разнообразных проектах, преображая людей. А если ты мечтаешь сама научиться краситься и создавать красивые образы, то записывайся на мой мастер класс «макияж для себя» и я помогу осуществить твою мечту.
                  </p>
                  <div className="photo-anastasiya-box">
                    <img src="./images/anastasiya.jpg" alt="фото Анастасии" />
                  </div>
                </div>
                <div className="about__svetlana">
                  <h3 className="about__small-title">Светлана</h3>
                  <p className="about__text">
                    Я стилист-модельер, колорист и специалист по уходовым процедурам люкс-класса.
    В сфере парикмахерского искусства уже более 25 лет и считаю это делом своей жизни. Работала в топовых салонах красоты Москвы, ну а сейчас являюсь организатором и руководителем студии "Boyarinova studio". Жду вас на бесплатную консультацию.
                  </p>
                  <div className="photo-svetlana-box">
                    <img src="./images/svetlana.jpg
                  " alt="фото Светланы" />
                  </div>
                </div>
              </div>
          </section>
          <section className="portfolio">
            <div className="portfolio__inner">
              <ul className="portfolio__list">
                <li className="portfolio__item">
                  <a href="#"
                    ><h3 className="portfolio__title">На мероприятия</h3>
                    <div className="portfolio__cover-img">
                      <img
                        src="./images/portfolio/events/events-cover.png"
                        alt="Фото обложки блока `мероприятия`"
                      /></div></a>
                </li>
                <li className="portfolio__item">
                  <a href="#"
                    ><h3 className="portfolio__title">Парикмахерские услуги</h3>
                    <div className="portfolio__cover-img">
                      <img
                        src="./images/portfolio/hairstyle/hair-cover.png"
                        alt="Фото обложки блока `Парикмахерские услуги`"/></div></a></li>
                  <li className="portfolio__item">
                  <a href="#"
                    ><h3 className="portfolio__title">Фотосессии под ключ</h3>
                    <div className="portfolio__cover-img">
                      <img
                        src="./images/portfolio/photo-sessions/photo-sessions-cover.png"
                        alt="Фото обложки блока `Фотосессии под ключ`"
                      /></div></a></li>
                  <li className="portfolio__item">
                  <a href="#"
                    ><h3 className="portfolio__title">Backstage</h3>
                    <div className="portfolio__cover-img">
                      <img
                        src="./images/portfolio/backstage/backstage-cover.png"
                        alt="Фото обложки блока `Backstage`"
                      /></div></a>
                </li>
              </ul>
            </div>
          </section>
          <section className="adv">
            <div className="adv__inner"> 
              <h2 className="adv__title title">Вы можете довериться нам</h2>
              <ul className="adv__list">
                <li className="adv__item">
                  <div className="adv__item-inner">
                    <div className="adv__item-info">
                      <p className="adv__text">
                        <span className="adv__text-bigger">+8 лет <br/></span>работы на телевидении, в рекламе и кино
                      </p>
                      <p className="adv__text">
                        <span className="adv__text-bigger">+25 лет<br/></span> в парикмахерском искусстве 
                      </p>
                    </div>
                    <div className="adv__item-photo"><img width="100" height="156"  src="./images/musicians.jpg" alt="Фото анастасии на мероприятии с артистами-баянистами"/></div>
                  </div>
                </li>
                <li className="adv__item">
                  <div className="adv__item-inner">
                    <div className="adv__item-info">
                  <ul className="adv__info-list">
                    <li className="adv__info-item ">Постоянно повышаем квалификацию</li>
                    <li className="adv__info-item ">Знаем трендовые образы </li>
                    <li className="adv__info-item ">Учитываем любые индивидуальные пожелания</li>
                  </ul>
                    </div>
                    <div className="adv__item-photo"><img width="100" height="156"  src="./images/makeup.png" alt="Анастасия делает мейк для клиентки"/></div>
                  </div>
                </li>
                <li className="adv__item">
                  <div className="adv__item-inner">
                    <div className="adv__item-info">
                      <p className="adv__text">
                        <span className="adv__text-bigger">+200 <br/></span>благодарных отзывов
                      </p>
                      <button type="button" className="adv__button">Читать отзывы</button>

                    </div>
                    <div className="adv__item-photo"><img width="100" height="156" src="./images/client.jpg" alt="Фото благодарной клиентки"/></div>
                  </div>
                </li>
                  <li className="adv__item">
                  <div className="adv__item-inner">
                    <div className="adv__item-info">
                      <div className="adv__car-icon"></div>
                      <p className="adv__text">
                      Выезд на удобную <br/> для вас локацию
                      </p>
                    </div>
                    <div className="adv__item-photo"><img width="100" height="156" src="./images/work-process.jpg" alt="Анастасия за рабочим процессом укладки волос"/></div>
                  </div>
                </li>
              </ul>
            </div>
          </section>
          <section className="achievements">
            <div className="achievements__inner">
              <h2 className="achievements__title title">Достижения</h2>
              <ul className="achievements__list">
                <li className="achievements__item">
                  <span className="achievements__year" >2001Г.</span><br/>
                  Участие в конкурсе "Московская краса".
                </li>
                <li className="achievements__item">
                  <span className="achievements__year" >2002Г.</span><br/>
                  Участие в конкурсе "".
                </li>
                <li className="achievements__item">
                  <span className="achievements__year" >2003Г.</span><br/>
                  Участие в fashion super show.
                </li>
              </ul>
            </div>
          </section>
          <section className="price">
            <div className="price__inner">
              <h2 className="price__title title">Прайс</h2> 
              <ul className="price__cards">
                <li className="price__card">
                  <p className="card__title">
                    <span className="title__service">Парикмахерские услуги</span>
                    <span className="title__master">Мастер Светлана</span>
                  </p>
                  <ul className="services__list">
                    <li className="services__item">Любые виды окрашивания</li>
                    <li className="services__item">Стрижки</li>
                    <li className="services__item">Мужские стрижки</li>
                    <li className="services__item">Глубокое восстановление волос</li>
                  </ul>
                  <button type="button" className="price__button">Узнать цену</button>
                </li>
                <li className="price__card">
                  <p className="card__title">
                    <span className="title__service">Услуги визажиста</span>
                    <span className="title__master">Мастер Анастасия</span>
                  </p>
                  <ul className="services__list">
                    <li className="services__item">Наращивание ресниц</li>
                    <li className="services__item">Брови</li>
                    <li className="services__item">Свадебный образ</li>
                    <li className="services__item">На мероприятие</li>
                  </ul>
                  <button type="button" className="price__button">Узнать цену</button>
                </li>
                <li className="price__card">
                  <p className="card__title">
                    <span className="title__service">Фотосессии под ключ</span>
                    <span className="title__master">Мастер Анастасия</span>
                  </p>
                  <ul className="services__list">
                    <li className="services__item">Макияж</li>
                    <li className="services__item">Фотограф</li>
                    <li className="services__item">Стилист по одежде</li>
                  </ul>
                  <button type="button" className="price__button">Узнать цену</button>
                </li>
              </ul>
            </div>
          </section>
          <section className="sign-up">
            <div className="sign-up__inner">
              <h2 className="sign-up__title title">Заполни анкету !</h2>
              <p className="sign-up__text">Начни преображение уже сегодня</p>
              <form className="sign-up__form">
                <input className="sign-up__input" type="text" name="name" id="name" placeholder="имя"/>
                <input className="sign-up__input" type="tel" name="tel" id="tel" placeholder="телефон"/>
                <input className="sign-up__input" type="email" name="email" id="email" placeholder="почта"/>
                <button className="sign-up__btn" type="submit">записаться</button>
              </form>
            </div>
          </section>
        </main>
        <footer className="footer">
          <div className="footer__inner">
            <div className="footer__logo">
              <a className="logo__link logo__link-footer">
                <span className="logo-link__upper logo-link__upper-footer">Boyarinova_studio</span>
                <span className="logo-link__bottom">Анастасия &Светлана</span>
              </a>
            </div>
            <div className="footer__content">
              <nav className="footer__nav">
                <ul className="nav__list">
                  <li className="nav__item"><a href="#about">О нас</a></li>
                  <li className="nav__item"><a href="#gallery">Фотогалерея</a></li>
                  <li className="nav__item"><a href="#services">Услуги</a></li>
                </ul>
              </nav>
              <div className="footer__social-media">
                <ul className="social-media__list">
                  <li className="social-media__item"><a href="https://www.instagram.com/boyarinova_studio?igshid=YmMyMTA2M2Y%3D">Instagram</a></li>
                  <li className="social-media__item"><a href="https://t.me/BoyarinovaAn">Telegram</a></li>
                  <li className="social-media__item"><a href="https://wa.me/89037522505">Whatsapp</a></li>
                </ul>
              </div>
              <div className="footer__contacts">
                <ul className="contacts__list">
                  <li className="contacts__item"><a href="tel:+79037522505">8-903-752-25-05</a></li>
                  <li className="contacts__item">Москва, ст.м. Коломенская</li>
                </ul>
              </div>
            </div>

          </div>
        </footer>
    </>)}

export default App;
