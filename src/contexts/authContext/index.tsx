'use client'

import { createContext, useState } from "react";
import { iAuthContextProviderProps, iAuthContextValues } from "./types";

export const AuthContext = createContext({} as iAuthContextValues)

export const AuthContextProvider = ({ children}: iAuthContextProviderProps) => {
  const [authPageImg, setAuthPageImg] = useState<string>('');

  return (
    <AuthContext.Provider
      value={{
        authPageImg,
        setAuthPageImg
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}