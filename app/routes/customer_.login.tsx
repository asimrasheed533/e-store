import { ActionFunctionArgs, Link, redirect, useFetcher } from "react-router";
import Input from "~/components/Input";
import loginImg from "../../assets/loginImg.png";

export async function action({ request }: ActionFunctionArgs) {
  const body = await request.formData();
  const email = body.get("email");
  const password = body.get("password");
  console.log(email, password);
  return redirect("/customer");
}

export default function CustomerLogin() {
  const fetcher = useFetcher();
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
          <fetcher.Form className="login__content__form" method="post">
            <Input label="Enter Email" name="email" />
            <Input label="Enter Password" name="password" />

            <div className="login__content__form__field">
              <button
                className="login__content__form__button"
                type="submit"
                value="Login"
              >
                Login
              </button>
            </div>
          </fetcher.Form>
          <Link to="/customer/signUp" className="go__to__signUp">
            SignUp
          </Link>
        </div>
      </div>
    </>
  );
}
