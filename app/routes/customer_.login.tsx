import { useState } from "react";
import { Link } from "react-router";
import Input from "~/components/Input";

export default function CustomerLogin() {
  const [isSecure, setIsSecure] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
          <div className="login__content__title">Welcome Royal Chef</div>
          <form className="login__content__form" action="" method="post">
            <Input label="Enter Email" onChange={() => {}} value="" />
            <Input label="Enter Password" onChange={() => {}} value="" />

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
