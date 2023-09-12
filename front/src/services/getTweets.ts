import axios from "axios";




export function getTweets() {
    return axios.get("https://twitter-api-6tse.onrender.com/tweets/api/tweets/");
  }
  export function getTweetsComments(tweet_id:number | null) {
    
    return axios.get(`https://twitter-api-6tse.onrender.com/tweets/api/detail/${tweet_id}/`)
  }