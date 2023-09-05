import axios from "axios";

type AddPost = {
    usuario: number
    multimedia?: File 
    contenido?: string
    gif?: string
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
  
      return await axios.post('http://15.229.1.136/tweets/api/tweets/', formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
    }
  }
  