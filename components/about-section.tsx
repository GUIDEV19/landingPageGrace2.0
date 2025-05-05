import { Brain, Heart, BookOpen } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function AboutSection() {
  return (
    <section id="sobre" className="bg-pink-50 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-gray-300">
            Sobre o <span className="text-pink-500">Evento</span>
          </h2>
          <div className="w-24 h-1 bg-pink-500 mx-auto mt-2 mb-8"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Um encontro transformador para pais e mães que desejam elevar a sua jornada na educação dos filhos, unindo o
            melhor da ciência com a força dos princípios cristãos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <CardHeader className="text-center pt-8">
              <div className="w-20 h-20 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Brain className="h-10 w-10 text-pink-500" />
              </div>
              <CardTitle className="text-xl text-slate-400">Inteligência Emocional</CardTitle>
            </CardHeader>
            <CardContent className="text-center px-6 pb-8">
              <CardDescription className="text-gray-600">
                Aprenda desenvolver a Inteligência Emocional na educação do seu filho  e dessa forma previnir doenças emocionais.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <CardHeader className="text-center pt-8">
              <div className="w-20 h-20 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-10 w-10 text-pink-500" />
              </div>
              <CardTitle className="text-xl text-slate-400">Amor e Respeito</CardTitle>
            </CardHeader>
            <CardContent className="text-center px-6 pb-8">
              <CardDescription className="text-gray-600">
                A base de uma educação saudável é o AMOR e o RESPEITO. Sem amor e respeito é impossível penetrar no coração do seu filho. Vamos aprender juntos como educar com Amor e Respeito!
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <CardHeader className="text-center pt-8">
              <div className="w-20 h-20 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-10 w-10 text-pink-500" />
              </div>
              <CardTitle className="text-xl text-slate-400">Valores e Princípios Cristãos</CardTitle>
            </CardHeader>
            <CardContent className="text-center px-6 pb-8">
              <CardDescription className="text-gray-600">
                Integrar valores e princípios cristãos na educação dos filhos vai muito além de ensinamentos religiosos formais. Vamos desenvolver sabedoria, discernimento e conhecimento.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
