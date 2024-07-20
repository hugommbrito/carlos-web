import React, { ReactElement, useState } from 'react';
import {
	Accordion,
	AccordionDetails,
	AccordionSummary,
	Box,
	Typography,
} from '@mui/material';
import { teko, kanit } from '@/ultils/fonts';
import { ArrowDownwardRounded } from '@mui/icons-material';
import { LectureInfos, ModuleBoxProps } from './moduleBox.interfaces';

const LectureBox: React.FC<LectureInfos> = ({ title, is_watched, onClickLecture, id }) => {
	return (
		<AccordionDetails
      onClick={() => {
        onClickLecture(id)
      }}
			sx={{
        cursor: 'pointer',
				position: 'relative',
				width: '100%',
				boxShadow: 
					is_watched ?
					"inset -10px -10px 40px -35px rgba(70, 156, 0, 0.75)":
					"inset -10px -10px 40px -35px rgba(0,0,0,0.75)",
					'&:hover': {
						boxShadow: 
						is_watched ?
						"inset -20px -20px 50px -35px rgba(70, 156, 0, 0.75)":
						"inset -20px -20px 50px -35px rgba(0,0,0,0.75)",

        },
			}}
		>
			<Typography className={kanit.className} color={is_watched ? 'gray' : 'black'}>
				{title}
			</Typography>
			<Box
				width="12px"
				height="100%"
				position="absolute"
				left="0"
				top="0"
				zIndex={1}
				sx={{
					backgroundColor: '#9b9b9b',
					borderRadius: '12px 0px 0px 12px',
				}}
			/>
		</AccordionDetails>
	);
};

export default function ModuleBox({ moduleName, lectures, onClickModule, id, expandedModule }: ModuleBoxProps) {

	return (
		<Box
			sx={{
				width: '100%',
				height: '100%',
				backgroundColor: '#DBDBDB',
				borderRadius: '12px',
				position: 'relative',
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				justifyContent: 'center',
			}}
		>
			<Accordion
				sx={{
					backgroundColor: 'transparent',
					border: 'transparent',
					boxShadow: 'none',
					width: '100%',
				}}
        expanded={id === expandedModule}
        onChange={() => {
          onClickModule()
          console.log(id);
        }}
			>
				<AccordionSummary
					expandIcon={<ArrowDownwardRounded />}
					aria-controls="panel1-content"
					id="panel1-header"
					sx={{
						backgroundColor: 'transparent',
					}}
				>
					<Typography className={kanit.className} variant='h5'>
						{moduleName}
					</Typography>
				</AccordionSummary>
				{lectures.map((Lecture, index) => (
					<LectureBox
            id={Lecture.id}
            onClickLecture={() => Lecture.onClickLecture(Lecture.id)}
						key={index}
						title={Lecture.title}
						is_watched={Lecture.is_watched}
					/>
				))}
			</Accordion>
			<Box
				width="12px"
				height="100%"
				position="absolute"
				left="0"
				top="0"
				sx={{
					backgroundColor: '#000',
					borderRadius: '12px 0px 0px 12px',
				}}
			/>
		</Box>
	);
}
