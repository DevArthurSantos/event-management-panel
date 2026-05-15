'use client'

import LPHeader from '@/src/components/patterns/ladingpage/header'
import { useState } from 'react'

export default function LandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="bg-gray-950 h-screen selection:bg-white selection:text-black">
      <LPHeader mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen}/>

      <main className="relative isolate px-6 pt-24 lg:px-8 flex flex-col justify-center min-h-screen">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80 pointer-events-none"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-white/10 to-white/5 opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>

        <div className="mx-auto max-w-4xl py-32 sm:py-48 lg:py-56">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <a href="#novidades" className="relative flex items-center gap-x-3 rounded-full bg-white/5 px-4 py-1.5 text-sm font-medium text-gray-300 ring-1 ring-inset ring-white/10 hover:ring-white/20 hover:bg-white/10 transition-all">
              <span className="flex h-2 w-2 rounded-full bg-white"></span>
              AuraEvent 2.0 agora disponível
              <span className="text-gray-500 flex items-center gap-1">Ler o anúncio <span aria-hidden="true">&rarr;</span></span>
            </a>
          </div>

          <div className="text-center">
            <h1 className="text-5xl font-medium tracking-tight text-balance text-white sm:text-7xl leading-tight">
              A gestão dos seus eventos, <br className="hidden sm:block" />
              simplificada.
            </h1>
            <p className="mt-8 text-lg text-pretty text-gray-400 sm:text-xl max-w-2xl mx-auto font-light leading-relaxed">
              Uma plataforma elegante e poderosa para criar, organizar e escalar experiências inesquecíveis. Tudo que você precisa, sem a complexidade que você não quer.
            </p>
          </div>
        </div>

        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)] pointer-events-none"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-white/5 to-white/10 opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          />
        </div>
      </main>
    </div>
  )
}