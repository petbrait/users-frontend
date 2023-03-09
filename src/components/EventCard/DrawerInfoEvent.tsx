import styled from "styled-components";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import ImageConcurso from "@/assets/images/consurso.jpeg";
import IconHeart from "@/assets/icons/heart.svg";
import IconShare from "@/assets/icons/share.svg";

const Banner = styled(Image)`
  height: 280px;
  width: 100%;
  box-shadow: 0px 14px 16px -6px rgb(0 0 0 / 20%);
  border-radius: 10px;
`;

const Participants = styled(Box)`
  border: 1px solid grey;
`;

const Name = styled(Typography)`
  color: #000;
  margin-top: 20px;
  font-size: 33px;
  font-weight: bold;
`;

const Subtitle = styled(Typography)`
  color: #000;
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 8px;
`;

const Text = styled(Typography)`
  font-size: 14px;
`;

const Index = () => {
  return (
    <Box ml={10} mr={10}>
      <Banner
        priority
        src={ImageConcurso}
        alt="icon-heart"
        data-testid="heart"
      />
      <Grid container spacing={3} alignItems="flex-start">
        <Grid item xs={11}>
          <Name>Concurso de talentos de mascotas 2023</Name>
          <Box mt={2}>
            <Subtitle>Sobre el evento</Subtitle>
            <Text>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum,
              vel quod. Aliquam modi ea sed doloribus et aspernatur consectetur
              praesentium consequuntur impedit libero dolor, magnam, veniam
              amet. Beatae, non laborum.
            </Text>
          </Box>
        </Grid>
        <Grid item xs={1}>
          <Stack mt={3} direction="column" spacing={0} alignItems="columns">
            <Box>
              <Tooltip title="Me gusta" placement="left-start">
                <IconButton>
                  <Image
                    width={22}
                    height={22}
                    priority
                    src={IconHeart}
                    alt="icon-heart"
                    data-testid="heart"
                  />
                </IconButton>
              </Tooltip>
            </Box>
            <Box>
              <Tooltip title="Compartir" placement="left-start">
                <IconButton>
                  <Image
                    width={22}
                    height={22}
                    priority
                    src={IconShare}
                    alt="icon-share"
                    data-testid="share"
                  />
                </IconButton>
              </Tooltip>
            </Box>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Index;
