"use client";
// import Image from 'next/image'
// import { Inter } from '@next/font/google'
// import styles from './page.module.css'

// const inter = Inter({ subsets: ['latin'] })

import React from "react"


import { ChakraProvider } from "@chakra-ui/react"
import Footer from "./Footer";
import Header from "./Header";
import Pricing from "./Pricing";

export default function Home() {
  return (
    <main>
      <ChakraProvider>
        <Header/>
        <Pricing/>
        <Footer/>
      </ChakraProvider>
          </main>
  )
}
