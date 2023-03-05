import { useState } from "react";
import Calendar from "react-calendar";
import Box from "@mui/material/Box";

const Index = () => {
  const [value, onChange] = useState(new Date());

  return (
    <Box>
      <Calendar onChange={onChange} value={value} />
    </Box>
  );
};

export default Index;
