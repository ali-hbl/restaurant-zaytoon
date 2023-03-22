import { useState, useEffect } from 'react';

const useFetch = (fetchURL) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Creer un composant qui prend en props le chemin localhost + le backend
  // Renvoyer une image d'erreur par defaut

  useEffect(() => {
    let path = process.env.REACT_APP_BACKEND_URL + fetchURL;

    // check if the path is a string
    if (typeof path === 'string') {
      // add a slash at the end of it
      !path.endsWith('/') ? (path += '/') : console.error('Le chemin doit être une chaîne de caractères.');
    }

    fetch(path)
      .then((response) => response.json())
      .then((json) => {
        setData(json);
        setIsLoading(false);
      })
      .catch((error) => console.error(error.message));
  }, [fetchURL]);

  return { data, isLoading };
};

export default useFetch;
