import React from 'react';
import Head from 'next/head';

export default function contact(props) {

  console.log(props);

  return (
    <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Contact</title>
    </Head>
    <div>
        <h1>{props.data.quote}</h1>
        <p>{props.data.author}</p>
    </div>
    </>
  )
}

export async function getStaticProps() {
  const quote = await fetch("https://quoteslate.vercel.app/api/quotes/random");
  const data = await quote.json();

  return {
    props: {
      data
    },
    revalidate: 30
  }
}
