import { Link } from "react-router-dom";

export default function Button({ children, href }) {
    return   <Link to={href}>{children}</Link>
}