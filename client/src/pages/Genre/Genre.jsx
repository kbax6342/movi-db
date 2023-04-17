import React from 'react'

const Genre = () => {
    useEffect(() => {
        const getGenre = async () => {
          try {
            const res = await axios.get(
              'https://api.themoviedb.org/3/search/collection?api_key=6e3994632ccdca23fd457df2468b20c0&language=en-US&query=Action&page=1'
            );
            
            setloading(false)
            console.log(genre);
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
