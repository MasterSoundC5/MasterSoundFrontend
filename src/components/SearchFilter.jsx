import React, { useState } from 'react';
import SquareAlbum from './SquareAlbum';


const SearchFilter = () => {
  // const listArist = ["Artic Monkeys", "Queen", "Foo Fighters", "Nirvana", "Kings Of Leon"]
  const [ query, setQuery ] = useState('')
  const albumLocalStorage = JSON.parse( localStorage.getItem("albums"))
  

  return (
    <>
      <input type="text" placeholder="Search your entertainment" 
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
        }}
      />
      <ul>
        {albumLocalStorage.map((data) => {
          if(query.length !== 0) {
            if(data.toLocaleLowerCase().startsWith(query.toLocaleLowerCase())) {
              return <li>{data.spt_album_id}</li>
            } else {
              return null
            }
          }
          return <SquareAlbum data={data} key={data.spt_album_id} {...data}/>
        })}
      </ul>
    </>
  )
}

export default SearchFilter