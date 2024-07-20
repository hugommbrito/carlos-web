'use client'

import { CardCF } from '@/components/card/Card'
import { kanit } from '@/ultils/fonts'
import { ArrowForward } from '@mui/icons-material'
import SearchIcon from '@mui/icons-material/Search'
import { Box, InputAdornment, TextField } from '@mui/material'
import Script from 'next/script'
import { useEffect, useState } from 'react'
import { Course, cursoBodybuilding } from '../../curso/mockDeCursos'
import { courseProvider } from '@/providers/mainApi/courses/course.provider'
import { iCourse } from '@/providers/mainApi/courses/interfaces'

export default function CursoPg() {
	const [courses, setCourses] = useState<iCourse[]>([])

	const [searchShrink, setSearchShrink] = useState<boolean>(false)
	const handleSearchShrink = (event: React.FocusEvent<HTMLInputElement>) => {
		setSearchShrink(!searchShrink)
	}

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
	]

	useEffect(() => {
		const fetchCourses = async () => {
			const response = await courseProvider.getAllCourses("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJiZDcxYzk0Yi1mZjMwLTQ1OGEtYmZhOC0wOWFmOTEwMzAzNDEiLCJuYW1lIjoiQWRpbSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTcyMTQ0Mjc1NSwiZXhwIjoxNzIyMDQ3NTU1fQ.C_IEX8mvWg4bh_XGop73S59YfULPNaTBdeC73whOIU0")
			console.log(response)
			setCourses(response)
		}
		fetchCourses()

		// console.log(courses);

		return () => {}
	})

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
				{courses.map((course, index) => {
					console.log(course);
					return (
					<CardCF 
						key={index}
						title={course.name}
						description={course.description}
						image={images[index]}
						buttonText={'acessar'}
						buttonLink='/curso'
						buttonIcon={<ArrowForward />}
					/>
				)})}
			</Box>
		</>
	)
}
