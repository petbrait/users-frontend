import { useState } from "react";
import styled from "styled-components";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import IconHeart from "@/assets/icons/heart.svg";
import Image from "next/image";
import ModalInfo from "@/components/VetCard/components/ModalInfo";

const Card = styled(Box)`
  position: relative;
  background-color: #fff;
  border-radius: 10px;
  cursor: pointer;
  padding: 5px;
  transition: 0.3s ease-out;
  &:hover {
    transform: scale(1.02);
    box-shadow: 0 8px 16px rgb(0 0 0 / 8%), 0 4px 8px rgb(0 0 0 / 6%);
  }
`;

const Name = styled(Typography)`
  font-size: 13px;
  font-weight: bold;
`;

const Address = styled(Typography)`
  font-size: 12px;
  margin-bottom: 5px;
  & strong {
    margin-right: 3px;
    color: #4c4c4c;
  }
`;

const ContentFavoriteIcon = styled(Box)`
  position: absolute;
  top: 10px;
  right: 10px;
`;

interface markerProps {
  view: string;
  name: string;
  address: string;
  phone_number?: string | undefined | null;
  position: {
    lat: number;
    lng: number;
  };
  service: number;
  service_type: number;
}

const Index = (vet: markerProps) => {
  const [open, setOpen] = useState(false);
  const [tab, setTab] = useState(1);
  const handleOpen = (value: number) => {
    setOpen(true);
    setTab(value);
  };
  const handleClose = () => setOpen(false);
  return (
    <Card>
      <Avatar
        src="../../assets/images/logo-petco.png"
        alt="Logo Petco"
        variant="rounded"
        sx={{ width: "100%", height: 140, borderRadius: 5, bgcolor: "#e5e5e5" }}
        onClick={() => handleOpen(1)}
      />
      <ContentFavoriteIcon>
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
      </ContentFavoriteIcon>
      <Box mt={1} pl={0.5} pr={0.5} onClick={() => handleOpen(1)}>
        <Name>{vet.name}</Name>
        {/* <Address>{address}</Address> */}
        <Rating
          size="small"
          name="half-rating"
          defaultValue={5}
          precision={0.5}
          readOnly
        />
      </Box>
      <Box pl={0.5} pr={0.5} pb={0.5} onClick={() => handleOpen(2)}>
        <Button size="small">Agendar cita</Button>
      </Box>
      <ModalInfo open={open} handleClose={handleClose} tab={tab} vet={vet} />
    </Card>
  );
};

export default Index;
