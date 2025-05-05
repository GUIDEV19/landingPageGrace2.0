import Image from "next/image"
import { Instagram, Linkedin } from "lucide-react"

export default function SpeakersSection() {
  return (
    <section id="palestrantes" className="py-16 bg-pink-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            Palestrantes <span className="text-pink-500">Especiais</span>
          </h2>
          <div className="w-24 h-1 bg-pink-500 mx-auto mt-2 mb-8"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            O evento contará com a participação especial de grandes nomes da área de educação e desenvolvimento
            infantil, trazendo ainda mais conhecimento e perspectivas valiosas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg overflow-hidden shadow-sm">
            <div className="relative w-full h-64">
              <Image
                src="/placeholder.svg?height=300&width=400"
                alt="Especialista em Desenvolvimento Infantil"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6 bg-pink-50">
              <h3 className="font-semibold text-xl mb-1">Em breve</h3>
              <p className="text-gray-600 mb-4">Especialista em Desenvolvimento Infantil</p>
              <div className="flex space-x-2">
                <a href="#" className="text-pink-500 hover:text-pink-600 transition-colors">
                  <Instagram size={20} />
                </a>
                <a href="#" className="text-pink-500 hover:text-pink-600 transition-colors">
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg overflow-hidden shadow-sm">
            <div className="relative w-full h-64">
              <Image
                src="/placeholder.svg?height=300&width=400"
                alt="Psicólogo Infantil"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6 bg-pink-50">
              <h3 className="font-semibold text-xl mb-1">Em breve</h3>
              <p className="text-gray-600 mb-4">Psicólogo Infantil</p>
              <div className="flex space-x-2">
                <a href="#" className="text-pink-500 hover:text-pink-600 transition-colors">
                  <Instagram size={20} />
                </a>
                <a href="#" className="text-pink-500 hover:text-pink-600 transition-colors">
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg overflow-hidden shadow-sm">
            <div className="relative w-full h-64">
              <Image
                src="/placeholder.svg?height=300&width=400"
                alt="Educadora Parental"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6 bg-pink-50">
              <h3 className="font-semibold text-xl mb-1">Em breve</h3>
              <p className="text-gray-600 mb-4">Educadora Parental</p>
              <div className="flex space-x-2">
                <a href="#" className="text-pink-500 hover:text-pink-600 transition-colors">
                  <Instagram size={20} />
                </a>
                <a href="#" className="text-pink-500 hover:text-pink-600 transition-colors">
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
