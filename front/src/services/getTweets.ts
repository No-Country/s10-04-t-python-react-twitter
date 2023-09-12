import axios from "axios";




export function getTweets() {
    return axios.get("http://15.229.1.136/tweets/api/tweets/");
  }
  export function getTweetsComments(tweet_id:number | null) {
    
    return axios.get(`http://15.229.1.136/tweets/api/detail/${tweet_id}/`)
  }