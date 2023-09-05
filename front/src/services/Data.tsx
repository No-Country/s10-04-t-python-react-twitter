import { useMutation } from "react-query";
import axios from "axios";
import {dataContext} from './dataContext';
import { useState} from 'react'
  
  
import React from 'react'

const Data: React.FC = ({children}) => {

  const [userId, setUserId] = useState("");

  // const mutation = useMutation(async (formData) => {
  //   console.log("formData", formData);
  //   const response = await axios.post(
  //     "http://15.229.1.136/users/api/login/",
  //     formData, 
  //     {}
  //   );
  //   setUserId(response.data.id);
  //   // navigate("/home");
  //   return response.data;
  // });

  const mutation = useMutation(async (formData) => {
    console.log("formData", formData);
    const response = await axios.post(
      "http://15.229.1.136/users/api/login/",
      formData, 
      {
        headers: {
          "X-Frame-Options": "SAMEORIGIN"
        }
      }
    );
    setUserId(response.data.id);
    // navigate("/home");
    return response.data;
  });
  

  return (
    <dataContext.Provider
    value={{
      mutation,
      userId
    }}
    >
      {children}
    </dataContext.Provider>
  )
}

export default Data;


  
  
  
  