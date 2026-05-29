import React from "react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import {
  MapShell,
  MapScrollShield,
  MapInteractionButton,
  MapOptionsWrapper,
  MapOptionsInner,
  MapOptionButton,
} from "./styles";

const allLocations = {
  show: [
    { lat: 25.033964, lng: 121.564472, name: "台北展示中心" },
    { lat: 24.147736, lng: 120.673648, name: "台中展示中心" },
  ],
  service: [
    { lat: 25.047675, lng: 121.517055, name: "台北服務中心" },
    { lat: 24.163162, lng: 120.639634, name: "台中服務中心" },
  ],
  charge: [
    { lat: 24.993628, lng: 121.301019, name: "新竹充電站" },
    { lat: 24.80395, lng: 120.9687, name: "苗栗充電站" },
  ],
};

const containerStyle = {
  width: "100%",
  height: "600px",
  touchAction: "pan-y",
};

const center = { lat: 24.5, lng: 121 };

const DealerPage = () => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  });
  const [type, setType] = React.useState("show");
  const [isMapInteractive, setIsMapInteractive] = React.useState(false);
  const canEnableMapInteraction = React.useMemo(() => {
    if (typeof window === "undefined" || !window.matchMedia) return false;
    return window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  }, []);
  const shouldLockMap = !canEnableMapInteraction || !isMapInteractive;
  const locations = allLocations[type];

  const mapOptions = {
    // Keep page scroll stable by default; map gestures are opt-in.
    gestureHandling: shouldLockMap ? "none" : "greedy",
    scrollwheel: !shouldLockMap,
    draggable: !shouldLockMap,
    disableDoubleClickZoom: shouldLockMap,
    keyboardShortcuts: !shouldLockMap,
  };

  return (
    <div className="dealer-page">
      <MapShell>
        {isLoaded && (
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={8}
            options={mapOptions}
            onMouseLeave={() => setIsMapInteractive(false)}
          >
            {locations.map((loc, idx) => (
              <Marker
                key={idx}
                position={{ lat: loc.lat, lng: loc.lng }}
                title={loc.name}
              />
            ))}
          </GoogleMap>
        )}

        {shouldLockMap && (
          <MapScrollShield>
            <MapInteractionButton
              type="button"
              disabled={!canEnableMapInteraction}
              onClick={() => {
                if (canEnableMapInteraction) {
                  setIsMapInteractive(true);
                }
              }}
            >
              {canEnableMapInteraction
                ? "啟用地圖操作"
                : "行動裝置可上下滑動頁面，據點分類請使用下方按鈕"}
            </MapInteractionButton>
          </MapScrollShield>
        )}
      </MapShell>

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
