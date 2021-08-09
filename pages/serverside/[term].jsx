import Image from "next/image";
import Link from "next/link";

export async function getServerSideProps(context) {
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
  };
}

const SearchPage = ({ data, error }) => {
  const imageUrl = process.env.slowImages
    ? `https://deelay.me/2000/${data.sprites.front_default}`
    : data.sprites.front_default;
  return (
    <div>
      <Link href="/serverside">&lt; Back to Search Results</Link>
      <p>An item page built on the server at request time.</p>
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
