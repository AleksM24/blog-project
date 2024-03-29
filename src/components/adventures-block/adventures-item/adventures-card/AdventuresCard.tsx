import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CardFooter from "./card-footer/CardFooter";
import "../adventures-card/AdventuresCard.scss";
import { Link } from "react-router-dom";

type Props = {
  title: string;
  description: string;
  id: number;
  category: string;
  ctg: string;
};

const AdventuresCard = ({ title, category, description, id, ctg }: Props) => {
  return (
    <Card className="adv-card" sx={{ maxWidth: 375 }}>
      <section className="card-wrap">
        <CardContent>
          <Button className="category-btn">
            <Link className="category-btn-link" to={"/adventures"}>
              {category}
            </Link>
          </Button>
          <Typography className="card-title" variant="h2" component="div">
            <Link
              className="adventures-posts-link"
              to={`/adventuresPosts/${id}`}
            >
              {title}
            </Link>
          </Typography>
          <Typography className="card-text" variant="body2">
            {description}
          </Typography>
          <CardFooter />
        </CardContent>
      </section>
    </Card>
  );
};

export default AdventuresCard;
