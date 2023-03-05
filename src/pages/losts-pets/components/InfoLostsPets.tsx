import Box from "@mui/material/Box";
import styled from "styled-components";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
import Map from "@/components/Map";
import Image from "next/image";
import Tooltip from "@mui/material/Tooltip";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import IconHeart from "@/assets/icons/heart.svg";
import IconShare from "@/assets/icons/share.svg";

const Name = styled(Typography)`
  font-size: 27px;
`;

const Race = styled(Typography)`
  font-size: 13px;
`;

const Contact = styled(Typography)`
  font-size: 13px;
  color: #000;
`;

const Date = styled(Typography)`
  font-size: 11px;
  color: grey;
`;

const Reward = styled(Typography)`
  margin-top: 10px;
  border: 1px solid #03c988;
  display: inline-block;
  padding: 3px 15px;
  font-size: 12.5px;
  color: #03c988;
  border-radius: 6px;
`;

const ContentMap = styled(Box)`
  margin: 20px 0 10px;
  & p {
    color: #000;
    margin-bottom: 10px;
    font-size: 13px;
  }
`;

const ContentPhotos = styled(Box)`
  margin: 20px 0px 10px;
  & p {
    color: #000;
    margin-bottom: 10px;
    font-size: 13px;
  }
`;

const ContentDescription = styled(Box)`
  margin: 10px 0px 0px;
  & h4 {
    color: #000;
    font-size: 16px;
    font-weight: 500;
  }
`;

const Description = styled(Typography)`
  margin: 5px 0;
  font-size: 13px;
  color: #000;
`;

const ContentInfo = styled(Box)`
  margin: 20px 0px 10px;
  & h4 {
    color: #000;
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 5px;
  }
`;

const Icon = styled(Box)`
  cursor: pointer;
  transition: all 0.3s ease-out;
  &:hover {
    transform: scale(1.15);
  }
`;

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 1250,
  bgcolor: "background.paper",
  borderRadius: "6px",
  boxShadow: 24,
  p: 4,
};

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
  const itemData = [
    {
      img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
      title: "Breakfast",
    },
    {
      img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
      title: "Burger",
    },
    {
      img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
      title: "Camera",
    },
    {
      img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
      title: "Coffee",
    },
    {
      img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
      title: "Hats",
    },
    {
      img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
      title: "Honey",
    },
    {
      img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
      title: "Basketball",
    },
    {
      img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
      title: "Fern",
    },
    {
      img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
      title: "Mushrooms",
    },
    {
      img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
      title: "Tomato basil",
    },
    {
      img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
      title: "Sea star",
    },
    {
      img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
      title: "Bike",
    },
  ];

  return (
    <Box sx={style}>
      <Box>
        <Grid
          container
          spacing={0}
          alignItems="center"
          justifyContent="space-between"
        >
          <Grid item xs={5}>
            <ContentPhotos>
              <ImageList
                variant="quilted"
                sx={{ width: 480, height: 510 }}
                cols={2}
                rowHeight={224}
              >
                {itemData.map((item) => (
                  <ImageListItem key={item.title}>
                    <img
                      // src="https://static.fundacion-affinity.org/cdn/farfuture/PVbbIC-0M9y4fPbbCsdvAD8bcjjtbFc0NSP3lRwlWcE/mtime:1643275542/sites/default/files/los-10-sonidos-principales-del-perro.jpg"
                      src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                      srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                      alt={item.title}
                      loading="lazy"
                    />
                  </ImageListItem>
                ))}
              </ImageList>
              {/* <PhotoSlider /> */}
            </ContentPhotos>
          </Grid>
          <Grid item xs={7}>
            <Grid container alignItems="center" justifyContent="space-between">
              <Grid item xs={10.5}>
                <Stack direction="row" spacing={1.5} alignItems="columns">
                  <Avatar
                    sx={{ bgcolor: "#FFF1DC", width: 66, height: 66 }}
                    alt={name}
                    src="../../assets/images/logo-petco.png"
                    variant="rounded"
                  />
                  <Box>
                    <Name>{name}</Name>
                    <Race>{race}</Race>
                  </Box>
                </Stack>
              </Grid>
              <Grid item xs={1.5}>
                <Stack direction="row" spacing={3.5} alignItems="columns">
                  <Tooltip title="Me gusta">
                    <Icon>
                      <Image
                        width={20}
                        height={20}
                        priority
                        src={IconHeart}
                        alt="icon-heart"
                        data-testid="heart"
                      />
                    </Icon>
                  </Tooltip>
                  <Tooltip title="Compartir">
                    <Icon>
                      <Image
                        width={20}
                        height={20}
                        priority
                        src={IconShare}
                        alt="icon-share"
                        data-testid="share"
                      />
                    </Icon>
                  </Tooltip>
                </Stack>
              </Grid>
            </Grid>

            <ContentInfo>
              <Typography variant="h4">Información</Typography>
              <Contact>Color: {color}</Contact>
              <Contact>Tel del dueño: {contact}</Contact>
              <Reward>Recompensa: ${reward}</Reward>
            </ContentInfo>
            <hr />
            <ContentDescription>
              <Typography variant="h4">Descripción del anunciante</Typography>
              <Description>{description}</Description>
            </ContentDescription>
            <ContentMap>
              <p>Ultima vez visto</p>
              <Map height="190px" />
            </ContentMap>
            <Box>
              <Date mt={2.5}>Publicado: 01 de Agosto 2023</Date>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Index;
