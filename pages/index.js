import styles from '../styles/Home.module.css';
import Head from 'next/head';
import { useState, useEffect} from 'react';

export default function Home(props) {

  const [state, setState] = useState(false);

  let randomWord;
  if(state) {
    const array = state.data.englishList[0].words;
    randomWord = array[Math.floor(Math.random() * array.length)].en;
    console.log('randomWord: ' + randomWord);
  }

  const newWord = () => {
    fetch('/api/vocapi')
      .then(response => response.json())
      .then(data => setState(data));
  };

  return (
    <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Home Page</title>
    </Head>
      <div>
        <h1 className={styles.titre}>Vocabulaire de base</h1>
        {/* <table className={styles.tableau}>
          <tbody>
            {props.array.map((el, id) => {
              return (
              <tr key={id}>
                <td>{el.en}</td>
                <td>{el.fr}</td>
              </tr>
            )})}
          </tbody>
        </table> */}
        <button onClick={newWord} className='btn btn-primary d-block m-auto'>Get RANDOM WORDS</button>
        <h2 className='text-center'>{randomWord}</h2>
      </div>
    </>
    
  );

}

export async function getStaticProps() {

  const data = await import('/data/vocabulary.json');
  const array = data.vocabulary;

  if(array.length < 10) {
    return {
      redirect: {
        destination: "/ISR"
      }
    }
  }

  return {
    props: {
      array
    }
  }

}
