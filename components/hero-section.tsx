import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <section className="bg-pink-50 py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              A Mamãe é Top e o <span className="text-pink-500">Papai Também!</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Um evento transformador para pais e mães que desejam elevar a jornada na educação dos filhos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-6 rounded-md text-lg">
                Quero participar
              </Button>
              <Button
                variant="outline"
                className="border-pink-500 text-pink-500 hover:bg-pink-50 px-8 py-6 rounded-md text-lg"
              >
                Saiba mais
              </Button>
            </div>
          </div>
            <div className="md:w-1/2 w-full">
            <div className="relative w-full h-[400px] md:h-[500px] rounded-lg overflow-hidden">
              <Image
              src="/grace.webp?height=600&width=500"
              alt="Família feliz"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
              />
            </div>
            </div>
        </div>
      </div>
    </section>
  )
}
