export const getPlanet = async (url) => {
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("Error retrieving planet!");
    const planet = await response.json();
    return planet.name || "Unnknown";
  } catch (error) {
    console.error("error fetching homeworld data ", error);
  }
};

export const getFilmName = async (url) => {
    //console.log('film url ', url);
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("Error retrieving film name!");
    const film = await response.json();
    return film.title || "Unknown";
  } catch (error) {
    console.error("error fetching film data ", error);
  }
};

export const getStarshipName = async (url) => {
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("Error retrieving ship name!");
    const ship = await response.json();
    return ship.name || "Unknown";
  } catch (error) {
    console.error("error fetching ship data ", error);
  }
};

export const fetchFilmNames = async (films) => {
  let filmNames = [];
  await Promise.all(
    films.map(async (film) => {
      const filmName = await getFilmName(film);
      return filmNames.push(filmName);
    })
  );
  return filmNames;
};

export const fetchStarshipNames = async (starships) => {
  let starshipNames = [];
  await Promise.all(
    starships.map(async (starship) => {
      const starshipName = await getStarshipName(starship);
      return starshipNames.push(starshipName);
    })
  );
  return starshipNames;
};
