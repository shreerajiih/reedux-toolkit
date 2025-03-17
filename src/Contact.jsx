import React from 'react'
import { useNavigate } from 'react-router'
import { useGetPostWithIdQuery } from './redux/apis/user_api';

const Contact = () => {
const navigate = useNavigate();

  const dataFromApi = useGetPostWithIdQuery(15);
//   console.log("DATA FROM API ", dataFromApi);
    const moveToHome = () => {
      navigate("/");
    }
    
  return (
    <div>
         <button onClick={moveToHome}>navigate to home</button>
    </div>
  )
}

export default Contact
