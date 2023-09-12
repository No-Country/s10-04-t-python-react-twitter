import axios from "axios";


const API_KEY = "sZln5W5GZEj6RQICQPSiBAKSvIOPrfiw";

export async function fetchSearch (debouncedSearchText:string) {
    const response = await axios.get(
      `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${debouncedSearchText}`
    );
    return response.data
  }

  export async function fetchGifs() {
    const response = await axios.get(`https://api.giphy.com/v1/gifs/categories?api_key=${API_KEY}&limit=8`);
    return response.data;
  }