import Image from "next/image";
import Link from "next/link";
import useSWR from "swr";
import { useRouter } from "next/router";

const SearchPage = () => {
  const router = useRouter();
  const { term } = router.query;

  const url = `https://pokeapi.co/api/v2/pokemon/${term}/`; // Working URL
  // const url = "https://pokeapi.co/api/v2/pokemon/nonexistant/"; // Empty URL

  const slowUrlPrefix = process.env.slowApi ? "https://deelay.me/2000/" : "";

  const { data, error } = useSWR(`${slowUrlPrefix}${url}`, (fullUrl) =>
    fetch(fullUrl).then((res) => res.json())
  );

  if (error) {
    return <div>failed to load</div>;
  }
  if (!data) {
    return <div>loading...</div>;
  }

  if (!data.results.length > 0) {
    return <p>No results: Try a different search</p>;
  }

  const imageUrl = process.env.slowImages
    ? `https://deelay.me/2000/${data.sprites.front_default}`
    : data.sprites.front_default;
  return (
    <div>
      <Link href="/clientside">&lt; Back to Search Results</Link>
      <p>An item page built on the client at request time.</p>
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
