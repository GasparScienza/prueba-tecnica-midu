import { useEffect, useState } from 'react'
import { getFact } from '../service/getFact';
export function useCatFact(){
    const [fact, setFact] = useState('');
    const getRandomFact = () => {
      getFact().then(newFact => setFact(newFact))
    }
    useEffect(getRandomFact, [])
  
    return{ fact, getRandomFact }
  }