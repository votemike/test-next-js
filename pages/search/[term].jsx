// @TODO Delete

import Image from "next/image";
import { useRouter } from "next/router";
import useSWR from "swr";

// const SearchPage = () => {
//   const router = useRouter();
//   const { term } = router.query;
//
//   const { data, error } = useSWR(
//     `https://deelay.me/2000/https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&srsearch=${term}&origin=*`,
//     (url) => fetch(url).then((res) => res.json())
//   );
//   if (error) {
//     console.log("Failed to Load");
//     console.log(data);
//     console.log(error);
//     return <div>failed to load</div>;
//   }
//   if (!data) {
//     console.log("Loading");
//     return <div>loading...</div>;
//   }
//   console.log("Passed it");
//   if (!data.query.search.length > 0) {
//     return <p>No results: Try a different search</p>;
//   }
//
//   return (
//     <>
//       <ul>
//         {data.query.search.map((result) => {
//           return (
//             <li key={result.title}>
//               <Image
//                 src="https://deelay.me/2000/http://www.fillmurray.com/200/200"
//                 alt="Fill Murray"
//                 width={100}
//                 height={100}
//               />
//               {result.title}
//             </li>
//           );
//         })}
//       </ul>
//     </>
//   );
// };

const SearchPage = ({ data, error }) => {
  console.log(data.query.search);
  console.log(error);
  return (
    <>
      <ul>
        {data.query.search.map((result) => {
          return (
            <li key={result.title}>
              <Image
                src="https://deelay.me/2000/http://www.fillmurray.com/200/200"
                alt="Fill Murray"
                width={100}
                height={100}
              />
              {result.title}
            </li>
          );
        })}
      </ul>
    </>
  );
};

// export async function getServerSideProps({ query }) {
//   // Fetch data from external API
//   const res = await fetch(
//     `https://deelay.me/2000/https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&srsearch=${query.term}`
//   );
//   const data = await res.json();
//
//   // Pass data to the page via props
//   return { props: { data } };
// }

export async function getServerSideProps({ query }) {
  const { data, error } = useSWR(
    `https://deelay.me/2000/https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&srsearch=${term}&origin=*`,
    (url) => fetch(url).then((res) => res.json())
  );

  // Pass data to the page via props
  return { props: { data, error } };
}

// @TODO
// Make a few examples trading off slow APIs.....
// Block Server Side, Spinner Client Side
// Spinner Server and Client Side
// Block Server and Client Side
// Incremental Static Regeneration: https://vercel.com/docs/next.js/incremental-static-regeneration

// Make a few pages.
// A page made at build time
// A page that calls a fast API
// A page that calls a slow API

export default SearchPage;
