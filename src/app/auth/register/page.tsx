'use client'

import { useContext, useEffect } from "react";
import { AuthContext } from "@/contexts/authContext";

export default function LoginPg(){
  const { setAuthPageImg } = useContext(AuthContext);
  const imgAddress = 'https://plataforma-cf.s3.sa-east-1.amazonaws.com/db9b0174-277d-4479-9231-340f202746e1.jpg'

  useEffect(() => {
    setAuthPageImg(imgAddress)

    return () => {}
  },)

  return <h1>Login Page</h1>
}
