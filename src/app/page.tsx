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




export default function Home() {
  const router = useRouter();

  return (
    <>
      <MainHeader />

      <Marquee />
      <Banner />
      <CallToAction />
      <TestimonialSection />
      <Team />
      <Partners />
      <Challenge />
      <Instagram />
      <Footer />
    </>
  )
}
