import logo from "assets/logo.png";
import { Link } from "react-router-dom";
import "./Logo.scss";

type Props = {};

const Logo = (props: Props) => {
  return (
    <Link className="logo" to={"/"}>
      <div>
        <img src={logo} alt="Logo" />
      </div>
    </Link>
  );
};
export default Logo;
