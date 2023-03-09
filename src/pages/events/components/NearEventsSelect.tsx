import styled from "styled-components";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import AddressPoint from "@/components/AddressPoint";

export const Title = styled(Typography)`
  font-size: 20px;
  margin-bottom: 0px;
`;

const Index = () => {
  return (
    <Box mt={5}>
      <Title>Eventos cerca de</Title>
      <AddressPoint icon={false} design={2} />
    </Box>
  );
};

export default Index;
