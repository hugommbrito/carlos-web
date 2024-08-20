'use client'

import { NextRequest } from "next/server";
import { createContext, useState } from "react";
import { iAuthContextProviderProps, iAuthContextValues, iRoles, iSession } from "./types";
import { jwtDecode } from "jwt-decode";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";


export const AuthContext = createContext({} as iAuthContextValues)

export const AuthContextProvider = ({ children }: iAuthContextProviderProps) => {
  const [authPageImg, setAuthPageImg] = useState<string>('')
  const [session, setSession] = useState<iSession>({isLogged: false, token: undefined, user: undefined})

  const router = useRouter()

  const checkSession = (checkRole: boolean = false, allowedRoles:[iRoles] = ['user']): boolean => {

    const sessionToken: string |undefined = Cookies.get('sessionToken')

    if(!sessionToken) return false

    const loggedUser: iSession['user'] | undefined = jwtDecode(sessionToken)

    if(!loggedUser) return false

    if(checkRole && !allowedRoles.includes(loggedUser.role)) return false

    setSession({isLogged: true, token: sessionToken, user: loggedUser})
    return true
  }

  const login = async (token: string) => {
    Cookies.set('sessionToken', token)
    const loggedUser: iSession['user'] | undefined = jwtDecode(token)
    setSession({isLogged: true, token, user: loggedUser})

    router.replace('/home/cursos')
  }

  const logout = (req: NextRequest): void => {
    req.cookies.delete('sessionToken')
    setSession({isLogged: false, token: undefined, user: undefined})
    router.replace('/')
  }



  return (
    <AuthContext.Provider
      value={{
        authPageImg,
        setAuthPageImg,
        session,
        setSession,
        checkSession,
        login,
        logout
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}