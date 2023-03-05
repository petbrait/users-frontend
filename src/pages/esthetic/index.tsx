import { useState } from "react";
import { ViewWrapper } from "@/styles/components";
import Logo from "@/components/Logo";
import IconAesthetic from "@/assets/icons/aesthetic.png";
import Heading from "@/components/Heading";
import Grid from "@mui/material/Grid";
import SetView from "@/components/SetView";
import Finder from "@/components/Finder";
import ProfileBadge from "@/components/ProfileBadge";
import ServiceCard from "@/components/ServiceCard";
import Map from "@/components/Map";
import { aesthetic } from "@/pages/api/aesthetic";
import { ContentServices } from "@/styles/components";

const Index = () => {
  const [view, setViewHandler] = useState("list");

  return (
    <ViewWrapper>
      <Logo />
      <Heading title="Esteticas" icon={IconAesthetic} />
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
          <Grid container spacing={5} alignItems="center">
            {aesthetic &&
              aesthetic.map((store) => (
                <Grid item xs={4}>
                  <ServiceCard view="grid" {...store} />
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
