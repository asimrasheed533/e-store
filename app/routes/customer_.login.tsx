import { useState } from "react";
import { Link } from "react-router";
import Input from "~/components/Input";
import loginImg from "../../assets/loginImg.png";
export default function CustomerLogin() {
  return (
    <>
      <div className="login__container">
        <div className="login__container__image">
          <img
            className="login__container__image__img"
            src={loginImg}
            alt="fast food"
          />
        </div>
        <div className="login__content">
          <div className="login__content__title">Welcome Royal Chef</div>
          <form className="login__content__form" action="" method="post">
            <Input label="Enter Email" name="email" />
            <Input label="Enter Password" name="password" />

            <div className="login__content__form__field">
              <input
                className="login__content__form__button"
                type="submit"
                value="Login"
              />
            </div>
          </form>
          <Link to="/customer/signUp" className="go__to__signUp">
            SignUp
          </Link>
        </div>
      </div>
    </>
  );
}
