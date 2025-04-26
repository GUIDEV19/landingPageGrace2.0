import Image from "next/image"

export default function SocialProof() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-slate-800 mb-4">
          Centenas de mães já transformaram sua maternidade
        </h2>
        <p className="text-center text-slate-600 max-w-2xl mx-auto mb-12">
          Veja o que estão dizendo nas redes sociais sobre o curso Eduque com Inteligência Emocional
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {Array.from({ length: 9 }).map((_, i) => (
            <div key={i} className="bg-white p-4 rounded-lg shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-200">
                  <Image
                    src="/placeholder.svg?height=40&width=40"
                    alt="Avatar"
                    width={40}
                    height={40}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-medium text-slate-800">Usuário {i + 1}</h4>
                  <p className="text-xs text-slate-500">@usuario{i + 1}</p>
                </div>
              </div>

              <p className="text-slate-600 text-sm">
                "Este curso mudou completamente minha forma de me conectar com meu filho. Agora entendo melhor suas
                emoções e consigo ajudá-lo a lidar com elas de forma saudável."
              </p>

              <div className="mt-3 text-xs text-slate-400">
                há {Math.floor(Math.random() * 10) + 1} {Math.random() > 0.5 ? "dias" : "horas"}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
