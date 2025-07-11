import React from "react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";

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
    googleMapsApiKey: "AIzaSyBNoDHY5er5O98zs6ftkdFDzJCeuWUClx8",
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
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          position: "relative",
          marginTop: "-70px",
          zIndex: 10,
        }}
      >
        <div
          style={{
            display: "flex",
            background: "#fff",
            borderRadius: "6px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
            overflow: "hidden",
          }}
        >
          <button
            style={{
              background: type === "show" ? "#000" : "#fff",
              color: type === "show" ? "#fff" : "#222",
              border: "none",
              padding: "16px 32px",
              fontWeight: 600,
              fontSize: "1.1rem",
              cursor: "pointer",
              borderRight: "1px solid #eee",
            }}
            onClick={() => setType("show")}
          >
            展示中心
          </button>
          <button
            style={{
              background: type === "service" ? "#000" : "#fff",
              color: type === "service" ? "#fff" : "#222",
              border: "none",
              padding: "16px 32px",
              fontWeight: 600,
              fontSize: "1.1rem",
              cursor: "pointer",
              borderRight: "1px solid #eee",
            }}
            onClick={() => setType("service")}
          >
            服務中心
          </button>
          <button
            style={{
              background: type === "charge" ? "#000" : "#fff",
              color: type === "charge" ? "#fff" : "#222",
              border: "none",
              padding: "16px 32px",
              fontWeight: 600,
              fontSize: "1.1rem",
              cursor: "pointer",
            }}
            onClick={() => setType("charge")}
          >
            充電站
          </button>
        </div>
      </div>
    </div>
  );
};

export default DealerPage;
