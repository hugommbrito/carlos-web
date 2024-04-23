import { teko } from "@/ultils/fonts"
import { Box, Card, CardActions, CardContent, Typography } from "@mui/material"

export const CallToAction = () => {
    return (
        <Box
            height={{ xs: '250px', sm: '250px', md: '400px', lg: '400px' }}
            sx={{
                width: '100%', paddingX: '12px', paddingY: '32px', backgroundColor: '#EDEDED',
                display: 'flex', gap: '12px', '@media (max-width:900px)': {

                    overflowX: 'scroll',
                }
            }}

        >
            {/* Exemplo de Card */}
            <Card
                component={Box}
                width={{ xs: '150px', sm: '150px', md: '150px', lg: '150px' }}
                sx={{
                    height: '100%', minWidth: '150px', position: 'relative',
                    transition: 'min-width 0.3s ease, width 0.3s ease', // Transição suave para mudança de largura
                    '@media (hover: hover) and (pointer: fine)': { // Aplica o efeito de hover apenas em dispositivos com suporte a hover
                        '&:hover': {
                            width: '700px', // Largura do Card no hover
                            minWidth: '700px',
                            '& .cardContent': { // Seletor para o CardContent dentro do Card
                                visibility: 'visible', // Torna o CardContent visível no hover
                            },
                        },
                    },
                }}
            >
                <Box
                    sx={{
                        height: '100%', width: '100%', position: 'absolute', top: 0, left: 0,
                        backgroundImage: 'url("/images/beforeafter.png"), linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(0,0,0,1) 100%)',
                        backgroundSize: 'cover', backgroundPosition: 'left', backgroundBlendMode: 'multiply',
                    }}
                />
                <CardContent
                    className="cardContent"
                    sx={{
                        position: 'absolute', bottom: 0, width: '100%',
                        visibility: 'hidden', // Invisível por padrão
                        transition: 'visibility 0.3s ease', // Transição suave para a visibilidade
                    }}
                >
                    <Typography sx={{ fontSize: '12px', fontWeight: 'bold', lineHeight: '0.9' }} color={'#EDEDED'} textTransform={'uppercase'} className={teko.className}>
                        ana amélia, 22 anos
                    </Typography>
                </CardContent>
                <CardActions>
                </CardActions>
            </Card>

            {/* Adicione mais componentes <Card> conforme necessário */}
        </Box>
    )
}