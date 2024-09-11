'use client'

import { useContext, useEffect, useState } from "react";
import { AuthContext } from "@/contexts/authContext";
import { Button, Link, FormControl, IconButton, InputAdornment, TextField, Typography, Box } from "@mui/material";
import { kanit, teko } from "@/ultils/fonts";
import Image from "next/image";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { RegisterSchema } from "@/schemas/auth.schemas";
import { useRouter } from 'next/navigation';
import { UserProvider } from "@/providers/main-api/user/user.provider";
import { AxiosError } from "axios";
import { SnackbarAlertContext } from "@/contexts/snackbarAlertContext";
import { red } from "@mui/material/colors";

type FormData = z.infer<typeof RegisterSchema>;

export default function LoginPg() {
  const {setAlertMessage, setAlertSeverity, setIsOpenAlert, alertTimer} = useContext(SnackbarAlertContext)
  const { setAuthPageImg } = useContext(AuthContext)
  const imgAddress = 'https://plataforma-cf.s3.sa-east-1.amazonaws.com/db9b0174-277d-4479-9231-340f202746e1.jpg'

  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);
  const router = useRouter();
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting, isDirty, isValid },
  } = useForm<FormData>({
    resolver: zodResolver(RegisterSchema),
    mode: 'onBlur',
  });


  async function onSubmit(data: FormData) {
    const response = await UserProvider.register(data)
    if (response instanceof AxiosError) {
      setAlertMessage(response.response!.data.description)
      setAlertSeverity('error')
      setIsOpenAlert(true)
    } else {
      setAlertMessage(response.data.message)
      setAlertSeverity('success')
      setIsOpenAlert(true)
      setTimeout(() => {
        router.push('/auth/login')
      }, alertTimer)
    }

    return () => { }

  }

  useEffect(() => {
    setAuthPageImg(imgAddress)

    return () => { }
  },)

  return (
    <>
      <Typography width={'100%'} className={teko.className} fontSize={{ xs: '40px', sm: '40px', md: '40px', lg: '60px' }} sx={{ lineHeight: "60px" }} fontWeight={600}>
        CADASTRE-SE E ACESSE A PLATAFORMA
      </Typography>
      <FormControl component="form" onSubmit={handleSubmit(onSubmit)} sx={{ width: '100%', gap: '20px' }}>
        <Box
          display={"flex"}
          flexDirection={"row"}
          justifyContent={"space-between"}
        >
          <TextField
            sx={{ width: '49%' }}
            {...register("name", { required: true })}
            error={errors.name ? true : false}
            variant="outlined"
            className={kanit.className}
            label='Nome'
          />
          
          <TextField

            sx={{ width: '49%' }}
            {...register("surname", { required: true })}
            error={errors?.surname ? true : false}
            variant="outlined"
            className={kanit.className}
            label='Sobrenome'
          />
          
        </Box>
        <TextField
          {...register("email", { required: true })}
          error={errors?.email ? true : false}
          variant="outlined"
          className={kanit.className}
          label='Email'
        />
        
        <TextField
          {...register("birthdate", { required: true })}
          error={errors?.birthdate ? true : false}
          variant="outlined"
          type="date"
          className={kanit.className}
          placeholder=""
        // label='Data de nascimento'
        />
        
        <Box
          display={"flex"}
          flexDirection={"row"}
          justifyContent={"space-between"}
        >

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

            sx={{ width: '49%' }}
            variant="outlined"
            type={showPassword ? 'text' : 'password'} // Adicione esta linha para alternar entre texto e senha
            label='Senha' />
          
          <TextField

            sx={{ width: '49%' }}
            error={errors?.confirmPassword ? true : false}
            {...register("confirmPassword", {
              required:
                true
            })}
            InputProps={{ // Adicione esta propriedade para personalizar o input
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => setShowPasswordConfirm(!showPasswordConfirm)} // Função para alternar entre mostrar/esconder a senha
                  >
                    {showPasswordConfirm ? <VisibilityIcon /> : <VisibilityOffIcon />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            variant="outlined"
            type={showPasswordConfirm ? 'text' : 'password'} // Adicione esta linha para alternar entre texto e senha
            label='Confirmar senha' />
          
        </Box>

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
        >Cadastre-se!</Button>
        {Object.values(errors).map((error, index) => {
          console.warn(error.message);
          return(
          <Typography
            key={index}
            color={red[700]}
            lineHeight={0.5}
          >
            {error.message}
          </Typography>
          )})
        }
        <Typography sx={{ cursor: 'pointer' }} className={kanit.className} fontSize={14} fontWeight={300}>
          <Link underline="none" className={kanit.className} onClick={() => router.push('/auth/login')}>
            Já tenho conta!
          </Link>
        </Typography>

      </FormControl >
      <Typography className={kanit.className} fontSize={14} fontWeight={300} sx={{ marginTop: '100px', width: '100%' }}>© Todos os direitos reservados!</Typography>
    </>
  )
}
