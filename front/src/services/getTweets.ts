import axios from "axios";




export function getTweets() {
    return axios.get("http://ec2-15-229-1-136.sa-east-1.compute.amazonaws.com/tweets/api/tweets/");
  }
  export function getTweetsComments(tweet_id:number | null) {
    
    return axios.get(`http://ec2-15-229-1-136.sa-east-1.compute.amazonaws.com/tweets/api/detail/${tweet_id}/`)
  }