import { ViewWrapper } from "@/styles/components";
import Logo from "@/components/Logo";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import NearEventsSelect from "./components/NearEventsSelect";
import Banner from "./components/Banner";
import { ContentServices } from "@/styles/components";
import EventCard from "@/components/EventCard";

const Index = () => {
  return (
    <ViewWrapper>
      <Logo />
      <Box mr={8} ml={6}>
        <Banner />
        <NearEventsSelect />
        <ContentServices>
          <Grid container spacing={3} alignItems="center">
            {[1, 2, 3, 4, 5] &&
              [1, 2, 3, 4, 5].map((vet) => (
                <Grid item xs={3}>
                  <EventCard />
                </Grid>
              ))}
          </Grid>
        </ContentServices>
      </Box>
    </ViewWrapper>
  );
};

export default Index;
