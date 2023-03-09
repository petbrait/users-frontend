import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ServiceItem from "./components/ServiceItem";
import Advertisements from "@/components/Advertisements/home";
import IconVet from "@/assets/icons/vet.png";
import IconStore from "@/assets/icons/stores.png";
import IconAesthetic from "@/assets/icons/aesthetic.png";
import IconTraining from "@/assets/icons/training.png";
import IconEventPet from "@/assets/icons/event-pet.png";
import IconAdoption from "@/assets/icons/adoption.png";
import IconPark from "@/assets/icons/park.png";

const Index = () => {
  interface servicesProps {
    link: string;
    label: string;
    icon: any;
    isNew?: boolean;
  }

  const services: Array<servicesProps> = [
    {
      link: "/vet",
      label: "Veterinarias",
      icon: IconVet,
    },
    {
      link: "/stores",
      label: "Tiendas",
      icon: IconStore,
    },
    {
      link: "/esthetic",
      label: "Esteticas",
      icon: IconAesthetic,
    },
    {
      link: "/training",
      label: "Adiestramiento",
      icon: IconTraining,
    },
    {
      link: "/events",
      label: "Eventos",
      icon: IconEventPet,
    },
    {
      link: "/parks",
      label: "Parques",
      icon: IconPark,
    },
    {
      link: "/adoption",
      label: "Refugios de adopción",
      icon: IconAdoption,
      isNew: true,
    },
  ];

  return (
    <Box>
      <Box
        sx={{
          marginTop: "30px",
        }}
      >
        <Typography
          sx={{
            fontSize: "20px",
          }}
        >
          ¿Qué necesitas?
        </Typography>
        <Box
          sx={{
            display: "flex",
            gap: "40px",
            marginTop: "20px",
          }}
        >
          {services &&
            services.map((service, i) => <ServiceItem key={i} {...service} />)}
        </Box>
      </Box>
      <Box>
        <Advertisements />
      </Box>
      {/* <Box>
        <Typography
          sx={{
            fontSize: "20px",
          }}
        >
          Registra tu negocio con nosotros
        </Typography>
      </Box> */}
    </Box>
  );
};

export default Index;
