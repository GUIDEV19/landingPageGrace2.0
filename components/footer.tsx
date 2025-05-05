import Link from "next/link"
import { Instagram, Facebook, Youtube, TwitterIcon as TikTok } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">
              <span className="text-pink-500">Grace</span>Bezerra
            </h3>
            <p className="text-gray-400 mb-4">
              Transformando a educação de filhos através do amor, respeito e princípios cristãos.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#sobre" className="text-gray-400 hover:text-pink-500 transition-colors">
                  Sobre
                </Link>
              </li>
              <li>
                <Link href="#evento" className="text-gray-400 hover:text-pink-500 transition-colors">
                  Evento
                </Link>
              </li>
              {/* <li>
                <Link href="#palestrantes" className="text-gray-400 hover:text-pink-500 transition-colors">
                  Palestrantes
                </Link>
              </li> */}
              <li>
                <Link href="#local" className="text-gray-400 hover:text-pink-500 transition-colors">
                  Local
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Contato</h3>
            <p className="text-gray-400 mb-2">Kidscoach.grace@gmail.com</p>
            <p className="text-gray-400 mb-4">(62) 99261-5459
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/gracebezerra1?igsh=MXVyYjE2YWsxcGV5aQ==" className="text-gray-400 hover:text-pink-500 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-pink-500 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://www.youtube.com/@PoddaGRACE" className="text-gray-400 hover:text-pink-500 transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
          <p>© 2025 Grace Bezerra. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
