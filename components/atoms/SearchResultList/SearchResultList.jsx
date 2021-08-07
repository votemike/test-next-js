import Link from "next/link";
import styles from "./SearchResultList.module.css";

function SearchResultList({ urlPrefix, results }) {
  return (
    <ol className={styles.list}>
      {results.map((result) => {
        return (
          <li key={result.slug} className={styles.listLink}>
            <Link href={`${urlPrefix}/${result.slug}`}>{result.name}</Link>
            {result.extra && (
              <>
                {" "}
                <span>({result.extra})</span>
              </>
            )}
          </li>
        );
      })}
    </ol>
  );
}

export default SearchResultList;
