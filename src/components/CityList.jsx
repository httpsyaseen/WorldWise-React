import React from "react";
import styles from "./CityList.module.css";
import Spinner from "./Spinner";
import CityItem from "./CityItem";
import Message from "./Message";

export default function CityList({ isLoading, cities }) {
  if (isLoading) return <Spinner />;

  if (!cities)
    return (
      <Message
        message={"Add your first city by clicking on the city in the map"}
      />
    );

  return (
    <ul className={styles.cityList}>
      {cities.map((city) => (
        <CityItem city={city} key={city.id} />
      ))}
    </ul>
  );
}
