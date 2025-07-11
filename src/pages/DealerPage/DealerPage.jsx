import React from "react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import { MapOptionsWrapper, MapOptionsInner, MapOptionButton } from "./styles"; // 引入 styled-components

const allLocations = {
  show: [
    { lat: 25.033964, lng: 121.564472, name: "台北展示中心" },
    { lat: 24.147736, lng: 120.673648, name: "台中展示中心" },
    // ...更多展示中心
  ],
  service: [
    { lat: 25.047675, lng: 121.517055, name: "台北服務中心" },
    { lat: 24.163162, lng: 120.639634, name: "台中服務中心" },
    // ...更多服務中心
  ],
  charge: [
    { lat: 24.993628, lng: 121.301019, name: "新竹充電站" },
    { lat: 24.80395, lng: 120.9687, name: "苗栗充電站" },
    // ...更多充電站
  ],
};

const containerStyle = {
  width: "100%",
  height: "600px",
};

const center = { lat: 24.5, lng: 121 };

const DealerPage = () => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  });
  const [type, setType] = React.useState("show");
  const locations = allLocations[type];

  return (
    <div className="dealer-page">
      {isLoaded && (
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={8}>
          {locations.map((loc, idx) => (
            <Marker
              key={idx}
              position={{ lat: loc.lat, lng: loc.lng }}
              title={loc.name}
            />
          ))}
        </GoogleMap>
      )}
      {/* 地圖下方選項區塊 */}
      <MapOptionsWrapper>
        <MapOptionsInner>
          <MapOptionButton
            active={type === "show"}
            onClick={() => setType("show")}
          >
            展示中心
          </MapOptionButton>
          <MapOptionButton
            active={type === "service"}
            onClick={() => setType("service")}
          >
            服務中心
          </MapOptionButton>
          <MapOptionButton
            active={type === "charge"}
            last
            onClick={() => setType("charge")}
          >
            充電站
          </MapOptionButton>
        </MapOptionsInner>
      </MapOptionsWrapper>
    </div>
  );
};

export default DealerPage;
