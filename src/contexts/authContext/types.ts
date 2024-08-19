import { NextRequest } from "next/server"
import { VoidFunctionComponent } from "react"

export interface iAuthContextValues {
  authPageImg: string,
  setAuthPageImg: (image: string) => void,
  session: iSession,
  setSession: (session: iSession) => void,
  checkSession: () => boolean,
  login: (token: string) => void,
  logout: (req: NextRequest) => void
}

export interface iAuthContextProviderProps {
  children: React.ReactNode
}

export interface iSession {
  isLogged: boolean,
  user: {
    sub: string,
    name: string,
    role: 'admin' | 'user' | 'staff'
  } | undefined
}

export interface iUserRegister{
  name: string,
  email: string,
  password: string,
  surname: string,
  birthdate: string,
  role: string,
}
export interface iUserLogin{
  email: string,
  password: string
}