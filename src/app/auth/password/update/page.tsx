'use client'

import { useContext, useEffect } from "react";
import { AuthContext } from "@/contexts/authContext";

export default function LoginPg(){
  const { setAuthPageImg } = useContext(AuthContext);
  const imgAddress = 'https://plataforma-cf.s3.sa-east-1.amazonaws.com/1db62a04-414e-4bfa-96df-781234068311.jpg'

  useEffect(() => {
    setAuthPageImg(imgAddress)

    return () => {}
  },)

  return <h1>Login Page</h1>
}
