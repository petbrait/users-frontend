import { useRouter } from "next/router";
import { ViewWrapper } from "@/styles/components";
import Grid from "@mui/material/Grid";
import Logo from "@/components/Logo";
import ProfileBar from "./components/ProfileBar";
import ProfileMain from "./components/ProfileMain";

const Index = () => {
  const router = useRouter();
  const tab = router.query;
  return (
    <ViewWrapper>
      <Logo />
      <Grid container spacing={5}>
        <Grid item xs={2}>
          <ProfileBar activeTab={tab.tab} />
        </Grid>
        <Grid item xs={10}>
          <ProfileMain activeTab={tab.tab} />
        </Grid>
      </Grid>
    </ViewWrapper>
  );
};

export default Index;
