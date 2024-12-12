import { redirect } from "react-router";
import authCheck from "utils/authCheck";
import { Route } from "./+types/customer._index";

export async function loader({ request }: Route.LoaderArgs) {
  const token = await authCheck(request);

  if (!token) {
    return redirect("/customer/login");
  }
}

export default function customerDashboard() {
  return <div>customerDashboard</div>;
}
