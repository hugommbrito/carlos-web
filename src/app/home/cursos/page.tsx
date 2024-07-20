'use client';

import { CardCF } from '@/components/card/Card';
import { kanit } from '@/ultils/fonts';
import { ArrowForward } from '@mui/icons-material';
import SearchIcon from '@mui/icons-material/Search';
import { Box, InputAdornment, TextField } from '@mui/material';
import { useEffect, useLayoutEffect, useState } from 'react';
import { Course, cursoBodybuilding } from '../../curso/mockDeCursos';
import Script from 'next/script';
import { BotaoYampi } from '@/components/card/botaoyampi';

export default function CursoPg() {
	const [courses, setCourses] = useState<Course[]>([cursoBodybuilding]);

	const [searchShrink, setSearchShrink] = useState<boolean>(false);
	const handleSearchShrink = (event: React.FocusEvent<HTMLInputElement>) => {
		setSearchShrink(!searchShrink);
	};

	const images = [  // DELETAR DEPOIS DA INTEGRAÇÃO
		'/images/banner.png',
		'/Logo.svg',
		'/images/Carlos.png',
		'/images/Consulting.png',
		'/images/logoApp.png',
		'/images/banner.png',
		'/Logo.svg',
		'/images/Carlos.png',
		'/images/Consulting.png',
		'/images/logoApp.png',
		'/images/banner.png',
		'/Logo.svg',
		'/images/Carlos.png',
		'/images/Consulting.png',
		'/images/logoApp.png',
	];

	return (
		<>
			<TextField
				variant="filled"
				label="Buscar curso"
				className={kanit.className}
				onFocus={handleSearchShrink}
				onBlur={handleSearchShrink}
				InputProps={{
					startAdornment: (
						<InputAdornment position="start" style={{ marginTop: '0' }}>
							<SearchIcon />
						</InputAdornment>
					),
				}}
				InputLabelProps={{
					className: kanit.className,
					shrink: searchShrink,
					style: { marginLeft: '30px' },
				}}
				sx={{
					width: '450px',
					marginBlock: '20px',
					marginInline: '40px',

					border: 'none',
					outline: 'none',
					backgroundColor: 'secondary.main',
					color: 'primary.light',
				}}
			></TextField>
			<Box id="conteudoPrincipal" display={'flex'} flexWrap={'wrap'} rowGap={8}>
			{/* <Script strategy='afterInteractive' className="ymp-script" src="https://api.yampi.io/v2/treinador-carlos/public/buy-button/5FE1UPCNMG/js"></Script> */}
				{courses[0].modules.map((module, index) => (
					<CardCF 
						key={index}
						title={module.lectures[0].name}
						description={module.lectures[0].description}
						image={images[index]}
						buttonText={'acessar'}
						buttonLink='/curso'
						buttonIcon={<ArrowForward />}
					/>
				))}
			</Box>
		</>
	);
}
