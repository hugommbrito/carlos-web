import * as React from "react";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Image from "next/image";
import { kanit } from "@/ultils/fonts";

interface ContactInfoProps {
    phoneNumber: string;
    email: string;
}

const ContactInfo: React.FC<ContactInfoProps> = ({ phoneNumber, email }) => (
    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', color: '#ededed', fontSize: '12px', fontWeight: 400 }}>
        <Typography className={kanit.className} variant="body2" >{phoneNumber}</Typography>
        <Typography className={kanit.className} variant="body2" >{email}</Typography>
    </Box>
);

interface SocialIconProps {
    src: string;
    alt: string;
}

const SocialIcon = styled('div')(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '30px',
    height: '30px',
    padding: theme.spacing(0, 1),
    backgroundColor: '#0f0f0f',
    borderRadius: '2px',
}));

const Footer: React.FC = () => {


    return (
        <Box component="footer" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'stretch', justifyContent: 'center', backgroundColor: '#0f0f0f' }}>
            <Container >
                <Grid container spacing={2} padding={4} >
                    <Grid item xs={12} sm={6} md={4}>
                        <Image src="/images/logo-footer.svg" alt="Logo" width={100} height={38} />
                    </Grid>
                    <Grid item xs={12} sm={6} md={8} sx={{
                        display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: '10px', '@media (max-width:600px)': {
                            flexDirection: 'column', alignItems: 'flex-start'
                        },
                    }}>
                        <Box sx={{ display: 'flex', gap: '10px' }}>
                            <SocialIcon >
                                <Image src="/images/Instagram.svg" alt="Instagram" width={25} height={25} />
                            </SocialIcon>
                            <SocialIcon >
                                <Image src="/images/Whatsapp.svg" alt="Whatsapp" width={25} height={25} />
                            </SocialIcon>
                        </Box >
                        <ContactInfo phoneNumber="+55 31 9 7121 5847" email="contato@treinadorcarlos.com.br" />
                    </Grid>
                </Grid>
                <Box sx={{ py: 4, borderTop: '1px solid rgba(86, 89, 89, 1)', color: '#565959', textAlign: 'left', fontSize: '12px', fontFamily: 'Kanit, sans-serif' }}>
                    © Todos os direitos reservados
                </Box>
            </Container>
        </Box>
    );
};

export default Footer;