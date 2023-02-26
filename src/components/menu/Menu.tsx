import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import "./Menu.scss";

type Props = {};

const Menu = (props: Props) => {
  return (
    <div className="menu">
      <Button className="menu-btn" color="inherit">
        <Link className="menu-btn-link" to={"/"}>Home</Link>
      </Button>
      <Button className="menu-btn" color="inherit">
        <Link className="menu-btn-link" to={"/about"}>About</Link>
      </Button>
      <Button className="menu-btn" color="inherit">
        <Link className="menu-btn-link" to={"/adventures"}>Adventures</Link>
      </Button>
      <Button className="menu-btn" color="inherit">
        <Link className="menu-btn-link" to={"/places"}>Places</Link>
      </Button>
      <Button className="menu-btn" color="inherit">
        <Link className="menu-btn-link" to={"/guides"}>Guides</Link>
      </Button>
      <Button className="menu-btn" color="inherit">
        <Link className="menu-btn-link" to={"/favorites"}>Favorites</Link>
      </Button>
    </div>
  );
};

export default Menu;
