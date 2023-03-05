import Box from "@mui/material/Box";
import { Typography } from "@mui/material";

const Index = () => {
  return (
    <Box
      sx={{
        backgroundColor: "primary.main",
        height: "calc(100vh - 20px)",
        borderRadius: "12px",
        margin: "10px 0 10px 10px",
      }}
    >
      <Typography
        sx={{
          color: "#fff",
          padding: "50px 0 0 30px",
          letterSpacing: "2.5px",
          fontSize: "18px",
        }}
      >
        PETBRAIT
      </Typography>
      <Typography
        sx={{
          color: "#fff",
          padding: "50px 30px 0 30px",
          fontSize: "25px",
        }}
      >
        Vaya! todo lo encuentro aquí
      </Typography>
    </Box>
  );
};

export default Index;
