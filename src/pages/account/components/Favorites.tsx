import Box from "@mui/material/Box";
import { Title } from "../styles";
import { ContentServices } from "@/styles/components";
import Grid from "@mui/material/Grid";
import { vets } from "@/pages/api/vtes";
import ServiceCard from "@/components/ServiceCard";

const Index = () => {
  return (
    <Box>
      <Box>
        <Title>Mis favoritos</Title>
      </Box>
      <ContentServices>
        <Grid container spacing={5} alignItems="center">
          {vets &&
            vets.map((vet) => (
              <Grid item xs={4}>
                <ServiceCard view="grid" {...vet} />
              </Grid>
            ))}
        </Grid>
      </ContentServices>
    </Box>
  );
};

export default Index;
