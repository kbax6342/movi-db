import React , {useEffect}from 'react'
import axios from "axios"
import { useState } from 'react';


const Genre = () => {
  const [loading, setloading] = useState(null)
    useEffect(() => {
        const getGenre = async () => {
          try {
            const res = await axios.get(
              'https://api.themoviedb.org/3/search/collection?api_key=6e3994632ccdca23fd457df2468b20c0&language=en-US&query=Action&page=1'
            );
            
            setloading(false)
          
          } catch (err) {
            console.log(err);
          }
        };
    
        getGenre();
      }, []);
    
  return (
    <div>
      Hello Genre
    </div>
  )
}

export default Genre
