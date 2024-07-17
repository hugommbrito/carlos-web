'use client';
import { CupomBanner } from '@/components/cupom/Cupom';
import { Home, Instagram, Logout, Menu, PermIdentity, WhatsApp } from '@mui/icons-material';

import { Box, Button, Divider, Drawer, IconButton, Toolbar } from '@mui/material';
import Image from 'next/image';
import { ReactNode } from 'react';

const HomeLayout = ({ children }: { children: ReactNode }) => {
	const SideMenuButton = ({icon}: {icon: ReactNode}) => {
		return (
			<IconButton
				sx={{
					borderRadius: '2px',

						height: '45px',
						width: '45px',
				}}
			>
				{icon}
			</IconButton>

		);
	};

	return (
		<>
			<Box
				sx={{
					width: '80vh',
					height: '35px',
					backgroundColor: '#EDEDED',
					display: 'flex',
					justifyContent: 'flex-start',
					marginBlock: '20px',
				}}
			>
				<Button
					sx={{
						height: 45,
						width: 45,
						marginInline: '15px',
						backgroundColor: 'Background'
					}}
				>
					<Menu height={20} width={20} />
				</Button>
				<Image src="/images/logoApp.png" alt="Logo" height={39} width={132} />
			</Box>
			<Box sx={{ width: '100%', height: '5vh', backgroundColor: '#EDEDED' }}>
				<CupomBanner
					insideText={
						'netshoes com desconto especial neste fim de semana. use o cupom carlosferrreira'
					}
				/>
			</Box>
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'row',
					justifyContent: 'flex-start',
					alignItems: 'flex-start',
					gap: '0px',
					// height: '80vh',
					width: '100%',
				}}
			>
				<Box
					sx={{
						borderRight: '2px solid #DBDBDB',
						backgroundColor: 'red.light',

						// height: '80vh',
						width: '45px',
						paddingInline: '20px',
						paddingBlock: '24px',
						boxSizing: 'content-box',

						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'space-between',

						position: 'fixed',
						bottom:'0px',
						top: '110px',
						zIndex: -1
					}}
				>
					<Box>
						<SideMenuButton icon={<Home />}/>
						<SideMenuButton icon={<PermIdentity />}/>

					</Box>
					<Box>
						<SideMenuButton icon={<Logout />} />
						<SideMenuButton icon={<Instagram />} />
						<SideMenuButton icon={<WhatsApp />} />
					</Box>
				</Box>
				<Box marginLeft='80px' >{children}</Box>
			</Box>
		</>
	);
};

export default HomeLayout;
