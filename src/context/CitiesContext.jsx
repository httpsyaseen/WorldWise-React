import { createContext, useContext } from "react";
import { useState, useEffect } from "react";

const CitieContext = createContext();

function CitiesProvider({ children }) {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentCity, setCurrentCity] = useState([]);

  useEffect(() => {
    async function fetchMovies() {
      try {
        setIsLoading(true);
        const res = await fetch("http://localhost:8080/cities");
        const data = await res.json();
        setCities(data);
      } catch (err) {
        console.log("Error");
      } finally {
        setIsLoading(false);
      }
    }

    fetchMovies();
  }, []);

  async function getCity(id) {
    try {
      setIsLoading(true);
      const res = await fetch(`http://localhost:8080/cities/${id}`);
      const data = await res.json();
      setCurrentCity(data);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <CitieContext.Provider value={{ cities, isLoading, getCity, currentCity }}>
      {children}
    </CitieContext.Provider>
  );
}

function useCities() {
  const context = useContext(CitieContext);
  return context;
}

export { CitiesProvider, useCities };
