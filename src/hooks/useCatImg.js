import React, { useEffect, useState } from 'react'
import { URL2, CONFIG } from '../const';

export function useCatImg({fact}){
    const [urlCat, setUrlCat] = useState('');
    useEffect(() => {
      if(!fact) return
      //con split devuelvo un array con las palabras separadas por un espacio
      //el slice me devuelve las 3 primeras palabras
      //El join convierte a string mi array
      //const primerPalabra = fact.split(' ').slice(0,3).join(' ')
      //Aca hace lo mismo pero en menos pasos
      //const primerPalabra = fact.split(' ', 3).join(' ')
      const primerPalabra = fact.split(' ')[0]
      fetch(`${URL2}/${primerPalabra}${CONFIG}`)
            .then(data =>{
              const {url} = data;
              setUrlCat(url)
            })
      return(() =>{
        setUrlCat('')
      })
    }, [fact])
    return {urlCat};
  }