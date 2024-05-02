import React from "react";
import { Box, Paper, Typography } from "@mui/material";
import { kanit, teko } from "@/ultils/fonts";

type TestimonialCardProps = {
    testimonial: string;
    author: string;
    points: number;
};

const TestimonialCard: React.FC<TestimonialCardProps> = ({
    testimonial,
    author,
    points,
}) => {
    return (
        <Box sx={{ minWidth: '350px', padding: { xs: '16px', sm: '32px' }, width: '33%', '@media (max-width:768px)': { ml: 0, width: '100%' } }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', mx: 'auto', width: '100%', backgroundImage: 'url("/images/bgComments.png")', backgroundRepeat: 'no-repeat', backgroundPosition: 'left', '@media (max-width:768px)': { px: 2, mt: 2 } }}>
                <Typography className={kanit.className} variant="body2" sx={{ color: 'text.secondary' }}>
                    {testimonial}
                </Typography>
                <Box sx={{ display: 'flex', gap: '10px', alignItems: 'center', width: '100%' }}>
                    <Box width={'48px'}
                        borderRadius={'12px'}
                        height={'48px'}
                        component='img'
                        bgcolor={'#C8CACA'} ></Box>
                    <Box>

                        <Typography className={teko.className} sx={{ textTransform: 'uppercase', fontSize: '16px', fontWeight: 'bold', lineHeight: '1' }}>
                            carlos ferreira</Typography>
                        <Typography className={teko.className} sx={{ color: '#565959', textTransform: 'uppercase', fontSize: '13px', fontWeight: 'bold', lineHeight: '1' }}>220 pontos
                        </Typography>
                    </Box>

                </Box>
            </Box>
        </Box>
    );
};

const testimonials = [
    {
        testimonial: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book!",
        author: "Carlos Ferreira",
        points: 220,
    },
    {
        testimonial: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book!",
        author: "Carlos Ferreira",
        points: 220,
    },
    {
        testimonial: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book!",
        author: "Carlos Ferreira",
        points: 220,
    },
    {
        testimonial: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book!",
        author: "Carlos Ferreira",
        points: 220,
    },
    // Repita os depoimentos conforme necessário
];

const TestimonialSection: React.FC = () => {
    return (
        <Box sx={{ display: 'flex', backgroundColor: '#EDEDED', flexDirection: 'row', overflowX: 'scroll', gap: 2, p: 4, '@media (max-width:768px)': { flexDirection: 'row', gap: 0, px: 2, py: 4 } }}>
            {testimonials.map((testimonial, index) => (
                <TestimonialCard
                    key={index}
                    testimonial={testimonial.testimonial}
                    author={testimonial.author}
                    points={testimonial.points}
                />
            ))}
        </Box>
    );
};

export default TestimonialSection;