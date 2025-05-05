"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-gray-800">
          <span className="text-pink-500">Grace</span>Bezerra
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          <Link href="#sobre" className="text-gray-600 hover:text-pink-500 transition-colors">
            Sobre
          </Link>
          <Link href="#evento" className="text-gray-600 hover:text-pink-500 transition-colors">
            Evento
          </Link>
          <Link href="#palestrantes" className="text-gray-600 hover:text-pink-500 transition-colors">
            Palestrantes
          </Link>
          <Link href="#local" className="text-gray-600 hover:text-pink-500 transition-colors">
            Local
          </Link>
          <Link href="#contato" className="text-gray-600 hover:text-pink-500 transition-colors">
            Contato
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-gray-600" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white py-4 px-4">
          <div className="flex flex-col space-y-4">
            <Link
              href="#sobre"
              className="text-gray-600 hover:text-pink-500 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Sobre
            </Link>
            <Link
              href="#evento"
              className="text-gray-600 hover:text-pink-500 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Evento
            </Link>
            <Link
              href="#palestrantes"
              className="text-gray-600 hover:text-pink-500 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Palestrantes
            </Link>
            <Link
              href="#local"
              className="text-gray-600 hover:text-pink-500 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Local
            </Link>
            <Link
              href="#contato"
              className="text-gray-600 hover:text-pink-500 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contato
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
