import Image from "next/image"
import { Instagram, Youtube, Facebook } from "lucide-react"

export default function SpeakerSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <div className="relative w-full h-[400px] rounded-lg overflow-hidden">
              <Image src="/grace.webp" alt="Grace Bezerra" width={500} height={400} className="object-cover w-full h-full" />
            </div>
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-300">
              Conheça <span className="text-pink-500">Grace Bezerra</span>
            </h2>
            <p className="text-gray-600 mb-6">
              Uma das maiores Especialistas em Educação de Filhos do Brasil, Grace Bezerra traz seu Método inovador com foco em Inteligência Emocional, infelizmente os pais fracassam na educação dos filhos por falta de conhecimento e sabedoria. 
            </p>
            <p className="text-gray-600 mb-8">
            Grace vai te guiar para transformar a sua mentalidade e construir uma educação baseada no Amor e no Respeito, alicerçada em sólidos valores e princípios cristãos. Com anos de experiência e milhares de famílias transformadas, ela compartilha conhecimentos práticos que podem ser aplicados no dia a dia. Se prepare para aprender as ferramentas mais assertivas e revolucionar a Educação na sua casa.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/gracebezerra1?igsh=MXVyYjE2YWsxcGV5aQ==" className="text-pink-500 hover:text-pink-600 transition-colors">
                <Instagram size={24} />
              </a>
              <a href="https://www.youtube.com/@PoddaGRACE" className="text-pink-500 hover:text-pink-600 transition-colors">
                <Youtube size={24} />
              </a>
              <a href="#" className="text-pink-500 hover:text-pink-600 transition-colors">
                <Facebook size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
