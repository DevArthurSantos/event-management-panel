'use client'

import { navigation } from '@/src/foundations/constants/lp-navigation'
import { Dialog, DialogPanel } from '@headlessui/react'
import { useState } from 'react'

export default function LandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="bg-gray-950 min-h-screen selection:bg-white selection:text-black">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-12">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5 flex items-center gap-x-3 group">
              <span className="sr-only">Aura</span>
              <div className="h-6 w-6 rounded-full bg-white flex items-center justify-center transition-transform group-hover:scale-105">
                <div className="h-2 w-2 rounded-full bg-gray-950"></div>
              </div>
              <span className="text-xl font-medium tracking-tight text-white">AuraEvent</span>
            </a>
          </div>

          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400 hover:text-white transition-colors"
            >
              <span className="sr-only">Abrir menu</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

          <div className="hidden lg:flex lg:gap-x-10">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-gray-400 hover:text-white transition-colors"
              >
                {item.name}
              </a>
            ))}
          </div>

          <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:items-center lg:gap-x-6">
            <a
              href="/dashboard"
              className="rounded-full bg-white px-5 py-2 text-sm font-medium text-gray-950 hover:bg-gray-200 transition-all"
            >
              Começar agora
            </a>
          </div>
        </nav>

        {/* Mobile Menu */}
        <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
          <div className="fixed inset-0 z-50 bg-gray-950/80 backdrop-blur-sm" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full max-w-sm bg-gray-950 p-6 border-l border-white/5">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5 flex items-center gap-x-3">
                <div className="h-6 w-6 rounded-full bg-white flex items-center justify-center">
                  <div className="h-2 w-2 rounded-full bg-gray-950"></div>
                </div>
                <span className="text-xl font-medium tracking-tight text-white">AuraEvent</span>
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-400 hover:text-white"
              >
                <span className="sr-only">Fechar menu</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6h12v12" />
                </svg>
              </button>
            </div>

            <div className="mt-8 flow-root">
              <div className="-my-6 divide-y divide-white/5">
                <div className="space-y-1 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-medium text-gray-300 hover:bg-white/5 hover:text-white transition-colors"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6 space-y-3">
                  <a
                    href="/dashboard"
                    className="block w-full rounded-full bg-white px-5 py-3 text-center text-base font-medium text-gray-950 hover:bg-gray-200 transition-colors"
                  >
                    Começar agora
                  </a>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>

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