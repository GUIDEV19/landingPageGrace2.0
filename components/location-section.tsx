import Image from "next/image"
import { Car, Wifi, Coffee, Accessibility } from "lucide-react"

export default function LocationSection() {
  return (
    <section id="local" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-gray-400">
            Local do <span className="text-pink-500">Evento</span>
          </h2>
          <div className="w-24 h-1 bg-pink-500 mx-auto mt-2 mb-8"></div>
        </div>

        <div className="bg-pink-50 rounded-lg overflow-hidden shadow-sm">
          <div className="relative w-full h-80">
            <Image src="/evento.webp" alt="Local do evento" fill className="object-cover" />
          </div>
          <div className="p-8">
            <h3 className="text-2xl font-semibold text-center mb-1 text-gray-300">Goiânia - Aporta Hall</h3>
            <div className="flex justify-center mb-5">
              <span className="text-sm text-gray-300">Av Rui Barbosa Qd 08, 134 Goiânia, Brazil</span>
            </div>
            <p className="text-gray-600 text-center mb-8">
              O evento acontecerá em um espaço confortável e acessível, proporcionando a melhor experiência para todos
              os participantes.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="flex flex-col items-center">
                <div className="bg-pink-100 p-3 rounded-full mb-2">
                  <Car className="h-6 w-6 text-pink-500" />
                </div>
                <span className="text-gray-600">Estacionamento</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-pink-100 p-3 rounded-full mb-2">
                  <Wifi className="h-6 w-6 text-pink-500" />
                </div>
                <span className="text-gray-600">Wi-Fi</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-pink-100 p-3 rounded-full mb-2">
                  <Coffee className="h-6 w-6 text-pink-500" />
                </div>
                <span className="text-gray-600">Coffee Break</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-pink-100 p-3 rounded-full mb-2">
                  <Accessibility className="h-6 w-6 text-pink-500" />
                </div>
                <span className="text-gray-600">Acessibilidade</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
