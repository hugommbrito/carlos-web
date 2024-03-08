'use client'

import { useContext, useEffect, useState } from "react";
import { AuthContext } from "@/contexts/authContext";
import { Button, FormControl, IconButton, Input, InputAdornment, Link, TextField, Typography } from "@mui/material";
import { LoginSchema } from "@/schemas/auth.schemas";
import { ZodError } from "zod";
import { kanit, teko } from '@/ultils/fonts';
import Image from "next/image";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

type FormData = z.infer<typeof LoginSchema>;

export default function LoginPg() {
  const { setAuthPageImg } = useContext(AuthContext);
  const imgAddress = 'https://plataforma-cf.s3.sa-east-1.amazonaws.com/c012145b-0cfa-4abe-b243-c6d8b4c19fd2.jpg'
  const [showPassword, setShowPassword] = useState(false);
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting, isDirty, isValid },
  } = useForm<FormData>({
    resolver: zodResolver(LoginSchema),
  });


  async function onSubmit(data: FormData) {
    console.log(isSubmitting);
    console.log(data);
  }

  useEffect(() => {
    setAuthPageImg(imgAddress)

    return () => { }
  },)

  return (
    <>
      <Typography className={teko.className} fontSize={60} sx={{ lineHeight: "60px" }} fontWeight={600}>
        ACESSAR A PLATAFORMA
      </Typography>
      <FormControl component="form" onSubmit={handleSubmit(onSubmit)} sx={{ width: '100%', gap: '20px' }}>
        <TextField
          {...register("email", { required: true })}
          error={errors?.email ? true : false}
          variant="outlined"
          className={kanit.className}
          label='E-mail'

        />
        {errors?.email && (
          <p className="text-red-600 text-sm">
            {errors?.email?.message}
          </p>
        )}
        <TextField
          error={errors?.password ? true : false}
          {...register("password", {
            required:
              true
          })}
          InputProps={{ // Adicione esta propriedade para personalizar o input
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={() => setShowPassword(!showPassword)} // Função para alternar entre mostrar/esconder a senha
                >
                  {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                </IconButton>
              </InputAdornment>
            ),
          }}
          variant="outlined"
          type={showPassword ? 'text' : 'password'} // Adicione esta linha para alternar entre texto e senha

          label='Senha' />
        {errors?.password && (
          <p className="text-red-600 text-sm">
            {errors?.password?.message}
          </p>
        )}
        <Typography fontSize={14} fontWeight={300}>
          <Link underline="none" className={kanit.className} href="">
            Esqueci minha senha!
          </Link>
        </Typography>
        <Button

          className={teko.className}
          endIcon={<Image src="/Arrow.svg" alt="arrow-right" width={20} height={20} />}
          sx={{
            color: '#CCFD5D',

            background: '#1D1E1E',
            ":disabled": {
              backgroundColor: '#DBDBDB',
              color: '#1D1E1E',
            },
            '& :hover': {
              backgroundColor: '#1D1E1E',
            },
            padding: '32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', height: '50px', fontSize: '24px'
          }}
          type="submit" disabled={!isDirty || !isValid || isSubmitting}
        >ENTRAR!</Button>
        <Typography className={kanit.className} fontSize={14} fontWeight={300}>
          <Link underline="none" className={kanit.className} href="">
            Criar minha conta
          </Link>
        </Typography>

      </FormControl >
      <Typography className={kanit.className} fontSize={14} fontWeight={300} sx={{ marginTop: '100px', width: '100%' }}>© Todos os direitos reservados!</Typography>
    </>
  )
}
