import {useState, useEffect} from 'react'
import API_KEY from './Keys'

const CONTEXT_KEY = "b7db92d0d00274a99";

const useGoogleSearch = (term) => {
  const [data, setData] = useState(null);
  
  useEffect(() => {
    const fetchData = async() => {
        fetch(`https://www.googleapis.com/customsearch/v1?key=AIzaSyBaniSYv6d-c1oO4M0NBaApcaZr-bWJuNA&cx=b7db92d0d00274a99&q=+${term}`)

            .then(response => response.json())
            .then(result => {
                setData(result)
            })
    }
    fetchData();

  }, [term])

  return { data }
};

export default useGoogleSearch
