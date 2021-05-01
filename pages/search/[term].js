import Image from 'next/image'
import { useRouter } from 'next/router'
import useSWR from 'swr'



// const SearchPage = ({data}) => {
const SearchPage = () => {
  const router = useRouter()
  const { term } = router.query

  const { data, error } = useSWR(`https://deelay.me/2000/https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&srsearch=${term}&origin=*`, (url) => fetch(url).then(res => res.json()))
  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>
  if (!data.query.search.length > 0) {
    return <p>No results: Try a different search</p>
  }

  return <>
    <ul>
      {data.query.search.map((result) => {return <li key={result.title}><Image
        src="https://deelay.me/2000/http://www.fillmurray.com/200/200"
        alt="Fill Murray"
        width={100}
        height={100}
      />{result.title}</li>})}
    </ul>
  </>
}
//
// export async function getServerSideProps({query}) {
//   // Fetch data from external API
//   const res = await fetch(`https://deelay.me/2000/https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&srsearch=${query.term}`);
//   const data = await res.json()
//
//   // Pass data to the page via props
//   return { props: { data } }
// }

export default SearchPage
