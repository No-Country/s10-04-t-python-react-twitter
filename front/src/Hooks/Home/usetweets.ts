import { useQuery } from "@tanstack/react-query";
import { getTweets } from "../../services/getTweets";
export interface TweetsInterface {
    id:number
    contenido: string;
    multimedia: string;
    gif:string;
    created: string;
    comentario_count?: number;
    liked_count?: number;
    retweet_count?: number;
  }

  export default function useTweets() {
    const { data } = useQuery({
      queryKey: ['newtweets'],
      queryFn: getTweets,
    });
    return{data}
}
  
//     if (data) {
//       const mappedData = data?.data.slice().reverse().map((tweet:TweetsInterface) => ({
//         id: tweet.id,
//         contenido: tweet.contenido,
//         multimedia: tweet.multimedia,
//         gif: tweet.gif,
//         created: tweet.created,
//         likes: tweet.liked_count,
//         comentarios: tweet.comentario_count,
//         retweet: tweet.retweet_count,
//       }));
  
//       console.log(mappedData);
//       return {data:mappedData};
//     }
  
//     return [];
   
//   }