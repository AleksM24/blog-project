import "./Menu.scss";
import MenuItem from "./MenuItem";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

type Props = {};

const Menu = (props: Props) => {
  return (
    <div className="menu">
      <MenuItem to={"/"}>Home</MenuItem>
      <MenuItem to={"/about"}>About</MenuItem>
      <MenuItem to={"/adventures"}>Adventures</MenuItem>
      <MenuItem to={"/places"}>Places</MenuItem>
      <MenuItem to={"/guides"}>Guides</MenuItem>
      <MenuItem to={"/favorites"}>
        Favorites <FavoriteBorderIcon />
        <span>0</span>
      </MenuItem>
    </div>
  );
};

export default Menu;
