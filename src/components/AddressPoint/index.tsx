import { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import IconAddress from "@/assets/icons/adress-pin.svg";
import IconCurrentAddress from "@/assets/icons/current-address.svg";
import Stack from "@mui/material/Stack";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 450,
  bgcolor: "background.paper",
  borderRadius: "6px",
  boxShadow: 24,
  p: 4,
};

const Index = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box
      sx={{
        position: "relative",
        marginBottom: "20px",
        zIndex: 1,
        cursor: "pointer",
      }}
    >
      <Stack
        direction="row"
        spacing={1}
        alignItems="center"
        onClick={handleOpen}
      >
        <Image
          width={18}
          height={18}
          priority
          src={IconAddress}
          alt="icon-address"
          data-testid="address"
        />
        <Typography
          sx={{
            color: "#000",
            fontSize: "12px",
          }}
        >
          Avenida Carmelo Perez #626
        </Typography>
      </Stack>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            sx={{
              color: "#000",
              fontSize: "18px",
            }}
          >
            Agregar o escoger otra dirección
          </Typography>
          <Stack
            direction="row"
            spacing={1}
            alignItems="center"
            onClick={handleOpen}
            mt={1.5}
          >
            <Image
              width={18}
              height={18}
              priority
              src={IconCurrentAddress}
              alt="icon-address"
              data-testid="address"
            />
            <Typography
              sx={{
                mt: 1,
                color: "primary.main",
                fontSize: "13px",
                cursor: "pointer",
              }}
            >
              Usar mi ubicación actal
            </Typography>
          </Stack>
        </Box>
      </Modal>
    </Box>
  );
};

export default Index;
