import Box from "@mui/material/Box";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import ToggleButton from "@mui/material/ToggleButton";
import { Typography } from "@mui/material";
import Image from "next/image";
import IconGrid from "@/assets/icons/grid.svg";
import IconMap from "@/assets/icons/map.svg";

interface setViewProps {
  view: string;
  setViewHandler: (props: string) => any;
}

const Index = ({ view, setViewHandler }: setViewProps) => {
  const handleView = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string
  ) => {
    setViewHandler(newAlignment);
  };

  return (
    <Box>
      <Typography
        sx={{
          marginBottom: "10px",
        }}
      >
        Vista
      </Typography>
      <ToggleButtonGroup
        color="primary"
        value={view}
        exclusive
        onChange={handleView}
        aria-label="text alignment"
      >
        <ToggleButton value="list">
          <Image
            width={15}
            height={15}
            priority
            src={IconGrid}
            alt="icon-grid"
            data-testid="grid"
          />
          <Typography
            sx={{
              marginLeft: "4px",
            }}
          >
            Grid
          </Typography>
        </ToggleButton>
        <ToggleButton value="map">
          <Image
            width={15}
            height={15}
            priority
            src={IconMap}
            alt="icon-map"
            data-testid="map"
          />
          <Typography
            sx={{
              marginLeft: "4px",
            }}
          >
            Mapa
          </Typography>
        </ToggleButton>
      </ToggleButtonGroup>
    </Box>
  );
};
export default Index;
