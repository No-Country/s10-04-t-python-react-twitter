import { useQuery } from "@tanstack/react-query";
import { getTweetsComments } from "../../services/getTweets";
import usePostStore from "../../Hooks/Home/postStore/usePostStore";

export default function useSelectedTweet()
{
const {tweet_id} = usePostStore()
const { data } = useQuery(["tweetComments", tweet_id], () =>
  getTweetsComments(tweet_id)
);
return {data}
}