'use client'
import HeaderDesktop from '@/components/header/HeaderDesktop';
import HeaderMobile from '@/components/header/HeaderMobile';
import MainHeader from '@/components/header/MainHeader';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from "react";



export default function Home() {
  const router = useRouter();

  return (
    <>
      <MainHeader />
    </>
  )
}
