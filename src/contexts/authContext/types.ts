import { VoidFunctionComponent } from "react"

export interface iAuthContextValues {
  authPageImg: string,
  setAuthPageImg: (image: string) =>void,
  postUser: (data: iUserRegister) => any,
  loginUser: (data: iUserLogin) => any,
}

export interface iAuthContextProviderProps {
  children: React.ReactNode
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