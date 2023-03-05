import styled from "styled-components";
import { useState } from "react";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Stack from "@mui/material/Stack";
import Calendar from "@/components/Calendar";
import "react-calendar/dist/Calendar.css";

const Title = styled(Typography)`
  font-size: 24px;
`;

const Name = styled(Typography)`
  color: #7b8fa1;
  font-weight: 500;
`;

const ItemDate = styled(Box)`
  width: 65px;
  padding: 12px 5px;
  text-align: center;
  background-color: rgba(70, 73, 255, 0.08);
  font-family: "Poppins";
  font-size: 14px;
  font-weight: 400;
  margin-top: 14px;
  border-radius: 6px;
  cursor: pointer;
`;

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  borderRadius: "6px",
  boxShadow: 24,
  p: 4,
};

interface ctaBookAppoimentProps {
  name: string;
  address: string;
  phone_number?: string | undefined | null;
  service_type: number;
}

const Index = ({ name, service_type }: ctaBookAppoimentProps) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button
        onClick={handleOpen}
        sx={{ marginTop: "15px", color: "#fff" }}
        variant="contained"
        size="small"
      >
        Agendar cita
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Title id="modal-modal-title">Agenda una cita</Title>
          <Name id="modal-modal-title">{name}</Name>
          <hr />
          <Grid container spacing={5} direction="row" alignItems="flex-start">
            <Grid item xs={6}>
              <Calendar />
            </Grid>
            <Grid item xs={6}>
              <Typography sx={{ mt: 2 }}>Selecciona una hora</Typography>
              <Box>
                <Grid container direction="row">
                  <Grid item xs={4}>
                    <ItemDate>11:00 AM</ItemDate>
                  </Grid>
                  <Grid item xs={4}>
                    <ItemDate>2:00 PM</ItemDate>
                  </Grid>
                  <Grid item xs={4}>
                    <ItemDate>2:30 PM</ItemDate>
                  </Grid>
                  <Grid item xs={4}>
                    <ItemDate>4:00 PM</ItemDate>
                  </Grid>
                  <Grid item xs={4}>
                    <ItemDate>4:30 PM</ItemDate>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          </Grid>
          <Box mt={4}>
            <Button variant="contained" fullWidth={true}>
              Agendar
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
};

export default Index;
