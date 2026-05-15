import { Dialog, DialogPanel } from "@headlessui/react";
import { navigation } from "@/src/foundations/constants/lp-navigation";
import Link from "next/link";

interface LPHeaderProps {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
}

export default function LPHeader({
  mobileMenuOpen,
  setMobileMenuOpen,
}: LPHeaderProps) {
  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-12">
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5 flex items-center gap-x-3 group">
            <span className="sr-only">Aura</span>
            <div className="h-6 w-6 rounded-full bg-white flex items-center justify-center transition-transform group-hover:scale-105">
              <div className="h-2 w-2 rounded-full bg-gray-950" />
            </div>
            <span className="text-xl font-medium tracking-tight text-aura-text">
              AURAEVENT
            </span>
          </a>
        </div>

        {/* Mobile button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-aura-text-secondary hover:text-aura-text"
          >
            <span className="sr-only">Abrir menu</span>
            ☰
          </button>
        </div>

        {/* Desktop nav */}
        <div className="hidden lg:flex lg:gap-x-10">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-medium hover:text-aura-text text-aura-text-secondary"
            >
              {item.name}
            </a>
          ))}
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link
            href="/events"
            className="rounded-md bg-white px-5 py-2 text-sm font-medium text-gray-950"
          >
            Começar agora
          </Link>
        </div>
      </nav>

      {/* Mobile Menu */}
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-50 bg-gray-950/80 backdrop-blur-sm" />

        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full max-w-sm bg-gray-950 p-6 border-l border-white/5">
          <div className="flex items-center justify-between">
            <a href="#" className="flex items-center gap-x-3">
              <div className="h-6 w-6 rounded-full bg-white flex items-center justify-center">
                <div className="h-2 w-2 rounded-full bg-gray-950" />
              </div>
              <span className="text-xl font-medium text-aura-text">AURAEVENT</span>
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="text-aura-text-secondary hover:text-aura-text"
            >
              ✕
            </button>
          </div>

          <div className="mt-8 space-y-2">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block rounded-md px-3 py-2 text-base text-gray-300 hover:bg-white/5 hover:text-aura-text"
              >
                {item.name}
              </a>
            ))}

            <Link
              href="/events"
              className="mt-4 block rounded-md bg-white px-5 py-3 text-center text-gray-950"
            >
              Começar agora
            </Link>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}