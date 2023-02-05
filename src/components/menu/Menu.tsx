import { Button } from "@mui/material"
import "./Menu.scss"


type Props = {}

const Menu = (props: Props) => {
  return (
    <div className="menu">
        <Button className="menu-btn" color="inherit">Home</Button>
        <Button className="menu-btn" color="inherit">About</Button>
        <Button className="menu-btn" color="inherit">Adventures</Button>
        <Button className="menu-btn" color="inherit">Places</Button>
        <Button className="menu-btn" color="inherit">Guides</Button>
        <Button className="menu-btn" color="inherit">Favorites</Button>
    </div>
  )
}
export default Menu