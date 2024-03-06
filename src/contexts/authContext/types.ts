export interface iAuthContextValues {
  authPageImg: string,
  setAuthPageImg: (image: string) => void
}

export interface iAuthContextProviderProps {
  children: React.ReactNode
}