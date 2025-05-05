import { Button } from "@/components/ui/button"

export default function CtaSection() {
  return (
    <section className="py-16 bg-pink-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-400">
          Pronto para transformar a <span className="text-pink-500">educação dos seus filhos</span>?
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-8">
          Não perca a chance de investir no futuro da sua família e vivenciar uma educação mais leve e conectada.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
          <Button className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-6 rounded-md text-lg">
            Quero garantir minha vaga
          </Button>
          <Button
            variant="outline"
            className="border-pink-500 text-pink-500 hover:bg-pink-50 px-8 py-6 rounded-md text-lg"
          >
            Mais informações
          </Button>
        </div>
        <p className="text-gray-600 text-sm">
          Para mais informações, digite a palavra FILHOS nos comentários ou envie uma mensagem direta.
        </p>
      </div>
    </section>
  )
}
