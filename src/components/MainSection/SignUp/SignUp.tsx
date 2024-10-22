import './sign-up.css';

export const SignUp = () => {
  return (
    <section className="sign-up">
      <div className="sign-up__inner">
        <h2 className="sign-up__title title">Заполни анкету !</h2>
        <p className="sign-up__text">Начни преображение уже сегодня</p>
        <form className="sign-up__form">
          <input
            className="sign-up__input"
            type="text"
            name="name"
            id="name"
            placeholder="имя"
          />
          <input
            className="sign-up__input"
            type="tel"
            name="tel"
            id="tel"
            placeholder="телефон"
          />
          <input
            className="sign-up__input"
            type="email"
            name="email"
            id="email"
            placeholder="почта"
          />
          <button className="sign-up__btn" type="submit">
            записаться
          </button>
        </form>
      </div>
    </section>
  );
};
