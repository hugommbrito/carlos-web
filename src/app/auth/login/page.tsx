'use client'

import { useContext, useEffect } from "react";
import { AuthContext } from "@/contexts/authContext";
import { Button, FormControl, Input, TextField, Typography } from "@mui/material";

export default function LoginPg(){
  const { setAuthPageImg } = useContext(AuthContext);
  const imgAddress = 'https://plataforma-cf.s3.sa-east-1.amazonaws.com/c012145b-0cfa-4abe-b243-c6d8b4c19fd2.jpg'

  useEffect(() => {
    setAuthPageImg(imgAddress)

    return () => {}
  },)

  return (
    <>
      <Typography >
        ACESSAR A PLATAFORMA
      </Typography>
      <form>
          <TextField variant="outlined" label='E-mail'/> 
          <TextField variant="outlined" type="password" label='Senha'/>
          <Button
            variant="contained"
            color="primary"
            // sx={{
            //   backgroundColor: 'primary.main',
            //   color: 'primary.contrastText',
            // }}
          >ENTRAR!</Button>

      </form>
    </>
  )
}
