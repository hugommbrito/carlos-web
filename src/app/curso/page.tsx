'use client';
import { CupomBanner } from '@/components/cupom/Cupom';
import MainHeader from '@/components/header/MainHeader';
import { kanit, teko } from '@/ultils/fonts';

import { Box, Button, Drawer, Typography } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2'; // Grid version 2
import ModuleBox from './components/moduleBox';
import YoutubeEmbed from './components/youtubeEmbed';
import HeaderDesktop from '@/components/header/HeaderDesktop';
import Image from 'next/image';
import { useState } from 'react';
import { cursoBodybuilding, iLecture } from './mockDeCursos';
import { LectureInfos } from './components/moduleBox.interfaces';

export default function CursoPg() {
	const [course, setCourse] = useState(cursoBodybuilding)
  // const [currentYtEmbedId, setCurrentYtEmbedId] = useState(course.cursoBodybuilding.introductionEmbedVideoId)

  const [expandedModule, setExpandedModule] = useState<number | false >(false)
  const handleModuleClick = (newExpandedModule: number) => {
    if(newExpandedModule === expandedModule){
      setExpandedModule(false)
    } else {
      setExpandedModule(newExpandedModule)
    }
  }

  const [currentLecture, setCurrentLecture] = useState<iLecture | false >(false)
  const handleLectureClick = (lectureId: number) => {
    const newPageLecture = cursoBodybuilding.modules.flatMap(module => module.lectures).find(lecture => lecture.id === lectureId
    )
    setCurrentLecture(newPageLecture!)
  }

	const handleFinishedLectureClick = () => {
		// const watchedLecture = currentLecture ? currentLecture : 

		if (!currentLecture) return

		const newPageLecture = cursoBodybuilding.modules.flatMap(module => module.lectures).find(lecture => lecture.id === currentLecture.id + 1
    )
    setCurrentLecture(newPageLecture!)
	}


	return (
		<>
			<Box
				sx={{
					width: '100%',
					backgroundColor: '#EDEDED',
					display: 'flex',
					justifyContent: 'center',
					marginBlock: '20px',
				}}
			>
				<Image src="/Logo.svg" alt="Logo" height={100} width={320} />
			</Box>
			<Box sx={{ width: '100%', backgroundColor: '#EDEDED' }}>
				<CupomBanner insideText={cursoBodybuilding.name} />
			</Box>
			<Grid2
				container
				columns={12}
				height="100%"
				sx={{ width: '100%', backgroundColor: '#EDEDED' }}
			>
				<Grid2
					component="aside"
					xs={2}
					display="flex"
					flexDirection="column"
					alignItems="center"
					justifyContent="space-between"
					gap={0.5}
				>
					{cursoBodybuilding.modules.map((module) => (
						<ModuleBox
              onClickModule={() => handleModuleClick(module.id)}
              expandedModule={expandedModule}
              id={module.id}
							key={module.id}
							moduleName={module.name}
							lectures={module.lectures.map((lecture) => ({
								id: lecture.id,
								description: lecture.description,
								title: lecture.name,
								is_watched: lecture.is_watched,
                onClickLecture: () => {
                  handleLectureClick(lecture.id)
                }
							}))}
						/>
					))}
				</Grid2>
				<Grid2
					component="main"
					xs
					height="100vh"
          display="flex"
          flexDirection="column"
          justifyContent="flex-start"
          alignItems="center"
				>
					<YoutubeEmbed embedId={currentLecture ? currentLecture.youtubeEmbedId : cursoBodybuilding.introductionEmbedVideoId}></YoutubeEmbed>
          <Typography 
            className={teko.className}
            variant="h2"
            sx={{ fontFamily: teko, textAlign: 'center' }}
          >
            {currentLecture ? currentLecture.name : "Introdução ao Curso"}
          </Typography>
          <Typography 
            className={kanit.className}
            // variant="h2"
            sx={{ fontFamily: teko, textAlign: 'center' }}
          >
            {currentLecture ? currentLecture.description : ""}
          </Typography>
          <Button
            variant='outlined'
            sx={{
                position: 'fixed',
                bottom: '20px',
                right: '20px',
            }}
						onClick={() => {handleFinishedLectureClick()}}
          >
            MARCAR COMO CONCLUÍDO
          </Button>
				</Grid2>
			</Grid2>
		</>
	);
}
