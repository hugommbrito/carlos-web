'use client'
import axios from "axios";

import { createContext, useState } from "react";
import { iAuthContextProviderProps, iAuthContextValues, iUserLogin, iUserRegister } from "./types";
import { axiosController } from "@/ultils/service.controller.js";


// const baseURL = 'http://localhost:3333';
const baseURL = 'https://carlos-api-git-develop-hugommbritos-projects.vercel.app/';

export const AuthContext = createContext({} as iAuthContextValues)

export const AuthContextProvider = ({ children }: iAuthContextProviderProps) => {
  const [authPageImg, setAuthPageImg] = useState<string>('');
  const http = axios.create({
    baseURL: baseURL, headers: { 'Content-Type': 'application/json' },
  });

  async function postUser(data: iUserRegister) {
    return await http.post('/users', data)

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