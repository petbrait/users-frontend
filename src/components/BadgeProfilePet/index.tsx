import { useState } from "react";
import styled from "styled-components";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import Modal from "@mui/material/Modal";
import InfoLostsPets from "@/pages/losts-pets/components/InfoLostsPets";

const Wrap = styled(Box)`
  background-color: #f2f2f2a6;
  padding: 15px;
  cursor: pointer;
`;

const Name = styled(Typography)`
  font-size: 18px;
`;

const Race = styled(Typography)`
  font-size: 11px;
`;

interface badgeProfilePetProps {
  name: string;
  race: string;
  color: string;
  description: string;
  status?: number;
  reward: string;
  contact: string;
}

const Index = ({
  name,
  race,
  color,
  description,
  reward,
  contact,
}: badgeProfilePetProps) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const infoPet = {
    name,
    race,
    color,
    description,
    reward,
    contact,
  };

  return (
    <Wrap>
      <Grid
        onClick={handleOpen}
        container
        spacing={5}
        alignItems="center"
        justifyContent="center"
      >
        <Grid item xs={2}>
          <Avatar
            sx={{ bgcolor: "#FFF1DC" }}
            alt={name}
            src="../../assets/images/logo-petco.png"
            variant="rounded"
          />
        </Grid>
        <Grid item xs={10}>
          <Name>{name}</Name>
          <Race>{race}</Race>
        </Grid>
      </Grid>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <InfoLostsPets {...infoPet} />
      </Modal>
    </Wrap>
  );
};

export default Index;
