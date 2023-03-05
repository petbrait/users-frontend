import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import BadgeProfilePet from "@/components/BadgeProfilePet";
import Grid from "@mui/material/Grid";

const Index = () => {
  const lostPets = [
    {
      name: "Ronaldo",
      race: "Chihuahueño",
      color: "Gris con negro",
      description:
        "Se salio de casa y no lo hemos visto, la ultima vez visto fue en la calle sicomoros 191",
      status: 1,
      reward: "1000",
      contact: "5615141075",
    },
    {
      name: "Laika",
      race: "Cooker",
      color: "Blanco con cafe",
      description:
        "Se salio de casa y no lo hemos visto, la ultima vez visto fue en la calle sicomoros 191",
      status: 1,
      reward: "500",
      contact: "5615141075",
    },
    {
      name: "Tiburonsin",
      race: "Criollo Albino",
      color: "Gris con negro",
      description:
        "Se salio de casa y no lo hemos visto, la ultima vez visto fue en la calle sicomoros 191",
      status: 1,
      reward: "200",
      contact: "5615141075",
    },
    {
      name: "Tikitin",
      race: "Buldog Frances",
      color: "Gris con negro",
      description:
        "Se salio de casa y no lo hemos visto, la ultima vez visto fue en la calle sicomoros 191",
      status: 1,
      reward: "1000",
      contact: "5615141075",
    },
  ];

  return (
    <Box>
      <Typography
        sx={{
          fontSize: "20px",
        }}
      >
        Mascotas perdidas cerca de ti
      </Typography>
      <Typography
        sx={{
          fontSize: "13px",
        }}
      >
        Tlalpan, CDMX
      </Typography>
      <Box sx={{ margin: "20px 0 60px" }}>
        <Grid container spacing={5} alignItems="center" justifyContent="center">
          {lostPets &&
            lostPets.map((pet) => (
              <Grid item xs={3}>
                <BadgeProfilePet {...pet} />
              </Grid>
            ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Index;
