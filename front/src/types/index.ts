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
  export interface DataResultProps {
    data:{
        data: Gif[]; 
    }
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