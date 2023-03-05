import Link from "next/link";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import Image from "next/image";

interface servicesProps {
  link: string;
  label: string;
  icon: any;
  isNew?: boolean;
}

const Index = ({ link, label, icon, isNew }: servicesProps) => {
  return (
    <div>
      <Link href={link}>
        <Box
          sx={{
            ...(isNew && { filter: "grayscale(1)" }),
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "90px",
            height: "90px",
            backgroundColor: "#4649ff33",
            textAlign: "center",
            borderRadius: "16px",
            margin: "0 auto 10px",
            border: "2px solid #fff",
            "&:hover": {
              border: "2px solid #4649FF",
            },
          }}
        >
          <Image
            width={50}
            height={50}
            priority
            src={icon}
            alt="vet-Logo"
            data-testid="vet"
          />
        </Box>
        <Typography
          color="common.darkViolet"
          sx={{
            fontSize: "15px",
            textAlign: "center",
          }}
        >
          {label}
        </Typography>
        {isNew && (
          <Typography
            color="common.darkViolet"
            sx={{
              fontSize: "12px",
              textAlign: "center",
              color: "#7B8FA1",
            }}
          >
            Proximamente
          </Typography>
        )}
      </Link>
    </div>
  );
};

export default Index;
