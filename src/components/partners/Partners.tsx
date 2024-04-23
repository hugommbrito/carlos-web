import { Box } from "@mui/material"
import PartnerText from "./PartnerText"

export const Partners = () => {
    const parceiros = [
        { logo: '/images/logo-adidas.png', nome: 'Adidas' },
        { logo: '/images/logo-netshoes.png', nome: 'Netshoes' },
        { logo: '/images/logo-smartfit.png', nome: 'Smartfit' },
        { logo: '/images/logo-nike.png', nome: 'Nike' },
        { logo: '/images/logo-growth.png', nome: 'Growth' },
        { logo: '/images/logo-centauro.png', nome: 'Centauro' },
    ]
    return (
        <Box width='100%'
            height='100%'

            minHeight={'180px'}
            display='flex'
            flexDirection={'row'}
            padding={'32px'}
            justifyContent={'space-between'}
            bgcolor={'#EDEDED'}
            sx={{
                '@media(max-width: 1150px)': {
                    flexDirection: 'column'
                }
            }}
        >
            <Box
                sx={{
                    display: 'flex', flexDirection: 'row', justifyContent: 'space-between', flexWrap: 'wrap', width: '450px', '@media(max-width: 1150px)': {
                        display: 'none'
                    }
                }}
            >
                {parceiros.map((item, index) => (
                    <Box bgcolor={'#DBDBDB'} sx={{ objectFit: 'contain', padding: '28px', borderRadius: '8px' }} key={index} component={'img'} width={200} height={100} src={item.logo} alt={item.nome} />
                ))}
            </Box>
            <PartnerText />
            <Box
                sx={{
                    display: 'flex', flexDirection: 'row', justifyContent: 'space-between', flexWrap: 'wrap', width: '450px', '@media(max-width: 1150px)': {
                        display: 'none'
                    }
                }}
            >
                {parceiros.map((item, index) => (
                    <Box bgcolor={'#DBDBDB'} sx={{ objectFit: 'contain', padding: '28px', borderRadius: '8px' }} key={index} component={'img'} width={200} height={100} src={item.logo} alt={item.nome} />
                ))}
            </Box>
            <Box sx={{
                display: 'flex', flexDirection: 'row', overflowX: 'scroll', justifyContent: 'space-between', width: '100%', gap: '10px', '@media(min-width: 1150px)': {
                    display: 'none'
                }
            }}>
                {parceiros.map((item, index) => (
                    <Box sx={{ objectFit: 'contain', borderRadius: '8px' }} key={index} component={'img'} width={100} height={60} src={item.logo} alt={item.nome} />
                ))}
            </Box>
        </Box>


    )
}