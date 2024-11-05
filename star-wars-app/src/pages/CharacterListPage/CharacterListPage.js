import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import CharacterList from "../../components/CharacterList/CharacterList";
import DataMessage from "../../components/DataMessage/DataMessage";
import { DataContext } from "../../store/data-context";

const MemoizedCharacterList = React.memo(CharacterList);
const MemoizedDataMessage = React.memo(DataMessage);


const CharacterListPage = () => {
  const [people, setPeople] = useState([]);
  const [currentPage, setCurrentPage] = useState(
    "https://swapi.dev/api/people/"
  );
  const [nextPage, setNextPage] = useState(null);
  const [previousPage, setPreviousPage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { searchTerm } = useContext(DataContext);

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
        console.log('pageUrl ', pageUrl);
        if (!response.ok) throw new Error("Network response was not ok");

        const data = await response.json();

        const dataWithPlanets = await Promise.all(
          data.results.map(async (item) => {
            const itemId = item.url.split("/").filter(Boolean).pop();
            return {
              ...item,
              id: itemId,
              planet: await getPlanet(item.homeworld),
            };
          })
        );

        setPeople(dataWithPlanets);
        setNextPage(data.next);
        setPreviousPage(data.previous);
        console.log("people ", people);
        console.log("nextPage ", nextPage);
        console.log("previousPage ", previousPage);
      } catch (err) {
        setError("Failed to load data");
        console.error("Error:", err);
      } finally {
        setLoading(false);
      }
    };

    if (searchTerm) {
      const searchUrl = `https://swapi.dev/api/people/?search=${searchTerm}`;
      fetchPeople(searchUrl);
    } else {
      fetchPeople( );
    }
  }, [currentPage, searchTerm]);

  const handleNext = () => {
    if (nextPage) setCurrentPage(nextPage);
  };

  const handlePrevious = () => {
    if (previousPage) setCurrentPage(previousPage);
  };

  return (
    <>
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
      <div className="swapi__character-list-container">
        {people && people.length !== 0 ? (
          <MemoizedCharacterList people={people} />
        ) : loading ? (
          <MemoizedDataMessage message="Loading..." />
        ) : error ? (
          <MemoizedDataMessage message="Error fetching data." />
        ) : searchTerm && people.length === 0 ? (
          <MemoizedDataMessage message="No Character names match the search term" />
        ) : null}
      </div>
    </>
  );
};

export default CharacterListPage;
