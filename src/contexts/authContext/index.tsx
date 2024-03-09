'use client'

import { createContext, useState } from "react";
import { iAuthContextProviderProps, iAuthContextValues, iUserLogin, iUserRegister } from "./types";
import { axiosController } from "@/ultils/service.controller.js";


export const AuthContext = createContext({} as iAuthContextValues)

export const AuthContextProvider = ({ children }: iAuthContextProviderProps) => {
  const [authPageImg, setAuthPageImg] = useState<string>('');
  const http = axiosController

  function postUser(data: iUserRegister) {

    return http.post('/users', JSON.stringify(data))
  }
  function loginUser(data: iUserLogin) {
    return http.post('/auth/login', data)
  }




  return (
    <AuthContext.Provider
      value={{
        authPageImg,
        setAuthPageImg,
        postUser,
        loginUser

      }}
    >
      {children}
    </AuthContext.Provider>
  )
}