import Link from "next/link"
import { Instagram, Facebook, Youtube, TwitterIcon as TikTok } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-50 py-12">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center">
              <div className="w-10 h-10 bg-purple-100 rounded-md flex items-center justify-center">
                <div className="w-6 h-6 bg-purple-500 rounded-sm"></div>
              </div>
            </Link>
            <p className="text-sm text-gray-600">
              Transformando a maternidade através da inteligência emocional: Educando crianças emocionalmente saudáveis
              e felizes.
            </p>
            <div className="flex gap-4">
              <Link href="#" aria-label="Instagram">
                <Instagram className="h-5 w-5 text-gray-500 hover:text-pink-500" />
              </Link>
              <Link href="#" aria-label="Facebook">
                <Facebook className="h-5 w-5 text-gray-500 hover:text-pink-500" />
              </Link>
              <Link href="#" aria-label="YouTube">
                <Youtube className="h-5 w-5 text-gray-500 hover:text-pink-500" />
              </Link>
              <Link href="#" aria-label="TikTok">
                <TikTok className="h-5 w-5 text-gray-500 hover:text-pink-500" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-medium text-gray-900 mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:text-pink-500">
                  Início
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:text-pink-500">
                  Por que a mamãe é top e o papai também?
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:text-pink-500">
                  Sobre a Mentora
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:text-pink-500">
                  Metodologia
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:text-pink-500">
                  Depoimentos
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:text-pink-500">
                  Dúvidas Frequentes
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-gray-900 mb-4">Contato</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <span className="text-pink-500">✉️</span>
                <a href="mailto:contato@eduquecomie.com.br" className="text-sm text-gray-600 hover:text-pink-500">
                  contato@eduquecomie.com.br
                </a>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-pink-500">📱</span>
                <a href="tel:+5599999999" className="text-sm text-gray-600 hover:text-pink-500">
                  (99) 99999-9999
                </a>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-pink-500">⏰</span>
                <span className="text-sm text-gray-600">Atendimento: Seg-Sex, 9h às 18h</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-12 pt-6 text-center">
          <p className="text-sm text-gray-500">
            © 2025 Eduque com Inteligência Emocional. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
