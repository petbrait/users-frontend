import Link from "next/link";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import ProfileInfo from "./ProfileInfo";
import Favorites from "./Favorites";
import Photos from "./Photos";

interface ProfileMainProps {
  activeTab: string | any;
}

const Index = ({ activeTab }: ProfileMainProps) => {
  return (
    <Box
      sx={{
        marginBottom: "20px",
      }}
    >
      {activeTab === "profile" && <ProfileInfo />}
      {activeTab === "favorites" && <Favorites />}
      {activeTab === "pictures" && <Photos />}
    </Box>
  );
};

export default Index;
