import React, { useEffect, useState } from 'react'
import { URL1, URL2 } from './const';

function App() {
    const [fact, setFact] = useState('');
    const [imagen, setImagen] = useState();

    useEffect(() => {
        fetch(`${URL1}`)
            .then(response => response.json())
            .then(data => setFact(data.fact))
    }, [])

    useEffect(() => {
        fetch(`${URL2}`)
            //.then(response => response.json())
            .then(data => setImagen(data))
    }, [])

  return (
    <>
        <h1>Hola desde APP</h1>
        <p>{fact}</p>
        
    </>
  )
}

export default App