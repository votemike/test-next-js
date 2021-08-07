import useSWR from "swr";
import SearchResultList from "../../components/atoms/SearchResultList/SearchResultList";

const IndexPage = () => {
  const url = "https://pokeapi.co/api/v2/pokemon/?limit=9"; // Working URL
  // const url = "https://pokeapi.co/api/v2/pokemon-color/rebeccapurple"; // Empty URL

  const slowUrlPrefix = process.env.slowApi ? "https://deelay.me/2000/" : "";

  const { data, error } = useSWR(`${slowUrlPrefix}${url}`, (fullUrl) =>
    fetch(fullUrl).then((res) => res.json())
  );

  if (error) {
    console.log("Failed to Load");
    console.log(data);
    console.log(error);
    return <div>failed to load</div>;
  }
  if (!data) {
    console.log("Loading");
    return <div>loading...</div>;
  }
  console.log("Passed it");
  console.log(data);
  if (!data.results.length > 0) {
    return <p>No results: Try a different search</p>;
  }
  const results = data.results.map((pokemon) => {
    return {
      name: `${pokemon.name.charAt(0).toUpperCase()}${pokemon.name.slice(1)}`,
      slug: pokemon.name,
    };
  });

  return (
    <div>
      <p>A search index page built on the client at request time.</p>
      {results ? (
        <SearchResultList results={results} urlPrefix="/serverside" />
      ) : (
        <div>No Results Found</div>
      )}
    </div>
  );
};

export default IndexPage;
