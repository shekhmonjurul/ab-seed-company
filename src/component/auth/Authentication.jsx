import { Navigate } from "react-router-dom";
import Cookies from "js-cookie"

export default function Authentication({ children }) {
    const token = Cookies.get("token") // JWT or any auth key
  if (!token) {
    return <Navigate to="/login" replace />;
  }
  return children;
}
