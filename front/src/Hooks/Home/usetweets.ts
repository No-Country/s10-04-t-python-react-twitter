import { useQuery } from "@tanstack/react-query";
import { getTweets } from "../../services/getTweets";

export default function useTweets(){
    const { data } = useQuery(["newtweets"], getTweets);
    return{data}
       
    
}