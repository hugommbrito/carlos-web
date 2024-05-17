'use client'

import { Banner } from '@/components/banner/Banner';
import MainHeader from '@/components/header/MainHeader';
import Marquee from '@/components/marquee/Marquee';
import { CallToAction } from '@/components/cta/CallToAction';

import { useRouter } from 'next/navigation';
import TestimonialSection from '@/components/testimonials/Testimonials';
import { Team } from '@/components/team/Team';
import { Partners } from '@/components/partners/Partners';
import { Challenge } from '@/components/challenge/Challenge';
import Footer from '@/components/footer/Footer';
import { Instagram } from '@/components/instagramPosts/InstagramSection';
import { Box } from '@mui/material';
import { Consulting } from '@/components/consulting/Consulting';




export default function Home() {
  const router = useRouter();

  return (
    <>
      <Box sx={{ width: '100%', margin: '0 auto', backgroundColor: '#EDEDED' }}>

        <MainHeader />
        <Marquee />
        <Banner />
        <Box sx={{ maxWidth: '1140px', width: '100%', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '20px' }} >

          <CallToAction />
          <TestimonialSection />
          <Team />
          <Partners />
          <Challenge />
          <Consulting />
          <Instagram />
        </Box>
        <Footer />
      </Box>
    </>
  )
}
