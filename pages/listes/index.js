import React from 'react';
import Link from 'next/link';

export default function index(props) {

    return (
        <>
        <div className='container'>
          <h1 className='my-4'>Listes</h1>
          <ul className='list-group'>
              {props.list.map((item, id) => {
                  const name = Object.keys(item)[0];
                  const href = '/listes/' + name;
                  return (
                      <li className="list-group-item" key={id}><Link  href={href} state={ item }>{name}</Link></li>
                  )})
              }
          </ul>
        </div>
        </>
    );

}

export async function getStaticProps() {

  const data = await import('/data/listes.json');

  return {
    props: {
      list: data.englishList
    }
  }

}

