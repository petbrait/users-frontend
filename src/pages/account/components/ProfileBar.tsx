import styled from "styled-components";
import Link from "next/link";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
import Badge from "@mui/material/Badge";
import Tooltip from "@mui/material/Tooltip";

const Wrap = styled(Box)`
  background-color: #f2f2f2;
  padding: 15px;
  height: calc(100vh - 155px);
  border-radius: 10px;
`;

const Name = styled(Typography)`
  margin-top: 10px;
  font-size: 16px;
  color: #000;
`;

const OptionsList = styled.ul`
  margin: 30px 0 0 0;
  padding: 0;
  list-style: none;
  & a {
    display: block;
    color: #000;
    &:not(:last-child) {
      margin-bottom: 10px;
    }
  }
`;

interface ItemProps {
  active: boolean;
}

const Item = styled.li<ItemProps>`
  font-size: 13px;
  font-family: "Poppins";
  cursor: pointer;
  color: ${({ active }) => (active ? "#4649ff" : "#000")};
`;

interface ProfilebarProps {
  activeTab: string | any;
}

const Index = ({ activeTab }: ProfilebarProps) => {
  return (
    <Wrap>
      <Box
        sx={{
          marginBottom: "20px",
        }}
      >
        <Stack
          sx={{ margin: "20px 0" }}
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Tooltip title="Perdido">
            <Badge color="error" variant="dot">
              <Avatar
                alt="Tiburonsin"
                src="../../assets/images/logo-petco.png"
                sx={{ width: 66, height: 66 }}
              />
            </Badge>
          </Tooltip>
          <Name>
            <Link href="/account/?tab=profile">Tiburonsin</Link>
          </Name>
        </Stack>
        <OptionsList>
          <Link href="/account/?tab=profile">
            <Item active={activeTab === "profile" ? true : false}>
              Información
            </Item>
          </Link>
          <Link href="/account/?tab=pictures">
            <Item active={activeTab === "pictures" ? true : false}>Fotos</Item>
          </Link>
          <Link href="/account/?tab=favorites">
            <Item active={activeTab === "favorites" ? true : false}>
              Favoritos
            </Item>
          </Link>
          <Link href="/account/?tab=messages">
            <Item active={activeTab === "messages" ? true : false}>
              Mensajes
            </Item>
          </Link>
        </OptionsList>
      </Box>
    </Wrap>
  );
};

export default Index;
