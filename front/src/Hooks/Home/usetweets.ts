import { useQuery } from "@tanstack/react-query";
import { getTweets } from "../../services/getTweets";
export interface TweetsInterface {
  id: number;
  contenido: string;
  multimedia: string;
  gif: string;
  created: string;
  comentario_count?: number;
  liked_count?: number;
  retweet_count?: number;
}

export default function useTweets() {
  const { data, isLoading } = useQuery({
    queryKey: ["newtweets"],
    queryFn: getTweets,
  });
  return { data, isLoading };
}
