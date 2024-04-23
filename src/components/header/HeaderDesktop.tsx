'use client'

import { teko } from "@/ultils/fonts";
import { Box, Button, Link } from "@mui/material";

import * as React from "react";

interface NavItemProps {
    label: string;
}

const NavItem: React.FC<NavItemProps> = ({ label }) => {
    return (
        <Link sx={{ fontSize: '20px', textDecoration: 'none', cursor: 'pointer' }} className={teko.className}>
            {label.toUpperCase()}
        </Link >
    );
};

const navItems = [
    "store",
    "resultados",
    "equipe",
    "parceiros",
    "desafios",
    "planos",
    "consultoria",
];

const HeaderDesktop: React.FC = () => {
    return (
        <Box display={"flex"} flexDirection={"row"} justifyContent={"space-between"} alignItems={"center"} width={"100%"} height={"100px"} paddingX={"32px"} boxSizing={"border-box"} bgcolor={'#EDEDED'}>
            <Box
                className='auth-logo-npv'
                component={'img'}
                src='/Logo.svg'

                width='100px'
            />

            <Box display={"flex"} flexDirection={"row"} justifyContent={"space-between"} gap={"10px"}>
                {navItems.map((item) => (
                    <NavItem key={item} label={item} />
                ))}
            </Box>
            <Button
                className={teko.className}
                sx={{
                    color: '#EDEDED',
                    background: '#1D1E1E',
                    ":disabled": {
                        backgroundColor: '#DBDBDB',
                        color: '#1D1E1E',
                    },
                    '& :hover': {
                        backgroundColor: '#1D1E1E',
                    },
                    padding: '15px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: 'max-content', height: '50px', fontSize: '20px'
                }}
            >ACESSAR A PLATAFORMA</Button>
        </Box>
    );
};

export default HeaderDesktop;