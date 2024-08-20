'use client';
import type { Metadata } from 'next';
import CssBaseline from '@mui/material/CssBaseline';
import './globals.css';
import { AuthContextProvider } from '@/contexts/authContext';
import { ThemeProvider } from '@mui/material';
import { theme } from '@/ultils/theme';
import { kanit, teko } from '@/ultils/fonts';
import { SnackbarAlertContextProvider } from '@/contexts/snackbarAlertContext';

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<AuthContextProvider>
			<html lang="en">
				<body className={`${kanit.className}`}>
					<ThemeProvider theme={theme}>
						<SnackbarAlertContextProvider>
							<CssBaseline />
							{children}
						</SnackbarAlertContextProvider>
					</ThemeProvider>

					{/* <ToastContainer /> */}
				</body>
			</html>
		</AuthContextProvider>
	);
}
