import { createContext, useContext } from "react";
import { useState, useEffect } from "react";

const CitieContext = createContext();

function CitiesProvider({ children }) {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

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

  return (
    <CitieContext.Provider value={{ cities, isLoading }}>
      {children}
    </CitieContext.Provider>
  );
}

function useCities() {
  const context = useContext(CitieContext);
  return context;
}

export { CitiesProvider, useCities };
