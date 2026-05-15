'use client'

import LPHeader from '@/src/components/patterns/ladingpage/header'
import { useState } from 'react'

export default function LandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="bg-aura-bg h-screen selection:bg-primary-500 selection:text-aura-text">
      <LPHeader mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />

      <main className="relative isolate px-6 pt-24 lg:px-8 flex flex-col justify-center min-h-screen">
        {/* Gradiente decorativo superior */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80 pointer-events-none"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-primary-500/10 to-primary-600/5 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>

        <div className="mx-auto max-w-4xl py-32 sm:py-48 lg:py-56">
          {/* Badge de anúncio */}
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <a
              href="#novidades"
              className="relative flex items-center gap-x-3 rounded-full bg-aura-card px-4 py-1.5 text-sm font-medium text-aura-text-secondary ring-1 ring-inset ring-aura-border hover:ring-primary-500/30 hover:bg-aura-card/80 transition-all"
            >
              <span className="flex h-2 w-2 rounded-full bg-success"></span>
              AURAEVENT 2.0 agora disponível
              <span className="text-aura-text-secondary/70 flex items-center gap-1">
                Ler o anúncio <span aria-hidden="true">&rarr;</span>
              </span>
            </a>
          </div>

          {/* Hero Content */}
          <div className="text-center">
            <h1 className="text-5xl font-semibold tracking-tighter text-balance text-aura-text sm:text-7xl leading-tight">
              A gestão dos seus eventos, <br className="hidden sm:block" />
              simplificada.
            </h1>
            <p className="mt-8 text-lg text-pretty text-aura-text-secondary sm:text-xl max-w-2xl mx-auto font-light leading-relaxed">
              Uma plataforma elegante e poderosa para criar, organizar e escalar
              experiências inesquecíveis. Tudo que você precisa, sem a complexidade
              que você não quer.
            </p>
          </div>
        </div>

        {/* Gradiente decorativo inferior */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)] pointer-events-none"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-primary-500/10 to-primary-600/5 opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          />
        </div>
      </main>
    </div>
  )
}