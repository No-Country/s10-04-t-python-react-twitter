
import { axiosWithAuth } from "./configHeader"

interface addComment {
    usuario:number | null
    tweet_original:number | null
    content:string
    multimedia: File | null 
    gif: string
}


export async function postComment(newComment: addComment) {
    try {
      if (newComment) {
        const formData = new FormData();
  
        formData.append('usuario', Number(newComment.usuario).toString());
        formData.append('tweet_original', Number(newComment.tweet_original).toString());
  
        if (newComment.content) {
          formData.append('content', newComment.content);
        }
  
        if (newComment.multimedia) {
          formData.append('multimedia', newComment.multimedia);
        }
  
        if (newComment.gif) {
          formData.append('gif', newComment.gif);
        }
    
        const response = await axiosWithAuth.post('http://15.229.1.136/tweets/api/comentario/', formData);
        return console.log(response.data,formData,{
            headers: {
                "Content-Type": "multipart/form-data",
              },
        });
      }
    } catch (error) {
      console.error('Error posting comment:', error);
      throw error; 
    }
  }
  