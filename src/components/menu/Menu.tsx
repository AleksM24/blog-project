import "./Menu.scss";
import MenuItem from "./MenuItem";

type Props = {};

const Menu = (props: Props) => {
  return (
    <div className="menu">
      <MenuItem to={"/"}>Home</MenuItem>
      <MenuItem to={"/about"}>About</MenuItem>
      <MenuItem to={"/adventures"}>Adventures</MenuItem>
      <MenuItem to={"/places"}>Places</MenuItem>
      <MenuItem to={"/guides"}>Guides</MenuItem>
      <MenuItem to={"/favorites"}>Favorites</MenuItem>
    </div>
  );
};

export default Menu;
