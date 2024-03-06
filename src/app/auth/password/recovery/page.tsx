'use client'

import { useContext, useEffect } from "react";
import { AuthContext } from "@/contexts/authContext";

export default function LoginPg(){
  const { setAuthPageImg } = useContext(AuthContext);
  const imgAddress = 'https://plataforma-cf.s3.sa-east-1.amazonaws.com/24bfd9d0-5e3d-4b90-8914-b283d5b58da4.jpg'

  useEffect(() => {
    setAuthPageImg(imgAddress)

    return () => {}
  },)

  return <h1>Login Page</h1>
}
