'use client'

import { teko } from "@/ultils/fonts";
import { Box, Button, Link, Menu, MenuItem } from "@mui/material";
import Fade from '@mui/material/Fade';
import Image from "next/image";
import * as React from "react";

interface NavItemProps {
    label: string;
}


const navItems = [
    "store",
    "resultados",
    "equipe",
    "parceiros",
    "desafios",
    "planos",
    "consultoria",
];

const HeaderMobile: React.FC = () => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <Box display={"flex"} flexDirection={"row"} justifyContent={"space-between"} alignItems={"center"} width={"100vw"} height={"100px"} paddingX={"32px"} bgcolor={'#EDEDED'} >
            <Box
                className='auth-logo-npv'
                component={'img'}
                src='/Logo.svg'
                width='100px'
            />
            <Button
                id="fade-button"
                aria-controls={open ? 'fade-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'transparent', width: 'max-content', height: 'max-content' }}

            >
                <Image src="/Menu.svg" alt="Menu" width={32} height={32} />
            </Button>
            <Menu
                id="fade-menu"
                MenuListProps={{
                    'aria-labelledby': 'fade-button',
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                TransitionComponent={Fade}
                sx={{ width: '150px' }}

            >
                {navItems.map((item, index) => (
                    <MenuItem key={index} onClick={handleClose} sx={{ fontSize: '20px', textDecoration: 'none', cursor: 'pointer' }} className={teko.className}>
                        {item.toUpperCase()}
                    </MenuItem >
                ))}
            </Menu>




        </Box>
    );
};

export default HeaderMobile;