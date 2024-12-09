import { ActionFunctionArgs, redirect, useFetcher } from "react-router";
// import SignUpModel from "models/signUp";
import { useState } from "react";
import Input from "~/components/Input";
import { SignUp } from "models/signUp";

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

  await SignUp.create({
    name,
    email,
    phone,
    password,
  });

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
            src="/loginImg.jpg"
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
              label="Enter Password"
              name="password"
              error={fetcher.data?.errors?.password}
            />
            <Input
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
