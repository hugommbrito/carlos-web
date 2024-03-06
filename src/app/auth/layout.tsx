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
        sx={{
          backgroundColor: 'background.default',
        }}
        color='primary.main'
      >
				<Box
          className='auth-form'
					sx={{
            marginInline: '10%',
            marginBlock: 'auto',
						width: '35%',
					}}
				>
					{children}
				</Box>
				<Box
          className='auth-bkg-img'
          component='img'
          src={authPageImg}
          width='65%'
          style={{objectFit: 'cover'}}
        ></Box>
        <Box
          className='auth-logo-npv'
          component={'img'}
          src='https://plataforma-cf.s3.sa-east-1.amazonaws.com/90232cb9-7363-4f41-8c12-c8cd3170884e.png'
          position='absolute'
          top='5vh'
          right='5vw'
          width='100px'
        />
			</Box>
		</>
	);
};

export default AuthLayout;
