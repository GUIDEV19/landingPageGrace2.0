import Link from "next/link"
import { Clock } from "lucide-react"

export default function PriceCard(props: any) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 max-w-5xl mx-auto overflow-hidden rounded-xl shadow-lg">
      <div className="lg:col-span-3 bg-white p-8">
        <h3 className="text-xl font-bold text-slate-800 mb-6">O que você vai receber:</h3>

        <div className="space-y-6">
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 bg-pink-100 rounded-lg flex items-center justify-center">
              <span className="text-pink-500 text-lg">📚</span>
            </div>
            <div>
              <h4 className="font-medium text-slate-800">Curso completo com 10 módulos</h4>
              <p className="text-sm text-slate-600">Mais de 20 aulas em vídeo com conteúdo prático e transformador</p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 bg-pink-100 rounded-lg flex items-center justify-center">
              <span className="text-pink-500 text-lg">📝</span>
            </div>
            <div>
              <h4 className="font-medium text-slate-800">Materiais de apoio exclusivos</h4>
              <p className="text-sm text-slate-600">
                E-books, planilhas e cartas para aplicar o conhecimento no dia a dia
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 bg-pink-100 rounded-lg flex items-center justify-center">
              <span className="text-pink-500 text-lg">👨‍👩‍👧‍👦</span>
            </div>
            <div>
              <h4 className="font-medium text-slate-800">Comunidade exclusiva</h4>
              <p className="text-sm text-slate-600">Troque experiências com outras mães e receba suporte contínuo</p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 bg-pink-100 rounded-lg flex items-center justify-center">
              <span className="text-pink-500 text-lg">🎁</span>
            </div>
            <div>
              <h4 className="font-medium text-slate-800">Bônus especiais</h4>
              <p className="text-sm text-slate-600">Mentorias em grupo, aulas extras e conteúdos exclusivos</p>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-100">
          <div className="flex items-center gap-2 text-green-600 mb-2">
            <Clock className="h-5 w-5" />
            <span className="font-medium">Garantia incondicional de 7 dias</span>
          </div>
          <p className="text-sm text-slate-600">
            Se você ficar insatisfeita com o curso, devolvemos 100% do seu investimento nos primeiros 7 dias. Sem
            perguntas.
          </p>
        </div>
      </div>

      <div className="lg:col-span-2 bg-pink-500 p-8 text-white">
        <div className="mb-6">
          <p className="text-sm opacity-80">Valor normal</p>
          <p className="text-2xl font-bold line-through opacity-80">R$ 497,00</p>
        </div>

        <div className="mb-6">
          <div className="flex items-center gap-2 mb-1">
            <p className="text-sm">Oferta por tempo limitado:</p>
            <span className="bg-yellow-400 text-pink-800 text-xs px-2 py-1 rounded-full font-bold">60% OFF</span>
          </div>
          <p className="text-4xl font-bold">R$ 197,00</p>
          <p className="text-sm opacity-80">ou 12x de R$ 19,78</p>
        </div>

        <button
          onClick={props.handleClick}
          className="block w-full bg-white text-pink-500 hover:bg-pink-50 font-medium py-3 px-6 rounded-full text-center transition-colors mb-4"
        >
          Quero transformar minha maternidade
        </button>

        <div className="flex justify-center items-center gap-2 text-sm mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
            <path
              fillRule="evenodd"
              d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
              clipRule="evenodd"
            />
          </svg>
          <span>Pagamento 100% seguro</span>
        </div>

        <div className="flex justify-center gap-2">
          <div className="w-8 h-5 bg-gray-200 rounded"></div>
          <div className="w-8 h-5 bg-gray-200 rounded"></div>
          <div className="w-8 h-5 bg-gray-200 rounded"></div>
          <div className="w-8 h-5 bg-gray-200 rounded"></div>
        </div>
      </div>
    </div>
  )
}
