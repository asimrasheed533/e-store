import { useState } from "react";
import Input from "~/components/Input";

export default function CustomerSignUp() {
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
          <div className="login__content__title">Create Account</div>
          <form className="login__content__form" action="" method="post">
            <Input label="Enter Name" onChange={() => {}} value="" />
            <Input label="Enter Email" onChange={() => {}} value="" />
            <Input label="Enter Phone" onChange={() => {}} value="" />
            <Input label="Enter Password" onChange={() => {}} value="" />
            <Input
              label="Enter Confirm Password"
              onChange={() => {}}
              value=""
            />

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
