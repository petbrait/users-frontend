import { useState } from "react";
import styled from "styled-components";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Stack from "@mui/material/Stack";
import Calendar from "@/components/Calendar";
import Avatar from "@mui/material/Avatar";
import { modalStyles } from "@/styles/components";

const Title = styled(Typography)`
  font-size: 19px;
  font-weight: bold;
`;

const About = styled(Typography)`
  font-size: 13px;
  margin-bottom: 10px;
`;

const Address = styled(Typography)`
  font-size: 12px;
  margin-bottom: 5px;
  color: #7b8fa1;
`;

const Label = styled(Typography)`
  font-size: 13px;
  font-weight: 500;
`;

interface modalInfoProps {
  open: boolean;
  handleClose: any;
  tab: number;
  vet: {
    view: string;
    name: string;
    about: string;
    address: string;
    phone_number?: string | undefined | null;
    position: {
      lat: number;
      lng: number;
    };
    assigned_pets: number;
    service: number;
    service_type: number;
  };
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const Index = ({ open, handleClose, tab, vet }: modalInfoProps) => {
  const [value, setValue] = useState(tab);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={modalStyles(550)}>
        <Stack direction="row" spacing={1} alignItems="center">
          <Avatar
            sx={{ bgcolor: "#FFF1DC" }}
            src="../../assets/images/logo-petco.png"
            variant="rounded"
          />
          <Box>
            <Title>{vet.name}</Title>
            <Rating
              size="small"
              name="half-rating"
              defaultValue={5}
              precision={0.5}
              readOnly
            />
          </Box>
        </Stack>
        <Box mt={1} mb={0} sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs value={value} onChange={handleChange}>
            <Tab label="Información" {...a11yProps(1)} />
            <Tab label="Agendar cita" {...a11yProps(2)} />
          </Tabs>
        </Box>
        {value === 0 && (
          <Box mt={3}>
            <About>{vet.about}</About>
            <Label>Dirección</Label>
            <Address>{vet.address}</Address>
            <Label>Numero de contacto</Label>
            <Address>{vet.phone_number}</Address>
            <Box mt={2}>
              <Label>Pacientes</Label>
              <Stack direction="row" spacing={0.5} alignItems="center" mt={1}>
                <Avatar
                  sx={{ bgcolor: "#BBD6B8" }}
                  src="../../assets/images/logo-petco.png"
                />
                <Avatar
                  sx={{ bgcolor: "#FFF1DC" }}
                  src="../../assets/images/logo-petco.png"
                />
                <Avatar
                  sx={{ bgcolor: "#C9EEFF" }}
                  src="../../assets/images/logo-petco.png"
                />
                <Label>+ 10</Label>
              </Stack>
            </Box>
          </Box>
        )}
        {value === 1 && <Calendar />}
      </Box>
    </Modal>
  );
};

export default Index;
