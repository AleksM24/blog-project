import { Button } from "@mui/material";
import { NavLink } from "react-router-dom";
import "./Menu.scss";

type Props = {
  to: string;
  children: React.ReactNode;
};

const MenuItem = ({ to, children }: Props) => {
  return (
    <Button className="menu-btn" color="inherit">
      <NavLink
        className={({ isActive }) =>
          isActive ? "active-menu-btn-link" : "menu-btn-link"
        }
        to={to}
      >
        {children}
      </NavLink>
    </Button>
  );
};
export default MenuItem;