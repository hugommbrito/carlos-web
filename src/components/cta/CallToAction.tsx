import { teko } from "@/ultils/fonts"
import { Box, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material"

export const CallToAction = () => {


    return (
        <Box
            sx={{ width: '100%', height: '250px', paddingX: '12px', paddingY: '32px', backgroundColor: '#EDEDED', display: 'flex', gap: '12px', overflowX: 'scroll' }}
        >
            <Card sx={{ height: '100%', width: '150px', minWidth: '150px', position: 'relative' }}>
                <Box
                    sx={{
                        height: '100%',
                        width: '100%',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        backgroundImage: 'url("/images/beforeafter.png"),linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(0,0,0,1) 100%)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundBlendMode: 'multiply',
                    }}
                />
                <CardContent sx={{ position: 'absolute', bottom: 0, width: '100%' }}>
                    <Typography sx={{ fontSize: '12px', fontWeight: 'bold', lineHeight: '0.9' }} color={'#EDEDED'} textTransform={'uppercase'} className={teko.className}>
                        ana amélia, 22 anos
                    </Typography>
                </CardContent>
                <CardActions>
                </CardActions>
            </Card>
            <Card sx={{ height: '100%', width: '150px', minWidth: '150px', position: 'relative' }}>
                <Box
                    sx={{
                        height: '100%',
                        width: '100%',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        backgroundImage: 'url("/images/beforeafter.png"),linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(0,0,0,1) 100%)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundBlendMode: 'multiply',
                    }}
                />
                <CardContent sx={{ position: 'absolute', bottom: 0, width: '100%' }}>
                    <Typography sx={{ fontSize: '12px', fontWeight: 'bold', lineHeight: '0.9' }} color={'#EDEDED'} textTransform={'uppercase'} className={teko.className}>
                        ana amélia, 22 anos
                    </Typography>
                </CardContent>
                <CardActions>
                </CardActions>
            </Card>
            <Card sx={{ height: '100%', width: '150px', minWidth: '150px', position: 'relative' }}>
                <Box
                    sx={{
                        height: '100%',
                        width: '100%',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        backgroundImage: 'url("/images/beforeafter.png"),linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(0,0,0,1) 100%)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundBlendMode: 'multiply',
                    }}
                />
                <CardContent sx={{ position: 'absolute', bottom: 0, width: '100%' }}>
                    <Typography sx={{ fontSize: '12px', fontWeight: 'bold', lineHeight: '0.9' }} color={'#EDEDED'} textTransform={'uppercase'} className={teko.className}>
                        ana amélia, 22 anos
                    </Typography>
                </CardContent>
                <CardActions>
                </CardActions>
            </Card>
        </Box>
    )
}