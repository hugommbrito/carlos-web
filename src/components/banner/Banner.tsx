import { teko } from "@/ultils/fonts"
import { Box, Button, Typography, useMediaQuery } from "@mui/material"
import Image from "next/image"

export const Banner = () => {
    const isMobile = useMediaQuery('(max-width:900px)');
    const repeater = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    return (
        <Box
            display='flex'
            width='100%'
            height='100%'

            minHeight={'180px'}
            flexDirection={'column'}
            bgcolor={'#EDEDED'}
            position='relative'>
            <Box
                className='auth-bkg-img'
                component='img'
                src="/images/banner.png"
                width='100%'
                height='100%'
                style={{ objectFit: 'cover', objectPosition: 'center' }}
            >
            </Box>
            {
                !isMobile ? (
                    <Box
                        position='absolute'
                        top={'0'}
                        right={'0'}
                        width={'100%'}
                        height={'100%'}
                        display='flex'
                        justifyContent={'space-between'}
                        alignItems={'center'}
                        padding={'32px'}
                    >
                        <Box
                            width={'50%'}
                            height={'100%'}
                            display='flex'
                            flexDirection={'column'}
                            justifyContent={'center'}
                        >
                            <Typography sx={{ fontSize: '72px', width: '400px', fontWeight: 'bold', lineHeight: '0.9' }} color={'#EDEDED'} textTransform={'uppercase'} className={teko.className}>transforme seus objetivos em algo real
                            </Typography>
                            <Button

                                endIcon={<Image src="/images/Arrow.svg" alt="arrow-right" width={20} height={20} />}
                                className={teko.className}
                                sx={{
                                    color: '#1D1E1E',
                                    textTransform: 'uppercase',
                                    background: '#A3FB22',
                                    ":disabled": {
                                        backgroundColor: '#DBDBDB',
                                        color: '#1D1E1E',
                                    },
                                    '& :hover': {
                                        backgroundColor: '#1D1E1E',
                                    },
                                    padding: '24px',
                                    display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '300px', height: '70px', fontSize: '30px', lineHeight: '0'
                                }}

                            >clique e acesse!</Button>

                        </Box>
                        <Box
                            width={'220px'}
                            height={'360px'}
                            display='flex'
                            flexDirection={'column'}
                            justifyContent={'center'}
                            bgcolor={'#EDEDED'}
                            padding={'12px'}
                            borderRadius={'12px'}
                        >
                            <Box sx={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', height: '60px' }}>

                                <Box
                                    width={'48px'}
                                    height={'48px'}
                                    bgcolor={'#1D1E1E'}
                                    borderRadius={'12px'}
                                    padding={'12px'}
                                    component='img'
                                    src={'/images/Trophy.svg'}>

                                </Box>
                                <Box>

                                    <Typography className={teko.className} sx={{ textTransform: 'uppercase', fontSize: '25px', fontWeight: 'bold', lineHeight: '0.8' }}>ranking
                                    </Typography>
                                    <Typography className={teko.className} sx={{ textTransform: 'uppercase', fontSize: '25px', fontWeight: 'bold', lineHeight: '0.8' }}>
                                        de usuários</Typography>
                                </Box>
                            </Box>
                            <Box sx={{ display: 'flex', justifyContent: 'space-around', alignItems: 'flex-start', height: 'calc(100% - 60px)', width: '100%', paddingY: '12px', flexDirection: 'column', overflowY: 'auto', gap: '10px' }}>
                                {
                                    repeater.map((item, index) => (
                                        <Box key={index} sx={{ display: 'flex', gap: '10px', alignItems: 'center', width: '100%' }}>
                                            <Box width={'38px'}
                                                borderRadius={'12px'}
                                                height={'38px'}
                                                component='img'
                                                bgcolor={'#C8CACA'} ></Box>
                                            <Box>

                                                <Typography className={teko.className} sx={{ color: '#565959', textTransform: 'uppercase', fontSize: '13px', fontWeight: 'bold', lineHeight: '1' }}>1º lugar
                                                </Typography>
                                                <Typography className={teko.className} sx={{ textTransform: 'uppercase', fontSize: '16px', fontWeight: 'bold', lineHeight: '1' }}>
                                                    carlos ferreira</Typography>
                                            </Box>

                                        </Box>

                                    ))
                                }


                            </Box>

                        </Box>
                    </Box>
                ) : (<Box height={'max-content'} width={'100%'} padding={'16px'} paddingY={'32px'} gap={'10px'} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

                    <Typography sx={{
                        fontSize: '24px', fontWeight: 'bold',
                        width: '290px', textAlign: 'center', lineHeight: '0.9'
                    }} color={'#0F0F0F'} textTransform={'uppercase'} className={teko.className}>transforme seus objetivos em algo real
                    </Typography>
                    <Button

                        endIcon={<Image src="/images/Arrow.svg" alt="arrow-right" width={20} height={20} />}
                        className={teko.className}
                        sx={{
                            color: '#1D1E1E',
                            textTransform: 'uppercase',
                            background: '#A3FB22',
                            ":disabled": {
                                backgroundColor: '#DBDBDB',
                                color: '#1D1E1E',
                            },
                            '& :hover': {
                                backgroundColor: '#1D1E1E',
                            },
                            padding: '24px',
                            display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '200px', height: '50px', fontSize: '18px', lineHeight: '0'
                        }}

                    >clique e acesse!</Button>
                </Box>)
            }

        </Box>

    )
}