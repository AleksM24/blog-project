import logo from "assets/logo.png";
import "./Logo.scss";

type Props = {};

const Logo = (props: Props) => {
  return (
    <div className="logo">
      <img src={logo} alt="Logo" />
    </div>
  );
};
export default Logo;
