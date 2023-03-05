import { ViewWrapper } from "@/styles/components";
import { useState } from "react";
import Grid from "@mui/material/Grid";
import VetCard from "@/components/VetCard";
import Finder from "@/components/Finder";
import Heading from "@/components/Heading";
import IconVet from "@/assets/icons/vet.png";
import Logo from "@/components/Logo";
import SetView from "@/components/SetView";
import ProfileBadge from "@/components/ProfileBadge";
import Map from "@/components/Map";
import { vets } from "@/pages/api/vtes";
import { ContentServices } from "@/styles/components";

const Index = () => {
  const [view, setViewHandler] = useState("list");

  return (
    <ViewWrapper>
      <Logo />
      <Heading title="Veterinarias" icon={IconVet} />
      <Grid container spacing={10} alignItems="center">
        <Grid item xs={8}>
          <SetView view={view} setViewHandler={setViewHandler} />
        </Grid>
        <Grid item xs={4}>
          <Finder />
        </Grid>
      </Grid>
      <ContentServices>
        {view === "list" ? (
          <Grid container spacing={3} alignItems="center">
            {vets &&
              vets.map((vet) => (
                <Grid item xs={1.6}>
                  <VetCard view="grid" {...vet} />
                </Grid>
              ))}
          </Grid>
        ) : (
          <Map height="500px" />
        )}
      </ContentServices>
      <ProfileBadge />
    </ViewWrapper>
  );
};

export default Index;
