'use client'

import { useContext, useEffect, useState } from "react";
import { AuthContext } from "@/contexts/authContext";
import { Alert, Button, CircularProgress, FormControl, IconButton, Input, InputAdornment, LinearProgress, Link, Snackbar, TextField, Typography } from "@mui/material";
import { LoginSchema } from "@/schemas/auth.schemas";
import { ZodError } from "zod";
import { kanit, teko } from '@/ultils/fonts';
import Image from "next/image";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useRouter } from 'next/navigation';
import { AuthProvider } from "@/providers/mainApi/auth/auth.provider";
import { AxiosError } from "axios";
import { ArrowForwardRounded } from "@mui/icons-material";
type FormData = z.infer<typeof LoginSchema>;

export default function LoginPg() {
  const { setAuthPageImg, checkSession, login } = useContext(AuthContext);
  const imgAddress = 'https://plataforma-cf.s3.sa-east-1.amazonaws.com/c012145b-0cfa-4abe-b243-c6d8b4c19fd2.jpg'
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  //Snackbar and Alert states
  const [openAlert, setOpenAlert] = useState(false)
  const [AlertMessage, setAlertMessage] = useState('')
  const [AlertSeverity, setAlertSeverity] = useState<'error' | 'success' | 'info' | 'warning'>('info')
  const alertTimer = 3000


  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting, isDirty, isValid },
  } = useForm<FormData>({
    resolver: zodResolver(LoginSchema),
  });


  // eslint-disable-next-line react-hooks/exhaustive-deps
  async function onSubmit(data: FormData) {
    const response = await AuthProvider.login(data)

    if(response instanceof AxiosError){
      setAlertMessage(response.response!.data.description)
      setAlertSeverity('error')
      setOpenAlert(true)

    } else {
      console.log(response);
      setAlertMessage(response.data.message)
      setAlertSeverity('success')
      setOpenAlert(true)
      setTimeout(() => {
        login(response.data.accessToken)
      }, alertTimer)

    }

    
  }

  const handleAlertClose = () => {
    setOpenAlert(false)
  }

  useEffect(() => {
    if(checkSession()) router.push('/home/cursos')
    setAuthPageImg(imgAddress)

    return () => { }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])


  return (
    <>
      <Typography width={'100%'} className={teko.className} fontSize={{ xs: '40px', sm: '40px', md: '40px', lg: '60px' }} sx={{ lineHeight: "60px" }} fontWeight={600}>
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
        <Typography sx={{ cursor: 'pointer' }} fontSize={14} fontWeight={300}>
          <Link onClick={() => router.push('/auth/password/recovery')} underline="none" className={kanit.className}>
            Esqueci minha senha!
          </Link>
        </Typography>
        <Button

          className={teko.className}
          // endIcon={<Image src="/Arrow.svg" alt="arrow-right" width={20} height={20} />}
          endIcon={isSubmitting ? <CircularProgress /> : <ArrowForwardRounded />}
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
        >ENTRAR!</Button>
        <Typography sx={{ cursor: 'pointer' }} className={kanit.className} fontSize={14} fontWeight={300}>
          <Link underline="none" className={kanit.className} onClick={() => router.push('/auth/register')}>
            Criar minha conta
          </Link>
        </Typography>

      </FormControl >
      <Typography className={kanit.className} fontSize={14} fontWeight={300} sx={{ marginTop: '100px', width: '100%' }}>© Todos os direitos reservados!</Typography>
      <Snackbar 
        open={openAlert}
        autoHideDuration={alertTimer}
        onClose={handleAlertClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
        >
        <Alert
          severity={AlertSeverity}
          variant="filled"
          onClose={handleAlertClose}
        >
          <Typography className={kanit.className} fontSize={14} fontWeight={300}>
            {AlertMessage}
          </Typography>
        </Alert>
      </Snackbar>
    </>
  )
}
