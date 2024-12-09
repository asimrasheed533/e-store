import PuffLoader from "react-spinners/PuffLoader";

export default function Loader({ small = false, color = "var(--golden)" }) {
  return <PuffLoader loading={true} color={color} size={small ? 20 : 30} />;
}
