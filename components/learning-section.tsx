import { Lightbulb, MessageCircle, Heart, Shield } from "lucide-react"

export default function LearningSection() {
  return (
    <section id="evento" className="py-16 bg-pink-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-gray-300">
            O que você vai <span className="text-pink-500">aprender</span>
          </h2>
          <div className="w-24 h-1 bg-pink-500 mx-auto mt-2 mb-8"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex gap-4 items-start">
            <div className="bg-pink-100 p-3 rounded-full">
              <Lightbulb className="h-6 w-6 text-pink-500" />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-gray-400">Ferramentas Práticas</h3>
              <p className="text-gray-600">
                Técnicas e estratégias que podem ser aplicadas imediatamente no dia a dia com seus filhos.
              </p>
            </div>
          </div>

          <div className="flex gap-4 items-start">
            <div className="bg-pink-100 p-3 rounded-full">
              <MessageCircle className="h-6 w-6 text-pink-500" />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-gray-400">Comunicação Efetiva</h3>
              <p className="text-gray-600">
                Aprenda a se comunicar de forma clara e amorosa, fortalecendo a conexão com seus filhos.
              </p>
            </div>
          </div>

          <div className="flex gap-4 items-start">
            <div className="bg-pink-100 p-3 rounded-full">
              <Heart className="h-6 w-6 text-pink-500" />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-gray-400">Gestão Emocional</h3>
              <p className="text-gray-600">
                Como lidar com as emoções dos seus filhos e as suas próprias durante o processo educativo.
              </p>
            </div>
          </div>

          <div className="flex gap-4 items-start">
            <div className="bg-pink-100 p-3 rounded-full">
              <Shield className="h-6 w-6 text-pink-500" />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-gray-400">Limites com Amor</h3>
              <p className="text-gray-600">
                Como estabelecer limites claros sem perder a conexão emocional com seus filhos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
