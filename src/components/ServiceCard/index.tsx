import styled from "styled-components";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Image from "next/image";
import ArrowImage from "@/assets/icons/arrowIcon.svg";
import IconHeart from "@/assets/icons/heart.svg";
import IconTruck from "@/assets/icons/truck.svg";
import Button from "@mui/material/Button";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import CtaBookAppoiment from "@/components/CtaBookAppoiment";

interface cardProps {
  view: string;
}

const Card = styled(Box)<cardProps>`
  background-color: #fff;
  border-radius: 5px;
  padding: ${({ view }) => (view === "map" ? "10px" : "20px")};
  cursor: pointer;
`;

const Name = styled(Typography)`
  font-size: 18px;
  margin-bottom: 6px;
`;

const Address = styled(Typography)`
  font-size: 12px;
  margin-bottom: 5px;
  & strong {
    margin-right: 3px;
    color: #4c4c4c;
  }
`;

const PhoneNumber = styled(Typography)`
  font-size: 12px;
  margin-bottom: 5px;
  & strong {
    margin-right: 3px;
    color: #4c4c4c;
  }
`;

const ContentServiceType = styled(Box)`
  margin: 10px 0;
`;

const ServiceType = styled(Typography)`
  color: #03c988;
  font-size: 11px;
`;

interface markerProps {
  view: string;
  name: string;
  address: string;
  phone_number?: string | undefined | null;
  service: number;
  service_type: number;
}

const Index = ({
  view,
  name,
  address,
  phone_number,
  service,
  service_type,
}: markerProps) => {
  const data = {
    name,
    address,
    phone_number,
    service_type,
  };

  return (
    <Card view={view}>
      <Grid
        container
        spacing={0}
        direction="row"
        alignItems="center"
        sx={{ marginBottom: "10px" }}
      >
        <Grid item xs={11}>
          <Name variant="h4">{name}</Name>
        </Grid>
        <Grid item xs={1}>
          <Image
            width={15}
            height={15}
            priority
            src={IconHeart}
            alt="icon-heart"
            data-testid="heart"
          />
        </Grid>
      </Grid>
      <Address color="common.silver">
        <strong>Dirección:</strong>
        {address}
      </Address>
      {phone_number && (
        <PhoneNumber color="common.silver">
          <strong>Tel:</strong>
          {phone_number}
        </PhoneNumber>
      )}
      <Accordion>
        <AccordionSummary
          expandIcon={
            <Image
              width={15}
              height={15}
              priority
              src={ArrowImage}
              alt="icon-arrow"
              data-testid="arrow"
            />
          }
          aria-controls="panel1a-content"
        >
          <Address color="common.silver">
            <strong>Horarios:</strong>
            Hoy 10:00 am - 8:00 pm
          </Address>
        </AccordionSummary>
        <AccordionDetails>
          <hr style={{ margin: "7px 0" }} />
          <Stack direction="column" spacing={0}>
            <Address color="common.silver">
              <strong>Lunes:</strong>
              9:00 am - 7:00 pm
            </Address>
            <Address color="common.silver">
              <strong>Martes:</strong>
              9:00 am - 7:00 pm
            </Address>
            <Address color="common.silver">
              <strong>Miercoles:</strong>
              9:00 am - 7:00 pm
            </Address>
            <Address color="common.silver">
              <strong>Jueves:</strong>
              9:00 am - 7:00 pm
            </Address>
            <Address color="common.silver">
              <strong>Viernes:</strong>
              9:00 am - 7:00 pm
            </Address>
            <Address color="common.silver">
              <strong>Sabado:</strong>
              11:00 am - 4:00 pm
            </Address>
            <Address color="common.silver">
              <strong>Domingo:</strong>
              Cerrado
            </Address>
          </Stack>
        </AccordionDetails>
      </Accordion>
      {service_type === 2 && (
        <ContentServiceType>
          <Stack direction="row" spacing={1} alignItems="center">
            <Image
              width={15}
              height={15}
              priority
              src={IconTruck}
              alt="icon-truck"
              data-testid="truck"
            />
            <ServiceType>Servicio solamente a domicilio</ServiceType>
          </Stack>
        </ContentServiceType>
      )}
      <Rating
        size="small"
        name="half-rating"
        defaultValue={2.5}
        precision={0.5}
      />
      <Grid container spacing={0} direction="row" alignItems="flex-end">
        <Grid item xs={10.5}>
          <Box>
            {service === 1 ? (
              <Button>Ver catalogo</Button>
            ) : (
              <CtaBookAppoiment {...data} />
            )}
          </Box>
        </Grid>
        <Grid item xs={1.5}>
          <Box>
            <Avatar alt="Logo Petco" src="../../assets/images/logo-petco.png" />
          </Box>
        </Grid>
      </Grid>
    </Card>
  );
};

export default Index;
