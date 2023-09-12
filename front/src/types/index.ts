export interface ResultsApi {
  id: string;
  images: {
    original: {
      url: string;
    };
  };
}
  
  export interface Gif {
    gif:{
        id: string
        images:{
            original:{
               url:string
            }
        }
    }
    name: string
  }
 
export interface ResultsApi {
  id: string;
  images: {
    original: {
      url: string;
    };
  };
  name?: string;
}
export interface TweetsInterface {
  id:number
  contenido: string;
  multimedia: string;
  gif:string;
  created: string;
  comentario_count?: number;
  liked_count?: number;
  retweet_count?: number;
  usuario?:{
    firs_name: string,
    avatar: string
  }
  
}