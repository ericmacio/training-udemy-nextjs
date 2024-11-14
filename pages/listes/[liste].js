import React from 'react';
import styles from '../../styles/Home.module.css';
import { useRouter } from 'next/router'

export default function Liste(props) {

    console.log(props);

    const router = useRouter();
    const name = router.query.liste;
    console.log('liste name from router: ' + name);

    if(!props.currentList) {
        return(<h1>Loading ...</h1>);
    }

    return (
        <>
        <div className='container'>
        <h1 className={styles.titre}>{name.charAt(0).toUpperCase() + name.slice(1)}</h1>
        <table className={styles.tableau}>
            <tbody>
                    {props.currentList[name].map((item, id) => {
                        return (
                            <tr key={id}>
                                <td>{item.en}</td>
                                <td>{item.fr}</td>
                            </tr>
                        )})
                    }
            </tbody>
        </table>
        </div>
        </>
    )
}

export async function getStaticProps(context) {

    const currListName = context.params.liste;
    console.log('currListName: ' + currListName);
    const data = await import('/data/listes.json');
    const currentList = data.englishList.find(item => Object.keys(item)[0] === currListName);
    
    if(!currentList) {
        return {
            notFound: true
        }
    }

    return {
        props: {
            currentList
        }
    }
  
  }

export async function getStaticPaths() {

    // const data = await import('/data/listes.json');
    // const paths = data.englishList.map(item => {
    //     return(
    //         {
    //             params: {
    //                 liste: Object.keys(item)[0]
    //             }
    //         }
    //     )
    // })

    return {
        paths: [
            { params: {liste: "words"}},
            { params: {liste: "verbs"}}
        ],
        fallback: true
    }

}
