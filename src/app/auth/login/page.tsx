'use client'

import { useContext, useEffect, useState } from "react";
import { AuthContext } from "@/contexts/authContext";
import { Button, FormControl, Input, TextField, Typography } from "@mui/material";
import { LoginSchema } from "@/schemas/auth.schemas";
import { ZodError } from "zod";
import { kanit, teko } from '@/ultils/fonts';
import Image from "next/image";

export default function LoginPg() {
  const { setAuthPageImg } = useContext(AuthContext);
  const imgAddress = 'https://plataforma-cf.s3.sa-east-1.amazonaws.com/c012145b-0cfa-4abe-b243-c6d8b4c19fd2.jpg'
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  useEffect(() => {
    setAuthPageImg(imgAddress)

    return () => { }
  },)

  return (
    <>
      <Typography className={teko.className} fontSize={60} sx={{ lineHeight: "60px" }} fontWeight={600}>
        ACESSAR A PLATAFORMA
      </Typography>
      <FormControl sx={{ width: '100%', gap: '20px' }}>
        <TextField value={email}
          onChange={(e) => setEmail(e.target.value)}

          variant="outlined"
          className={kanit.className}
          label='E-mail'
          type="email"
        />

        <TextField value={password}
          onChange={(e) => setPassword(e.target.value)}

          variant="outlined"
          type="password"
          label='Senha' />
        <Typography className={kanit.className} fontSize={14} fontWeight={300}><a href="">Esqueci minha senha!</a></Typography>
        <Button
          variant="contained"
          className={teko.className}
          style={{ backgroundColor: '#1D1E1E' }}

          endIcon={<Image src="/Arrow.svg" alt="arrow-right" width={20} height={20} />}
          sx={{
            ":hover": {
              backgroundColor: "#DBDBDB"
            }, padding: '32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', height: '50px', backgroundColor: '#1D1E1E', fontSize: '24px'
          }}

        >ENTRAR!</Button>
        <Typography className={kanit.className} fontSize={14} fontWeight={300}><a href="">Criar minha conta</a></Typography>

      </FormControl >
      <Typography className={kanit.className} fontSize={14} fontWeight={300} sx={{ marginTop: '100px', width: '100%' }}>© Todos os direitos reservados!</Typography>
    </>
  )
}
