import Image from "next/image"
import { Star } from "lucide-react"

export default function TestimonialsSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-gray-300">
            O que as <span className="text-pink-500">Famílias</span> dizem
          </h2>
          <div className="w-24 h-1 bg-pink-500 mx-auto mt-2 mb-8"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="relative w-full h-[400px]">
              <Image
                src="/dep1.webp"
                alt="Depoimento 1"
                fill
                className="object-contain"
              />
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="relative w-full h-[400px]">
              <Image
                src="/dep2.webp"
                alt="Depoimento 2"
                fill
                className="object-contain"
              />
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm overflow-hidden ">
            <div className="relative w-full h-[400px]">
              <Image
              src="/dep3.webp"
              alt="Depoimento 3"
              fill
              className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
