'use client'

import { AuthContext } from '@/contexts/authContext';
import { Box, Typography, makeStyles } from '@mui/material';
import { Url } from 'next/dist/shared/lib/router/router';
import Image from 'next/image';
import React, { ReactNode, useContext, useEffect } from 'react';

const AuthLayout = ({
  children
}: {
  children: ReactNode
}) => {
  const { authPageImg } = useContext(AuthContext);

  useEffect(() => {
    console.log(authPageImg);
  })

  return (
    <>
      <Box
        display='flex'
        width='100%'
        height='100vh'
        justifyContent={{ xs: 'flex-start', sm: 'flex-start' }}
        flexDirection={{ xs: 'column-reverse', sm: 'column-reverse', md: 'row' }}
        overflow={{ xs: 'auto', sm: 'auto', md: 'hidden' }}
        sx={{
          backgroundColor: 'background.default',
        }}
        color='primary.main'
      >
        <Box
          className='auth-form'
          display="flex"
          alignItems="center"
          flexDirection="column"
          justifyContent="center"
          padding={{ xs: '40px', sm: '40px', md: '60px' }}
          width={{ xs: '100%', sm: '100%', md: '35%' }}

        >
          {children}
        </Box>
        <Box
          className='auth-bkg-img'
          component='img'
          src={authPageImg}
          maxHeight={{ xs: '400px', sm: '400px', md: '100%' }}
          height={{ xs: '35%', sm: '45%', md: '100%' }}
          width={{ xs: '100%', sm: '100%', md: '65%' }}
          style={{ objectFit: 'cover', objectPosition: 'center' }}
        ></Box>
        <Box
          className='auth-logo-npv'
          component={'img'}
          src='https://plataforma-cf.s3.sa-east-1.amazonaws.com/90232cb9-7363-4f41-8c12-c8cd3170884e.png'
          position='absolute'
          top={{ xs: '13vh', sm: '13vh', md: '5vh' }}
          right={{ xs: '40vw', sm: '40vw', md: '5vw' }}
          width='100px'
        />
      </Box>
    </>
  );
};

export default AuthLayout;
