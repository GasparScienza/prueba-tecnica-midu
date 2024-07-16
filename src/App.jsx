import React, { useEffect, useState } from 'react'
import { URL1, URL2 } from './const';

function App() {
    const [fact, setFact] = useState('');
    const [palabra, setPalabra] = useState('');
    const [url, setUrl] = useState('');

    useEffect(() => {
        fetch(`${URL1}`)
            .then(response => response.json())
            .then(data =>{
              const { fact } = data;
              setFact(fact)
              //con split devuelvo un array con las palabras separadas por un espacio
              //el slice me devuelve las 3 primeras palabras
              //El join convierte a string mi array
              //const primerPalabra = fact.split(' ').slice(0,3).join(' ')
              //Aca hace lo mismo pero en menos pasos
              //const primerPalabra = fact.split(' ', 3).join(' ')
              const primerPalabra = fact.split(' ').slice(0,1).join(' ')
              setPalabra(primerPalabra)
            })
    }, [])
    useEffect(() => {
      if(palabra){
        fetch(`${URL2}/${palabra}`)
              .then(data =>{
                const {url} = data;
                setUrl(url)
              })
      }
    }, [palabra])

  return (
    <>
        {fact && <p>{fact}</p>}
        <img src={url} alt="" />
    </>
  )
}

export default App