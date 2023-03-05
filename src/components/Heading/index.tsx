import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import styled from "styled-components";
import Image from "next/image";

const Title = styled(Typography)`
  text-align: center;
  margin: 10px 0 40px;
  font-size: 40px;
`;

interface headingProps {
  title: string;
  icon: any;
}

const Index = ({ title, icon }: headingProps) => {
  return (
    <Box>
      <Box sx={{ textAlign: "center", margin: "auto" }}>
        <Image
          width={65}
          height={65}
          priority
          src={icon}
          alt="icon-vet"
          data-testid="vet"
        />
      </Box>
      <Title variant="h4">{title}</Title>
    </Box>
  );
};

export default Index;
