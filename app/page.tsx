'use client'
import React, { useEffect } from "react"
import Main from "./components/Main"
import BrandLogo from "./components/BrandLogo"
import NavBar from "./components/NavBar"
import Introduction from "./components/Introduction"
import Features from "./components/Features"
import Integration from "./components/Integration"
import FaqQuestions from "./components/FaqQuestions"
import Footer from "./components/Footer"
import Lenis from "lenis"

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis()

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, [])
  return (
    <section className="w-full h-auto relative">
      <nav className="w-full h-auto sticky top-0 z-10">
        <NavBar />
      </nav>
      <main className="w-full h-auto">
        <Main />
        <BrandLogo />
        <Introduction />
        <Features />
        <Integration />
        <FaqQuestions />
      </main>
      <footer>
        <Footer />
      </footer>
    </section>
  )
}