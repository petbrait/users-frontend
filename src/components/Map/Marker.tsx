import { useState } from "react";
import { Marker } from "@react-google-maps/api";
import { InfoWindow } from "@react-google-maps/api";
import ServiceCard from "@/components/ServiceCard";

interface markerProps {
  i: any;
  onLoad: any;
  infoVet: any;
}

const Index = ({ i, onLoad, infoVet }: markerProps) => {
  const [infoWindowOpen, setInfoWindowOpen] = useState(false);

  const showInfoWindow = () => {
    setInfoWindowOpen(true);
  };

  return (
    <Marker
      icon={"https://i.ibb.co/kKHXj0T/imageedit-8-3101225008.png"}
      onLoad={onLoad}
      position={infoVet.position}
      onClick={showInfoWindow}
    >
      {infoWindowOpen && (
        <InfoWindow
          options={{ maxWidth: 350 }}
          key={i}
          onLoad={onLoad}
          position={infoVet.position}
          onCloseClick={() => setInfoWindowOpen(false)}
        >
          <ServiceCard view="map" {...infoVet} />
        </InfoWindow>
      )}
    </Marker>
  );
};

export default Index;
