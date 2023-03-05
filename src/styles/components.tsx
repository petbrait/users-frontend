import Box from "@mui/material/Box";
import styled from "styled-components";

export const ViewWrapper = styled(Box)`
  padding: 40px 50px 70px;
`;

export const ContentServices = styled(Box)`
  margin: 30px 0;
  /* padding: 30px; */
  /* background-color: #f2f2f2a6; */
  border-radius: 10px;
`;

export const modalStyles = (width: number) => {
  return {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: width || 450,
    bgcolor: "background.paper",
    borderRadius: "6px",
    boxShadow: 24,
    p: 4,
  };
};
