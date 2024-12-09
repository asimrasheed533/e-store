export default function CustomerLogin() {
  return (
    <>
      <div className="login__container">
        <div className="login__container__image">
          <img
            className="login__container__image__img"
            src="/loginImg.jpg"
            alt="fast food"
          />
        </div>
        <div className="login__content">
          <form className="login__content__form" action="" method="post">
            <div className="login__content__form__field">
              <label htmlFor="email">Email</label>
              <input
                className="login__content__form__input"
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email"
              />
            </div>
            <div className="login__content__form__field">
              <label htmlFor="password">Password</label>
              <input
                className="login__content__form__input"
                type="password"
                name="password"
                id="password"
                placeholder="Enter your password"
              />
            </div>
            <div className="login__content__form__field">
              <input
                className="login__content__form__button"
                type="submit"
                value="Login"
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
