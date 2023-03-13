import { useEffect } from "react";
import { getUser } from "@/core/api";
import Link from "next/link";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import styled from "styled-components";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import IconHeart from "@/assets/icons/heart.svg";
import IconSettings from "@/assets/icons/settings.svg";
import Badge from "@mui/material/Badge";
import Tooltip from "@mui/material/Tooltip";

const Wrapper = styled(Box)`
  position: fixed;
  width: 20%;
  bottom: 30px;
  left: 50%;
  transform: translate(-50%, 0);
  background-color: #fff;
  border-radius: 12px;
  padding: 10px 15px;
  box-shadow: 0 8px 16px rgb(0 0 0 / 8%), 0 4px 8px rgb(0 0 0 / 6%);
  z-index: 1;
`;

const Name = styled(Typography)`
  font-size: 14px;
`;

const Index = () => {
  const uid =
    (typeof window !== "undefined" && localStorage.getItem("uid")) || "";

  useEffect(() => {
    getUser(uid)
      .then((data) => {
        console.log("data", data);
      })
      .catch((error) => {});
  }, []);

  return (
    <Wrapper>
      <Grid container spacing={10} alignItems="center" justifyContent="center">
        <Grid item xs={7}>
          <Box>
            <Stack direction="row" spacing={1} alignItems="center">
              <Tooltip title="Perdido">
                <Badge color="error" variant="dot">
                  <Avatar
                    alt="Tiburonsin"
                    src="../../assets/images/logo-petco.png"
                  />
                </Badge>
              </Tooltip>
              <Link href={{ pathname: "/account", query: { tab: "profile" } }}>
                <Name>Tiburonsin</Name>
              </Link>
            </Stack>
          </Box>
        </Grid>
        <Grid item xs={5}>
          <Stack direction="row" spacing={3} alignItems="center">
            <Link href={{ pathname: "/account", query: { tab: "favorites" } }}>
              <Image
                width={18}
                height={18}
                priority
                src={IconHeart}
                alt="icon-heart"
                data-testid="heart"
              />
            </Link>
            <Link href={{ pathname: "/account", query: { tab: "settings" } }}>
              <Image
                width={18}
                height={18}
                priority
                src={IconSettings}
                alt="icon-settings"
                data-testid="settings"
              />
            </Link>
          </Stack>
        </Grid>
      </Grid>
    </Wrapper>
  );
};

export default Index;
