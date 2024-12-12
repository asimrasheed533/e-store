import { tokenCookie } from "cookies";

export default async function authCheck(request: any) {
  const cookieHeader = request.headers.get("Cookie");

  console.log(cookieHeader, "cookieHeader");

  const token = await tokenCookie.parse(cookieHeader);

  return token;
}
