import { toast } from "react-toastify";
import { ActionFunctionArgs, redirect, useFetcher } from "react-router";
import Input from "~/components/Input";
import { SignUp } from "models/signUp";
import loginImg from "../../assets/loginImg.png";

export async function action({ request }: ActionFunctionArgs) {
  const body = await request.formData();
  const name = body.get("name");
  const email = body.get("email");
  const phone = body.get("phone");
  const password = body.get("password");
  const confirmPassword = body.get("confirmPassword");
  console.log(name, email, phone, password, confirmPassword);

  if (!name || !email || !phone || !password || !confirmPassword) {
    return {
      status: 400,
      errors: {
        name: name ? null : "Name is required",
        email: email ? null : "Email is required",
        phone: phone ? null : "Phone is required",
        password: password ? null : "Password is required",
        confirmPassword: confirmPassword
          ? null
          : "Confirm Password is required",
      },
    };
  }

  if (password !== confirmPassword) {
    return {
      status: 400,
      errors: {
        confirmPassword: "Passwords do not match",
      },
    };
  }

  const existingUser = await SignUp.findOne({
    $or: [{ email }, { phone }, { name }],
  });
  if (existingUser) {
    if (existingUser.email === email) toast.error("Email already exists");
    if (existingUser.phone === phone) toast.error("Phone already exists");
    if (existingUser.name === name) toast.error("Name already exists");

    return {
      status: 400,
      errors: {
        email: existingUser.email === email ? "Email already exists" : null,
        phone: existingUser.phone === phone ? "Phone already exists" : null,
        name: existingUser.name === name ? "Name already exists" : null,
      },
    };
  }

  await SignUp.create({
    name,
    email,
    phone,
    password,
  });
  toast.success("Account created successfully! Redirecting to login...");
  return redirect("/customer/login");
}

export default function CustomerSignUp() {
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
          <div className="login__content__title">Create Account</div>
          <fetcher.Form className="login__content__form" method="post">
            <Input
              label="Enter Name"
              name="name"
              error={fetcher.data?.errors?.name}
            />
            <Input
              label="Enter Email"
              name="email"
              error={fetcher.data?.errors?.email}
            />
            <Input
              label="Enter Phone"
              name="phone"
              error={fetcher.data?.errors?.phone}
            />
            <Input
              type="password"
              label="Enter Password"
              name="password"
              error={fetcher.data?.errors?.password}
            />
            <Input
              type="password"
              label="Enter Confirm Password"
              name="confirmPassword"
              error={fetcher.data?.errors?.confirmPassword}
            />

            <div className="login__content__form__field">
              <button
                className="login__content__form__button"
                type="submit"
                disabled={
                  fetcher.state === "submitting" || fetcher.state === "loading"
                }
              >
                {fetcher.state === "submitting" ? "Loading..." : "Sign Up"}
              </button>
            </div>
          </fetcher.Form>
        </div>
      </div>
    </>
  );
}
