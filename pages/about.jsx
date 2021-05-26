import Head from "next/head";

function About() {
  return (
    <>
      <Head>
        <title>About</title>
        <meta property="og:title" content="About" key="title" />
      </Head>
      <div className="content">
        <h1>About</h1>
      </div>
    </>
  );
}

export default About;
