// 'use server'

import Script from 'next/script';

import { kanit, teko } from '@/ultils/fonts';
import { ArrowForward } from '@mui/icons-material';
import {
	Card,
	CardMedia,
	CardHeader,
	CardContent,
	Divider,
	CardActions,
	Button,
	Box,
} from '@mui/material';
import { useRouter } from 'next/navigation';
import { Router } from 'next/router';
import React from 'react';

interface iBotaoYampi {
	// script: JSX.Element
}

export const BotaoYampi: React.FC<iBotaoYampi> = () => {
	
	return (
		<Box >
			<Script className="ymp-script" src="https://api.yampi.io/v2/treinador-carlos/public/buy-button/5FE1UPCNMG/js" async></Script>
		</Box>
	);
};
