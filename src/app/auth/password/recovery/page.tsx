'use client'

import { useContext, useEffect, useState } from "react";
import { AuthContext } from "@/contexts/authContext";
import { Button, FormControl, IconButton, Input, InputAdornment, Link, TextField, Typography } from "@mui/material";
import { emailRecoverySchema } from "@/schemas/auth.schemas";
import { ZodError } from "zod";
import { kanit, teko } from '@/ultils/fonts';
import Image from "next/image";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
type FormData = z.infer<typeof emailRecoverySchema>;

export default function LoginPg() {
  const { setAuthPageImg } = useContext(AuthContext);
  const imgAddress = 'https://plataforma-cf.s3.sa-east-1.amazonaws.com/24bfd9d0-5e3d-4b90-8914-b283d5b58da4.jpg'

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting, isDirty, isValid },
  } = useForm<FormData>({
    resolver: zodResolver(emailRecoverySchema),
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
      <Typography width={'100%'} className={teko.className} fontSize={{ xs: '40px', sm: '40px', md: '40px', lg: '60px' }} sx={{ lineHeight: "60px" }} fontWeight={600}>
        ESQUECI MINHA SENHA!
      </Typography>
      <Typography width={'100%'} marginBottom={'20px'} className={kanit.className} fontSize={{ xs: '20px', sm: '20px', md: '20px', lg: '20px' }} fontWeight={400}>
        Preencha seu e-mail e vamos te enviar um link para criar sua nova senha
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
            padding: '32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', height: '50px', fontSize: '20px'
          }}
          type="submit" disabled={!isDirty || !isValid || isSubmitting}
        >Solicitar mudança</Button>
        <Typography className={kanit.className} fontSize={14} fontWeight={300}>
          <Link underline="none" className={kanit.className} href="">
            Voltar
          </Link>
        </Typography>

      </FormControl >
      <Typography className={kanit.className} fontSize={14} fontWeight={300} sx={{ marginTop: '100px', width: '100%' }}>© Todos os direitos reservados!</Typography>
    </>
  )
}
