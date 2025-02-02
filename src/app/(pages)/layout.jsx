"use client";

import { useEffect, useState } from "react";
import userAuth from "@/utils/auth";
import { useDispatch } from "react-redux";
import { setUser } from "@/lib/features/userAuthSlice";
import Spinner from "@/Components/Spinner";

const layout = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true);
    const dispatch = useDispatch();
    useEffect(() => {
      userAuth.getUser()
      .then(res => {
        if(res._id) dispatch(setUser(res));     
         
        setIsLoading(false);
      })
      .catch(e => console.log(e))
    }, []);
  
  if(isLoading){
    return <Spinner/>
  }  
  return (
    <>
     {children}
    </>
  );
};

export default layout;