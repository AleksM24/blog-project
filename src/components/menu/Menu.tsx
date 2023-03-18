import "./Menu.scss";
import MenuItem from "./MenuItem";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

type Props = { favorData: { totalCount: number } };

const Menu = ({ favorData }: Props) => {
  const isFavorLiked = () => {
    if (favorData.totalCount > 0) return <FavoriteIcon />;
    else return <FavoriteBorderIcon />;
  };

  return (
    <div className="menu">
      <MenuItem to={"/"}>Home</MenuItem>
      <MenuItem to={"/about"}>About</MenuItem>
      <MenuItem to={"/adventures"}>Adventures</MenuItem>
      <MenuItem to={"/places"}>Places</MenuItem>
      <MenuItem to={"/guides"}>Guides</MenuItem>
      <MenuItem to={"/favorites"}>
        <span className="favorites-menu-title">Favorites</span> {isFavorLiked()}
        <span className="favorites-like-icon">{favorData.totalCount}</span>
      </MenuItem>
    </div>
  );
};

export default Menu;
