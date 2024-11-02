import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CharacterList from "../../components/CharacterList/CharacterList";
import DataMessage from "../../components/DataMessage/DataMessage";

const CharacterListPage = () => {
  const [people, setPeople] = useState([]);
  const [currentPage, setCurrentPage] = useState(
    "https://swapi.dev/api/people/"
  );
  const [nextPage, setNextPage] = useState(null);
  const [previousPage, setPreviousPage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getPlanet = async (url) => {
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error("Error retrieving planet!");
      const planet = await response.json();
      return planet.name || "Unnknown";
    } catch (error) {
      console.error("error fetching homeworld data ", error);
    }
  };

  useEffect(() => {
    const fetchPeople = async (pageUrl) => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(pageUrl);
        if (!response.ok) throw new Error("Network response was not ok");

        const data = await response.json();
        console.log("data ", data);
        const dataWithPlanets = await Promise.all(
          data.results.map(async (item) => {
            return { ...item, planet: await getPlanet(item.homeworld) };
          })
        );
        setPeople(dataWithPlanets);
        setNextPage(data.next);
        setPreviousPage(data.previous);
        console.log("people ", people);
      } catch (err) {
        setError("Failed to load data");
        console.error("Error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchPeople(currentPage);
  }, [currentPage]);

  const handleNext = () => {
    if (nextPage) setCurrentPage(nextPage);
  };

  const handlePrevious = () => {
    if (previousPage) setCurrentPage(previousPage);
  };


  return (
    <>
      <div className="swapi__character-list-container">
        {people && people.length !== 0 ? (
          <CharacterList people={people} />
        ) : loading ? (
          <DataMessage message="Loading..." />
        ) : error ? (
          <DataMessage message="Error fetching data." />
        ) : null}
        <div className="swapi__nav-btn-container">
          <button
            className="swapi__nav-btn"
            onClick={handlePrevious}
            disabled={!previousPage}
          >
            Previous
          </button>
          <button
            className="swapi__nav-btn"
            onClick={handleNext}
            disabled={!nextPage}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default CharacterListPage;
