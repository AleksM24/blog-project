import { Container, Grid } from "@mui/material";
import ourTeamArray from "utils/ourTeamArray";
import CoworkerCard from "./coworker-card/CoworkerCard";
import "./OurTeam.scss";

type Props = {};

const OurTeam = (props: Props) => {
  return (
    <section className="our-team-wrapper">
      <Container maxWidth="md">
        <div className="our-team-title">Our team</div>
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          {ourTeamArray.map(({ id, photo, name, position }) => (
            <Grid item xs={12} sm={6} md={4} key={id}>
              <CoworkerCard
                photo={photo}
                name={name}
                position={position}
                id={0}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </section>
  );
};
export default OurTeam;
