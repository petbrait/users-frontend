import styled from "styled-components";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Image from "next/image";
import TrainingImage from "@/assets/images/training.webp";

export const Title = styled(Typography)`
  font-size: 40px;
  line-height: 50px;
  font-weight: bold;
  color: #4649ff;
`;

const Index = () => {
  return (
    <Grid container spacing={5} alignItems="center">
      <Grid item xs={5}>
        <Title>Diviertete, Aprende, Animate</Title>
        <p>Demustra que tu perro, puede hacer cosas increibles</p>
      </Grid>
      <Grid item xs={7}>
        <Image
          style={{
            width: "100%",
            height: "330px",
            objectFit: "cover",
            borderRadius: 10,
          }}
          priority
          src={TrainingImage}
          alt="Banner-Logo"
          data-testid="banner"
        />
      </Grid>
    </Grid>
  );
};

export default Index;
