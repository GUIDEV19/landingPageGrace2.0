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
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <div className="flex items-center mb-4">
              <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4">
                <Image src="/placeholder.svg?height=64&width=64" alt="Mariana Silva" fill className="object-cover" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-300">Daniela Oliveira</h3>
                <p className="text-gray-500 text-sm">Mãe de 2 filhos</p>
              </div>
            </div>
            <p className="text-gray-600 italic mb-4">
              "Amandoooo o curso!!! <br/> Estou apaixonada!!! <br/> Choro nas aulas, como já errei <br/> E como já mudei depois das aulas <br/> Glória a Deus por sua vida e por tudo que vc compartilha"
            </p>
            <div className="flex text-pink-500">
              <Star className="fill-current" />
              <Star className="fill-current" />
              <Star className="fill-current" />
              <Star className="fill-current" />
              <Star className="fill-current" />
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm">
            <div className="flex items-center mb-4">
              <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4">
                <Image src="/placeholder.svg?height=64&width=64" alt="Carlos Mendes" fill className="object-cover" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-300">Maria</h3>
                <p className="text-gray-500 text-sm">Pai de 3 filhos</p>
              </div>
            </div>
            <p className="text-gray-600 italic mb-4">
              "Estou fazendo seu curso mamãe é top e ta sendo muito bom. Consigo hj ser mais calma com minhas filhas."
            </p>
            <div className="flex text-pink-500">
              <Star className="fill-current" />
              <Star className="fill-current" />
              <Star className="fill-current" />
              <Star className="fill-current" />
              <Star className="fill-current" />
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm">
            <div className="flex items-center mb-4">
              <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4">
                <Image src="/placeholder.svg?height=64&width=64" alt="Juliana Costa" fill className="object-cover" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-300">Juliana Costa</h3>
                <p className="text-gray-500 text-sm">Mãe de 1 filho</p>
              </div>
            </div>
            <p className="text-gray-600 italic mb-4">
              "Seu curso foi um divisor de águas na minha vida e do meu filho que Deus continue te abençoando nesse propósito lindo"
            </p>
            <div className="flex text-pink-500">
              <Star className="fill-current" />
              <Star className="fill-current" />
              <Star className="fill-current" />
              <Star className="fill-current" />
              <Star className="fill-current" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
