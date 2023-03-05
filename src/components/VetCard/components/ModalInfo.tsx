import { useState } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { modalStyles } from "@/styles/components";

interface modalInfoProps {
  open: boolean;
  handleClose: any;
  tab: number;
  vet: {
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
  };
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const Index = ({ open, handleClose, tab, vet }: modalInfoProps) => {
  const [value, setValue] = useState(tab);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={modalStyles(550)}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Item Two" {...a11yProps(1)} />
          <Tab label="Item Three" {...a11yProps(2)} />
        </Tabs>
        {tab}
        {vet.name}
      </Box>
    </Modal>
  );
};

export default Index;
