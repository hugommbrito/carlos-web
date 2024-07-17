'use client'

import { CupomBanner } from '@/components/cupom/Cupom';

import { Autocomplete, Box, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Divider, IconButton, InputAdornment, TextField, Typography } from '@mui/material';
import Image from 'next/image';
import { useState } from 'react';
import { Course, cursoBodybuilding } from '../../curso/mockDeCursos';
import SearchIcon from '@mui/icons-material/Search';
import { kanit, teko } from '@/ultils/fonts';
import { ArrowForward, ArrowForwardIos, Home } from '@mui/icons-material';
import { CardCF } from '@/components/card/Card';

export default function CursoPg() {
	const [courses, setCourses] = useState<Course[]>([cursoBodybuilding]);

	const [searchShrink, setSearchShrink] = useState<boolean>(false);
	const handleSearchShrink = (event: React.FocusEvent<HTMLInputElement>) => {
		setSearchShrink(!searchShrink)
	}

	const images = ['/images/banner.png', '/Logo.svg', '/images/Carlos.png', '/images/Consulting.png', '/images/logoApp.png','/images/banner.png', '/Logo.svg', '/images/Carlos.png', '/images/Consulting.png', '/images/logoApp.png','/images/banner.png', '/Logo.svg', '/images/Carlos.png', '/images/Consulting.png', '/images/logoApp.png', ]

	return (
		<>
			<TextField
				variant="filled"
				label="Buscar curso"
				className={kanit.className}
				onFocus={handleSearchShrink}
				onBlur={handleSearchShrink}
				
				InputProps={{
					startAdornment:(
						<InputAdornment position='start' 
							style={{ marginTop: '0'}}
						>
							<SearchIcon />
						</InputAdornment>
					),
				}}
				InputLabelProps={{
					className: kanit.className,
					shrink: searchShrink,
					style: { marginLeft: '30px' }
				}}
				sx={{
					width: '450px',
					marginBlock: '20px',
					marginInline: '40px',

					border: 'none',
					outline: 'none',
					backgroundColor: 'secondary.main',
					color: 'primary.light'

				}}
			>
			</TextField>
			<Box
				display={'flex'}
				flexWrap={'wrap'}
				rowGap={8}

			>
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
