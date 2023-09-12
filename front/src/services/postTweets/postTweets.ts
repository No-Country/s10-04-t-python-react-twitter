import axios from "axios";

export type AddPost = {
  
    usuario: string | null
    multimedia?: File | null 
    contenido?: string | null
    gif?: string | null
  }


  export async function postTweets(newPost:AddPost) {
    if (newPost) {
      const formData = new FormData();
      formData.append('usuario', Number(newPost.usuario).toString());
      
      if (newPost.multimedia) {
        formData.append('multimedia', newPost.multimedia);
      }
      
      if (newPost.contenido) {
        formData.append('contenido', newPost.contenido);
      }
      
      if (newPost.gif) {
        formData.append('gif', newPost.gif);
      }
  
      return await axios.post('http://ec2-15-229-1-136.sa-east-1.compute.amazonaws.com/tweets/api/tweets/', formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
    }
  }
  