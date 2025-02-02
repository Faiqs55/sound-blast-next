"use client";
import React from 'react'
import Spinner from '@/Components/Spinner';

const layout = ({children}) => {
    const token = localStorage.getItem('token');   
      if(token){
        window.location.replace('/');
        return <Spinner/>
      }

  return (
    <>{children}</>
  )
}

export default layout