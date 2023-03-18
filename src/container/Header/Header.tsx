import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Menu from "components/menu/Menu";
import Logo from "components/logo/Logo";
import { Container } from "@mui/material";
import "./Header.scss";

type Props = { favorData: { totalCount: number } };

const Header = ({ favorData }: Props) => {
  return (
    <AppBar position="sticky" className="app-bar">
      <Container maxWidth="xl">
        <Toolbar className="toolbar">
          <Logo />
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
          ></Typography>
          <Menu favorData={favorData} />
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;
