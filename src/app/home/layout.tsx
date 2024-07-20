'use client';
import { CupomBanner } from '@/components/cupom/Cupom';
import {
	Home,
	Instagram,
	Logout,
	Menu,
	PermIdentity,
	WhatsApp,
} from '@mui/icons-material';

import { Box, Button, IconButton } from '@mui/material';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { MouseEventHandler, ReactNode } from 'react';

const HomeLayout = ({ children }: { children: ReactNode }) => {
	const router = useRouter();

	const navigateTo = (route: string) => {
		router.replace(route);
	};

	const SideMenuButton = ({ icon }: { icon: ReactNode }) => {
		return (
			<IconButton
				onClick={() => navigateTo('/curso')}
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
					width: '100%',
					height: '75px',
					backgroundColor: 'background.default',
					display: 'flex',
					justifyContent: 'flex-start',
					paddingBlock: '20px',

					position: 'fixed',
					top: '0px',
					zIndex: 2,
				}}
			>
				<Button
					sx={{
						height: 45,
						width: 45,
						marginInline: '15px',
						backgroundColor: 'Background',
					}}
				>
					<Menu height={20} width={20} />
				</Button>
				<Image
					src="/images/logoApp.png"
					alt="Logo"
					height={39}
					width={132}
					
					onClick={() => navigateTo('/')}
					style={{
						cursor: 'pointer'
					}}
				/>
			</Box>
			<Box
				sx={{
					width: '100%',
					backgroundColor: 'background.default',

					position: 'fixed',
					top: '75px',
					zIndex: 2,
				}}
			>
				<CupomBanner
					insideText={
						'netshoes com desconto especial neste fim de semana. use o cupom carlosferrreira'
					}
				/>
			</Box>

			<Box
				sx={{
					borderRight: '2px solid #DBDBDB',

					width: '45px',
					paddingInline: '20px',
					paddingBlock: '24px',
					boxSizing: 'content-box',

					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'space-between',

					position: 'fixed',
					bottom: '0px',
					top: '0',
					zIndex: 1,
				}}
			>
				<Box marginTop="123px">
					<SideMenuButton icon={<Home />} />
					<SideMenuButton icon={<PermIdentity />} />
				</Box>
				<Box>
					<SideMenuButton icon={<Logout />} />
					<SideMenuButton icon={<Instagram />} />
					<SideMenuButton icon={<WhatsApp />} />
				</Box>
			</Box>
			<Box marginLeft="80px" marginTop="123px">
				{children}
			</Box>
		</>
	);
};

export default HomeLayout;
