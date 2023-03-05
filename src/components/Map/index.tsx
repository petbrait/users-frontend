import { useState, useCallback } from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import Marker from "./Marker";

const center = {
  lat: 19.275104273750227,
  lng: -99.24154838235,
};

const vets = [
  {
    name: "Servicios Veterinarios Padierna",
    address: "Tekal, Seye Esquina, Torres de Padierna, Tlalpan, 14201 CDMX",
    phone_number: "+525556452147",
    position: {
      lat: 19.28425621941314,
      lng: -99.22695994491706,
    },
  },
  {
    name: "Veterinaria nuevo mundo",
    address:
      "Chancenote entre calle Hui y Suma, Sector 17, Tlalpan, 14100 Ciudad de México, CDMX",
    phone_number: "",
    position: {
      lat: 19.275104273750227,
      lng: -99.24154838235,
    },
  },
];

interface mapProps {
  height: string;
}

const Index = ({ height }: mapProps) => {
  const containerStyle = {
    width: "100%",
    height: height,
  };

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "",
  });

  const [map, setMap] = useState(null);

  const onLoad = useCallback(function callback(map: any) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    // map.fitBounds(bounds);

    setMap(map);
  }, []);

  const onUnmount = useCallback(function callback(map: any) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={6}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      {/* Child components, such as markers, info windows, etc. */}
      {vets.map((vet, i) => (
        <Marker i={i} infoVet={vet} onLoad={onLoad} />
      ))}
      <></>
    </GoogleMap>
  ) : (
    <></>
  );
};

export default Index;
