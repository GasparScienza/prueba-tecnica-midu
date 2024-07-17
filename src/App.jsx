import React from 'react'
import { useCatImg } from './hooks/useCatImg'
import { useCatFact } from './hooks/useCatFact'





function App() {
    const { fact, getRandomFact } = useCatFact()
    const { urlCat } = useCatImg({fact})

    const handleClick = async () => {
      getRandomFact()
    }

  return (
    <>
      <button onClick={handleClick}>Cambiar Fact</button>
      {fact && <p>{fact}</p>}
      <img src={urlCat} alt="Cats Photo" />
    </>
  )
}

export default App