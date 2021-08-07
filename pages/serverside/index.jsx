import SearchResultList from "../../components/atoms/SearchResultList/SearchResultList";

export async function getServerSideProps() {
  const url = "https://pokeapi.co/api/v2/pokemon/?limit=9"; // Working URL
  // const url = "https://pokeapi.co/api/v2/pokemon-color/rebeccapurple"; // Empty URL

  const slowUrlPrefix = process.env.slowApi ? "https://deelay.me/2000/" : "";
  const res = await fetch(`${slowUrlPrefix}${url}`);

  if (res.status === 404) {
    return { props: {} };
  }
  const data = await res.json();

  return {
    props: {
      results: data.results.map((pokemon) => {
        return {
          name: `${pokemon.name.charAt(0).toUpperCase()}${pokemon.name.slice(
            1
          )}`,
          slug: pokemon.name,
        };
      }),
    },
  };
}

const IndexPage = ({ results }) => {
  return (
    <div>
      <p>A search index page built on the server at request time.</p>
      {results ? (
        <SearchResultList results={results} urlPrefix="/serverside" />
      ) : (
        <div>No Results Found</div>
      )}
    </div>
  );
};

export default IndexPage;
