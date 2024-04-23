import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { teko } from '@/ultils/fonts';
import { useMediaQuery } from '@mui/material';

interface TextProps {
    text: string;
    color: string;
}

const Text: React.FC<TextProps> = ({ text, color }) => {

    const customColor = color === 'black' ? 'text.primary' : color;
    return (
        <Typography className={teko.className} textAlign={'center'} fontWeight={'bold'} lineHeight={1} component="span" sx={{
            color: customColor, fontSize: '120px', '@media(max-width: 1150px)': {
                fontSize: '40px',
            }
        }}>
            {text}
        </Typography>
    );
};

const PartnerText: React.FC = () => {
    const isMobile = useMediaQuery('(max-width:1150px)');
    const textData = [
        { text: "par", color: "#0F0F0F" },
        { text: "#", color: "#CCFD5D" }, // Ajuste a cor conforme necessário
        { text: "cei", color: "#0F0F0F" },
        { text: "@", color: "#CCFD5D" }, // Ajuste a cor conforme necessário
        { text: "ros", color: "#0F0F0F" },
    ];

    return (
        <Box
            sx={{
                typography: 'h1',
                fontWeight: 'bold',
                textAlign: 'center',
                textTransform: 'uppercase',
                lineHeight: '98px',
                width: 'max-content',
                // maxWidth: '305px',
                '@media(max-width: 1150px)': {
                    width: '100%',
                }
            }}
        >
            {textData.map((item, index) => (
                !isMobile ?

                    <React.Fragment key={index}>
                        <Text text={item.text} color={item.color} />
                        {index === 1 && <br />}
                        {index === 2 && <br />}
                    </React.Fragment>
                    :

                    (index !== 1) ?
                        (index !== 3) ?
                            <React.Fragment key={index}>
                                <Text text={item.text} color={item.color} />
                            </React.Fragment>
                            : <></> : <></>

            ))}
        </Box>
    );
};

export default PartnerText;