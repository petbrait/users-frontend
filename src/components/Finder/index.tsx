import Box from "@mui/material/Box";
import styled from "styled-components";
import { Input, Typography } from "@mui/material";

const Finder = styled(Input)`
  padding: 10px;
  font-family: "Poppins";
`;

const Index = () => {
  return (
    <Box>
      <Finder type="text" placeholder="Buscar veterinaria" fullWidth={true} />
    </Box>
  );
};

export default Index;
