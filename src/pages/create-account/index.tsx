import { useState } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import ToggleButton from "@mui/material/ToggleButton";
import PetForm from "./components/PetForm";
import ServiceForm from "./components/ServiceForm";
import InfoBanner from "./components/InfoBanner";
import { Typography } from "@mui/material";

const Index = () => {
  const [alignment, setAlignment] = useState("pet");

  const handleAlignment = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string
  ) => {
    setAlignment(newAlignment);
  };

  return (
    <Box>
      <Grid container spacing={10}>
        <Grid item xs={4}>
          <InfoBanner />
        </Grid>
        <Grid item xs={8}>
          <Box mt={10}>
            <div>
              <Typography variant="h4" mb={2}>
                Crear cuenta
              </Typography>
              <Typography mb={1}>¿Tipo de cuenta?</Typography>
            </div>
            <ToggleButtonGroup
              color="primary"
              value={alignment}
              exclusive
              onChange={handleAlignment}
              aria-label="text alignment"
            >
              <ToggleButton value="pet">
                <p>Mascota</p>
              </ToggleButton>
              <ToggleButton value="service">
                <p>Servicio</p>
              </ToggleButton>
            </ToggleButtonGroup>
            <Box
              sx={{
                width: "70%",
              }}
              mt={4}
            >
              {alignment === "pet" ? <PetForm /> : <ServiceForm />}
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Index;
