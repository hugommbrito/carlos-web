import { kanit, teko } from "@/ultils/fonts"
import { Box, Typography } from "@mui/material"

export const Consulting = () => {


    return (
        <Box sx={{ width: '100%', height: '500px', display: 'flex', flexDirection: 'row' }}>
            <Box component={'img'} src='/images/Consulting.png' sx={{ width: '34%', height: '100%', objectFit: 'cover' }}></Box>
            <Box sx={{ width: '33%', padding: '32px', paddingTop: '25%', height: '100%', backgroundColor: '#DBDBDB' }}>
                <Typography sx={{ textTransform: 'uppercase', lineHeight: '90%', fontSize: '48px', fontWeight: 'bold' }} className={teko.className}>consultoria como nenhuma outra!</Typography>
                <Typography sx={{ lineHeight: '90%', fontSize: '21px' }} className={kanit.className}>Plano exclusivo, contínuo e
                    personalizado com objetivo total
                    no seu sucesso</Typography>
            </Box>
            <Box sx={{ width: '33%', height: '100%', backgroundColor: '#0F0F0F', padding: '32px', paddingTop: '30%' }}>
                <Typography sx={{ textTransform: 'uppercase', lineHeight: '90%', color: '#EDEDED', fontSize: { xs: '36px', sm: '70px' }, fontWeight: 'bold' }} className={teko.className}>Vagas <br />
                    em breve!</Typography>
            </Box>
        </Box>
    )
}