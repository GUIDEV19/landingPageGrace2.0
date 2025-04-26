import Link from "next/link"

export default function Header() {
  return (
    <header className="bg-white py-4 border-b border-gray-100">
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <div className="w-10 h-10 bg-purple-100 rounded-md flex items-center justify-center">
            <div className="w-6 h-6 bg-purple-500 rounded-sm"></div>
          </div>
        </Link>

        <nav className="hidden md:flex space-x-6">
          <Link href="#sobre" className="text-gray-600 hover:text-gray-900">
            Sobre
          </Link>
          <Link href="#metodologia" className="text-gray-600 hover:text-gray-900">
            Metodologia
          </Link>
          <Link href="#depoimentos" className="text-gray-600 hover:text-gray-900">
            Depoimentos
          </Link>
          <Link href="#duvidas" className="text-gray-600 hover:text-gray-900">
            Dúvidas
          </Link>
        </nav>

        <Link
          href="#pricing"
          className="bg-pink-500 hover:bg-pink-600 text-white font-medium py-2 px-4 rounded-full text-sm transition-colors"
        >
          Quero Participar
        </Link>
      </div>
    </header>
  )
}
