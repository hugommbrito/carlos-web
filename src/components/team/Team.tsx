import { kanit, teko } from "@/ultils/fonts"
import { Box, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material"

export const Team = () => {


    return (
        <Box sx={{ width: '100%', padding: '16px', backgroundColor: '#EDEDED', display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <Box>
                <Typography sx={{
                    fontSize: '36px', fontWeight: 'bold', lineHeight: '0.9', textAlign: 'center',
                }} textTransform={'uppercase'} className={teko.className}>nosso time
                    de profissionais</Typography>
                <Typography sx={{
                    fontSize: '14px', fontWeight: 'bold', lineHeight: '0.9', textAlign: 'center',
                }} textTransform={'uppercase'} className={teko.className}>Todos voltados para o seu sucesso!</Typography>
                <Box

                    sx={{
                        width: '100%', paddingX: '12px', paddingY: '32px', backgroundColor: '#EDEDED',
                        display: 'flex', gap: '12px', '@media (max-width:900px)': {
                            overflowX: 'scroll',
                        }
                    }}

                >
                    <Box
                        component={Box}
                        sx={{
                            height: 'max-content', minWidth: '120px', width: 120, borderRadius: '12px',
                            display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: '10px', '@media(min-width:900px)': {
                                height: 450, width: 300, position: 'relative'
                            }
                        }}
                    >
                        <CardMedia
                            sx={{
                                height: 140, width: 120, '@media(min-width:900px)': {
                                    height: 450, width: 300
                                }
                            }}
                            image="/images/Carlos.png"
                            title="Carlos ferreira"
                        />
                        <Box sx={{
                            '@media(min-width:900px)': {
                                position: "absolute",
                                bottom: '50px',
                                left: 'calc(50% - 75px)',
                                backgroundColor: '#0F0F0F'
                            }
                        }}>

                            {/* <CardContent
                            className="cardContent"
                            sx={{
                                width: '100%',
                            }}
                            > */}
                            <Typography sx={{
                                fontSize: '15px', fontWeight: 'bold', lineHeight: '0.9', '@media(min-width:900px)': {
                                    display: 'none'
                                }
                            }} color={'#0F0F0F'} textTransform={'uppercase'} className={teko.className}>
                                cARLOS FERREIRA
                            </Typography>
                            <Typography sx={{
                                fontSize: '12px', fontWeight: 'medium', lineHeight: '0.9', '@media(min-width:900px)': {
                                    fontSize: 35, width: '100%', textAlign: 'center', position: "absolute",
                                }
                            }} color={'#565959'} textTransform={'uppercase'} className={teko.className}>
                                MUSCULAÇÃO
                            </Typography>
                            <Typography sx={{
                                fontSize: '10px', fontWeight: 'light', lineHeight: '0.9', '@media(min-width:900px)': {
                                    display: 'none'
                                }
                            }} color={'#565959'} className={kanit.className}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </Typography>
                            {/* </CardContent> */}
                        </Box>

                    </Box>

                    {/* Adicione mais componentes <Card> conforme necessário */}
                </Box>
            </Box>
        </Box >
    )
}