import Link from "next/link";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import AddressPoint from "@/components/AddressPoint";

const Index = () => {
  return (
    <Box
      sx={{
        position: "relative",
        marginBottom: "20px",
        zIndex: 1,
      }}
    >
      <Grid
        container
        spacing={0}
        justifyContent="space-between"
        alignItems="center"
      >
        <Grid item xs={9}>
          <Link href="/home">
            <Typography
              sx={{
                display: "initial",
                color: "#000",
                letterSpacing: "2.5px",
                fontSize: "18px",
              }}
            >
              PETBRAIT
            </Typography>
          </Link>
        </Grid>
        <Grid item xs={2}>
          <AddressPoint icon={true} design={1} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Index;
