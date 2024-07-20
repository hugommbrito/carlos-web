import { Metadata } from 'next';
import { Kanit, Teko } from 'next/font/google';


export const metadata: Metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app',
};

const kanit = Kanit({ weight: ["300", "400", "500", "600", "700", "800", "900"], subsets: ['latin'] });
const teko = Teko({ subsets: ['latin'] });

export { kanit, teko };/* ACESSAR A PLATAFORMA */


