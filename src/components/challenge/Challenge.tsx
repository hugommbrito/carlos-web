import { kanit, teko } from '@/ultils/fonts';
import { Box, Typography } from '@mui/material';
import { CardChallenge } from './CardChallenge';


const TitleChallenge = () => {
    return (
        <Box sx={{
            width: '100%',
            height: 150,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 2
        }}>
            <Box sx={{
                position: 'relative',
                textAlign: 'center',
                width: '100%',
                color: '#C8CACA',
                fontSize: { xs: '3rem', sm: '218px' },
                fontFamily: 'Teko',
                fontWeight: 700,
                textTransform: 'uppercase',
                lineHeight: '198.38px',
                wordWrap: 'break-word'
            }}>
                <Typography variant="h1" sx={{
                    fontSize: { xs: '3rem', sm: '218px' }, fontWeight: 'bold',
                    width: '100%',
                    '@media (max-width:1024px)': {
                        fontSize: '150px',
                    },
                    '@media (max-width:768px)': {
                        color: 'transparent',
                        display: 'none'
                    }
                }} component="div" className={teko.className}>challenges</Typography>
                <Box sx={{
                    position: 'absolute',
                    top: '30%',
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    flexWrap: 'wrap',
                    '@media (max-width:1024px)': {
                        top: '25%',
                    }
                }}>
                    <Box sx={{
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'center'
                    }}>
                        <Typography className={kanit.className} sx={{
                            color: '#0F0F0F',
                            fontSize: { xs: '1rem', sm: '16px' },
                            fontFamily: 'Kanit',
                            fontWeight: 300,
                            lineHeight: '14.56px',
                            letterSpacing: '1.60px',
                            wordWrap: 'break-word'
                        }}>
                            NÃO PENSE, VAI
                        </Typography>
                    </Box>
                    <Box sx={{
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'center',
                        flexWrap: { xs: 'wrap', sm: 'nowrap' }
                    }}>
                        <Typography className={teko.className} sx={{
                            color: '#0F0F0F',
                            fontSize: { xs: '36px', sm: '72px' },
                            fontFamily: 'Teko',
                            fontWeight: 700,
                            textTransform: 'uppercase',
                            lineHeight: '65.52px',
                            wordWrap: 'break-word'
                        }}>
                            desafios
                        </Typography>
                        <Typography className={teko.className} sx={{
                            color: '#CCFD5D',
                            fontSize: { xs: '36px', sm: '72px' },
                            fontFamily: 'Teko',
                            fontWeight: 700,
                            textTransform: 'uppercase',
                            lineHeight: '65.52px',
                            wordWrap: 'break-word'
                        }}>
                            /
                        </Typography>
                        <Typography className={teko.className} sx={{
                            color: '#0F0F0F',
                            fontSize: { xs: '36px', sm: '72px' },
                            fontFamily: 'Teko',
                            fontWeight: 700,
                            textTransform: 'uppercase',
                            lineHeight: '65.52px',
                            wordWrap: 'break-word'
                        }}>
                            projetos
                        </Typography>
                    </Box>
                </Box>
            </Box>

        </Box>

    )
}

export const Challenge = () => {
    let arr = [1, 2, 3]
    return (
        <Box sx={{ width: '100%', padding: '16px', backgroundColor: '#EDEDED', display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <TitleChallenge />


            <Box sx={{
                width: { xs: '100%', sm: '50%' }, display: 'flex', flexDirection: 'row', gap: '10px', overflowX: 'auto', margin: '0 auto'
            }}>
                {arr.map(item => <CardChallenge key={item} />)}
            </Box>

        </Box>
    );
}