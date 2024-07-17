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
} from '@mui/material';
import { useRouter } from 'next/navigation';
import { Router } from 'next/router';
import React from 'react';

interface iCardCF {
	title: string;
	description: string;
	image: string;
	buttonText: string;
	buttonLink: string;
	buttonIcon: React.ReactNode;
}

export const CardCF: React.FC<iCardCF> = ({
	title,
	description,
	image,
	buttonText,
	buttonLink,
	buttonIcon,
}) => {
	const router = useRouter();
	return (
		<Card
			sx={{
				width: '320px',
				height: '350px',
				marginInline: '40px',
				padding: '12px',
				borderRadius: '8px',
				backgroundColor: 'secondary.main',

				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'space-between',
			}}
		>
			<CardMedia
				component="img"
				image={image}
				sx={{
					width: '100%',
					height: '155px',

					objectFit: 'cover',
					border: '1px solid #cacaca',
					borderRadius: '8px',
				}}
			/>
			<CardHeader
				title={title}
				titleTypographyProps={{
					className: kanit.className,
					fontWeight: 500,
					fontSize: 16,
					maxWidth: '240px',
				}}
				sx={{
					padding: '0',
				}}
			/>
			<CardContent
				sx={{
					fontSize: 10,
					fontWeight: 200,
					width: '194px',
					padding: '0',
				}}
			>
				{description}
			</CardContent>
			<Divider />
			<CardActions
				sx={{
					padding: '0',
				}}
			>
				<Button
					endIcon={buttonIcon}
					fullWidth
					className={teko.className}
					onClick={() => router.push(buttonLink)}
					sx={{
						display: 'flex',
						justifyContent: 'space-between',
						color: 'white',
						fontSize: 18,
						fontWeight: 500,
						borderRadius: '2px',
						paddingInline: '18px',
					}}
				>
					{buttonText}
				</Button>
			</CardActions>
		</Card>
	);
};
