import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

export const numberOfPokemonPagesToPreBuild = 9;

export async function getStaticPaths() {
  const url = `https://pokeapi.co/api/v2/pokemon/?limit=${numberOfPokemonPagesToPreBuild}`; // Working URL
  // const url = "https://pokeapi.co/api/v2/pokemon-color/rebeccapurple"; // Empty URL
  const slowUrlPrefix = process.env.slowApi ? "https://deelay.me/2000/" : "";
  const res = await fetch(`${slowUrlPrefix}${url}`);

  if (res.status === 404) {
    return { props: {} };
  }
  const data = await res.json();

  const nameList = data.results.map((pokemon) => pokemon.name);

  // convert them into params
  const params = nameList.map((name) => ({
    params: { term: name },
  }));

  return {
    fallback: true,
    paths: params,
  };
}

export async function getStaticProps(context) {
  const url = `https://pokeapi.co/api/v2/pokemon/${context.params.term}/`; // Working URL
  // const url = "https://pokeapi.co/api/v2/pokemon/nonexistant/"; // Empty URL

  const slowUrlPrefix = process.env.slowApi ? "https://deelay.me/2000/" : "";
  const res = await fetch(`${slowUrlPrefix}${url}`);

  if (res.status === 404) {
    return { props: {} };
  }
  const data = await res.json();

  return {
    props: { data },
    revalidate: 60,
  };
}

const SearchPage = ({ data }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  const imageUrl = process.env.slowImages
    ? `https://deelay.me/2000/${data.sprites.front_default}`
    : data.sprites.front_default;
  return (
    <div>
      <Link href="/buildcommonwithrevalidate">&lt; Back to Search Results</Link>
      <p>
        An item page either prebuilt at build time or built upon first request.
        But will revalidate upon a new request after 60 minutes.
      </p>
      <div>
        <Image
          src={imageUrl}
          alt={data.name}
          width={100}
          height={100}
          layout="fixed"
        />
        <h1>
          {data.name.charAt(0).toUpperCase()}
          {data.name.slice(1)}
        </h1>
      </div>
    </div>
  );
};

export default SearchPage;
