import React from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head';

export default function Article() {

  const router = useRouter();

  console.log(router);
  console.log(router.route);
  console.log(router.asPath);
  console.log(router.query);

  const pushFunction = () => {
    router.push('/');
  }
  
  return (
    <>
    <Head>
      <title>{router.query.id}</title>
    </Head>
    <div>
      <h1>{router.query.id}</h1>
      <button className="btn btn-primary" onClick={pushFunction}>Push to Home</button>
    </div>
    </>
  );
}
