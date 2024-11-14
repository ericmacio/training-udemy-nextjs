import React from 'react'

export default function bitcoin(props) {
  return (
    <div>
        <h1>Bitcoin current rate: {props.result.bpi.EUR.rate} {props.result.bpi.EUR.code}</h1>
    </div>
  )
}

export async function getServerSideProps() {

    const data = await fetch("https://api.coindesk.com/v1/bpi/currentprice.json");
    const result = await data.json();

    return {
        props: {
            result
        }
    }
}
