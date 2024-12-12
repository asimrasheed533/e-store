import {
  ActionFunctionArgs,
  createCookie,
  Link,
  redirect,
  useFetcher,
} from "react-router";
import Input from "~/components/Input";
import loginImg from "../../assets/loginImg.png";
import { Route } from "./+types/customer_.login";
import { tokenCookie } from "cookies";
import authCheck from "utils/authCheck";

export async function loader({ request }: Route.LoaderArgs) {
  const token = await authCheck(request);

  if (token) {
    return redirect("/customer");
  }
}

export async function action({ request }: Route.ActionArgs) {
  const body = await request.formData();
  const email = body.get("email");
  const password = body.get("password");
  console.log(email, password);

  return redirect("/customer", {
    headers: {
      "Set-Cookie": await tokenCookie.serialize("alibaba"),
    },
  });
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
