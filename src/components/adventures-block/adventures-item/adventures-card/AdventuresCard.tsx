import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "../adventures-card/AdventuresCard.scss";

type Props = {};

const AdventuresCard = (props: Props) => {
  return (
    <Card className="adv-card" sx={{ maxWidth: 375 }}>
      <section className="card-wrap">
        <CardContent>
          <Button className="category-btn">Adventures</Button>
          <Typography className="card-title" variant="h2" component="div">
            Donec tempor pur
          </Typography>
          <Typography className="card-text" variant="body2">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliquum.
          </Typography>
        </CardContent>
      </section>
    </Card>
  );
};

export default AdventuresCard;
