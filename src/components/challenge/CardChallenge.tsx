import { teko } from '@/ultils/fonts';
import { Box, Button, Typography } from '@mui/material';
import { styled } from '@mui/system';
import Image from "next/image";
const BackgroundImageBox = styled(Box)({
    backgroundImage: `url(/images/challenge.png)`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
});

export const CardChallenge = () => {
    return (
        <Box sx={{
            width: 300,
            minWidth: 300,
            height: 400,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'

        }}>
            <BackgroundImageBox sx={{
                width: '100%',
                flex: 1,
                padding: 3,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
                alignItems: 'flex-start'
            }}>
                <Typography className={teko.className} sx={{
                    color: '#EDEDED',
                    fontSize: { xs: '3rem', sm: '47px' },
                    fontFamily: 'Teko',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    lineHeight: '42.77px',
                    wordWrap: 'break-word'
                }}>
                    10km <br /> em <Typography className={teko.className} component="span" sx={{ color: '#CCFD5D', fontSize: { xs: '3rem', sm: '47px' }, fontWeight: 'bold' }}>\10MIN</Typography>
                </Typography>
            </BackgroundImageBox>
            <Button sx={{
                width: '100%',
                height: 60,
                px: 2.5,
                bgcolor: '#0F0F0F',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                borderRadius: 0

            }} endIcon={<Image src="/Arrow.svg" alt="arrow-right" width={20} height={20} />}>
                <Typography className={teko.className} sx={{
                    color: '#EDEDED',
                    fontSize: '24px',
                    fontFamily: 'Teko',
                    fontWeight: 500,
                    textTransform: 'uppercase',
                    wordWrap: 'break-word'
                }}>
                    entrar
                </Typography>

            </Button>
        </Box>
    );
};
