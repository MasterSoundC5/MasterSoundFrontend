import { useState, useEffect } from 'react';


export function useFetchmusic (url) {

  // ------ PARA USAR EL CUSTOM HOOK CONSUMIENDO INFO DEL JSON
  // const [recipe, setRecipe] = useState(url);

  // ------- PARA USAR EL CUSTOM HOOK Y CONSUMIR DE LA API
  const [music, settMusic] = useState([]);


  async function fetchMusic (url) {
    const response = await fetch(url);
    const data = await response.json();
    settMusic(data)
  }

  useEffect (() => {
    fetchMusic(url);
  }, [])


  // -----ESTA LINEA NUNCA SE DEBE DE COMENTAR -----
  return [music]
}

