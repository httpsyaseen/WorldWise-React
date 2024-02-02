import React from "react";
import styles from "./Map.module.css";
import { useNavigate, useSearchParams } from "react-router-dom";
export default function Map() {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");
  return (
    <>
      <div
        className={styles.mapContainer}
        onClick={() => {
          navigate("form");
        }}
      >
        Map
        <p>Latitude: {lat}</p>
        <p>Longitude: {lng}</p>
      </div>
    </>
  );
}
