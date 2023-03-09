import { useState } from "react";
import styled from "styled-components";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import ImageConcurso from "@/assets/images/consurso.jpeg";
import IconCalendar from "@/assets/icons/calendar.svg";
import IconTimes from "@/assets/icons/times.svg";
import IconClock from "@/assets/icons/clock.svg";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import IconHeart from "@/assets/icons/heart.svg";
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
import DrawerInfoEvent from "./DrawerInfoEvent";

const Banner = styled(Image)`
  height: 140px;
  width: 100%;
  box-shadow: 0px 14px 16px -6px rgb(0 0 0 / 20%);
  border-radius: 10px;
`;

const Card = styled(Box)`
  position: relative;
  background-color: #fff;
  border-radius: 12px;
  cursor: pointer;
  padding: 5px;
  transition: 0.3s ease-out;
  border: 1px solid #7b8fa125;
  padding: 10px;
  &:hover {
    transform: scale(1.02);
  }
`;

const Name = styled(Typography)`
  margin-top: 10px;
  font-size: 15px;
  font-weight: bold;
`;

const TimeDate = styled(Typography)`
  font-size: 12px;
  color: #7b8fa1;
`;

const ContentDrawer = styled(Box)`
  height: 100vh;
  padding: 20px;
`;

const CloseModal = styled(Box)`
  display: flex;
  justify-content: flex-end;
  margin: 0 10px 10px;
`;

const Index = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <Card>
      <Banner
        priority
        src={ImageConcurso}
        alt="icon-heart"
        data-testid="heart"
      />
      <Grid container spacing={3} alignItems="center">
        <Grid item xs={9.5}>
          <Name>Concurso de talendtos de mascotas 2023</Name>
        </Grid>
        <Grid item xs={2.5}>
          <IconButton aria-label="like" color="primary">
            <Image
              width={18}
              height={18}
              priority
              src={IconHeart}
              alt="icon-heart"
              data-testid="heart"
            />
          </IconButton>
        </Grid>
      </Grid>
      <Box mt={1} mb={1}>
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={6}>
            <Stack direction="row" spacing={1} alignItems="center">
              <Image
                width={12}
                height={12}
                src={IconCalendar}
                alt="icon-calendar"
              />
              <TimeDate>10 Nov 2023</TimeDate>
            </Stack>
          </Grid>
          <Grid item xs={6}>
            <Stack direction="row" spacing={1} alignItems="center">
              <Image width={12} height={12} src={IconClock} alt="icon-clock" />
              <TimeDate>20:00 PM</TimeDate>
            </Stack>
          </Grid>
        </Grid>
      </Box>
      <Box mt={1}>
        <Button onClick={() => setOpenDrawer(true)} size="small">
          Ver detalles
        </Button>
      </Box>
      <Drawer
        anchor="bottom"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <ContentDrawer>
          <CloseModal>
            <IconButton onClick={() => setOpenDrawer(false)}>
              <Image
                width={18}
                height={18}
                priority
                src={IconTimes}
                alt="icon-times"
                data-testid="times"
              />
            </IconButton>
          </CloseModal>
          <DrawerInfoEvent />
        </ContentDrawer>
      </Drawer>
    </Card>
  );
};

export default Index;
