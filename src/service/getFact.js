import { URL1 } from '../const';

export const getFact = () => {
    return fetch(`${URL1}`)
            .then(response => {
              if(!response.ok) throw new Error('Error fetching Fact')
              return response.json()
            })
            .then(data =>{
              const { fact } = data;
              return fact
            }).catch((error) =>{
              console.log(error)
            })
  }