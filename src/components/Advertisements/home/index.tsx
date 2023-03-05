import Box from "@mui/material/Box";
import Image from "next/image";
import BannerImage from "@/assets/images/banner.jpeg";

const Index = () => {
  return (
    <Box
      sx={{
        margin: "20px 0",
      }}
    >
      <Image
        priority
        src={BannerImage}
        alt="Banner-Logo"
        data-testid="banner"
      />
    </Box>
  );
};

export default Index;
