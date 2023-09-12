
import { axiosWithAuth } from "./configHeader"

interface addComment {
    usuario:string | null
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
  
        if (newComment.content && newComment.content.trim() !== "") {
          formData.append('content', newComment.content);
        }
  
        if (newComment.multimedia) {
          formData.append('multimedia', newComment.multimedia);
        }
  
        if (newComment.gif) {
          formData.append('gif', newComment.gif);
        }
    
        const response = await axiosWithAuth.post('https://twitter-api-6tse.onrender.com/tweets/api/comentario/', formData);
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
  