import Image from "next/image"

export default function CourseModules() {
  return (
    <section id="metodologia" className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-slate-800 mb-4">
          Entenda a Metodologia do Curso
        </h2>
        <p className="text-center text-slate-600 max-w-2xl mx-auto mb-12">
          Um programa completo e estruturado para transformar sua relação com seu filho e criar um ambiente familiar
          harmonioso.
        </p>

        <div className="space-y-12 max-w-4xl mx-auto">
          {/* Módulo 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1">
              <div className="text-pink-500 font-medium mb-2">MÓDULO 1</div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">Perfil comportamental na educação dos filhos</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <div className="w-5 h-5 rounded-full bg-pink-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                  </div>
                  <span className="text-sm text-slate-600">Compreenda o desenvolvimento emocional infantil</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-5 h-5 rounded-full bg-pink-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                  </div>
                  <span className="text-sm text-slate-600">Aprenda a identificar e nomear emoções</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-5 h-5 rounded-full bg-pink-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                  </div>
                  <span className="text-sm text-slate-600">Conheça o cérebro e o desenvolvimento emocional</span>
                </li>
              </ul>
            </div>
            <div className="order-1 md:order-2">
              <Image
                src="/aulas/aula01.png?height=300&width=400"
                alt="Fundamentos da Inteligência Emocional"
                width={400}
                height={300}
                className="w-full h-auto rounded-xl"
              />
            </div>
          </div>

          {/* Módulo 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="order-2">
              <Image
                src="/aulas/aula02.png?height=300&width=400"
                alt="Desenvolvendo Birras e Crises Emocionais"
                width={400}
                height={300}
                className="w-full h-auto rounded-xl"
              />
            </div>
            <div className="order-1">
              <div className="text-pink-500 font-medium mb-2">MÓDULO 2</div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">Parentalidade Consciente</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <div className="w-5 h-5 rounded-full bg-pink-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                  </div>
                  <span className="text-sm text-slate-600">Técnicas para acalmar crises emocionais</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-5 h-5 rounded-full bg-pink-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                  </div>
                  <span className="text-sm text-slate-600">Por que ocorrem as birras e como lidar com elas</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-5 h-5 rounded-full bg-pink-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                  </div>
                  <span className="text-sm text-slate-600">
                    Estratégias preventivas para evitar explosões emocionais
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Módulo 3 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1">
              <div className="text-pink-500 font-medium mb-2">MÓDULO 3</div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">Alfabetização Emocional</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <div className="w-5 h-5 rounded-full bg-pink-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                  </div>
                  <span className="text-sm text-slate-600">Desenvolva habilidades de comunicação não-violenta</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-5 h-5 rounded-full bg-pink-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                  </div>
                  <span className="text-sm text-slate-600">Como estabelecer limites com amor e firmeza</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-5 h-5 rounded-full bg-pink-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                  </div>
                  <span className="text-sm text-slate-600">Técnicas de validação emocional</span>
                </li>
              </ul>
            </div>
            <div className="order-1 md:order-2">
              <Image
                src="/aulas/aula03.png?height=300&width=400"
                alt="Comunicação Efetiva e Limites Amorosos"
                width={400}
                height={300}
                className="w-full h-auto rounded-xl"
              />
            </div>
          </div>

          {/* Módulo 4 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="order-2">
              <Image
                src="/aulas/aula04.png?height=300&width=400"
                alt="Atividades Práticas para o Dia a Dia"
                width={400}
                height={300}
                className="w-full h-auto rounded-xl"
              />
            </div>
            <div className="order-1">
              <div className="text-pink-500 font-medium mb-2">MÓDULO 4</div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">Alfabetização Emocional</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <div className="w-5 h-5 rounded-full bg-pink-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                  </div>
                  <span className="text-sm text-slate-600">
                    Jogos e brincadeiras para desenvolver inteligência emocional
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-5 h-5 rounded-full bg-pink-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                  </div>
                  <span className="text-sm text-slate-600">Rotinas que promovem o equilíbrio emocional</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-5 h-5 rounded-full bg-pink-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                  </div>
                  <span className="text-sm text-slate-600">Atividades para momentos de crise</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Módulo 5 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1">
              <div className="text-pink-500 font-medium mb-2">MÓDULO 5</div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">Os 4 Temperamentos na Educação dos filhos</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <div className="w-5 h-5 rounded-full bg-pink-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                  </div>
                  <span className="text-sm text-slate-600">Desenvolva habilidades de comunicação não-violenta</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-5 h-5 rounded-full bg-pink-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                  </div>
                  <span className="text-sm text-slate-600">Como estabelecer limites com amor e firmeza</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-5 h-5 rounded-full bg-pink-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                  </div>
                  <span className="text-sm text-slate-600">Técnicas de validação emocional</span>
                </li>
              </ul>
            </div>
            <div className="order-1 md:order-2">
              <Image
                src="/aulas/aula05.png?height=300&width=400"
                alt="Comunicação Efetiva e Limites Amorosos"
                width={400}
                height={300}
                className="w-full h-auto rounded-xl"
              />
            </div>
          </div>

          {/* Módulo 6 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="order-2">
              <Image
                src="/aulas/aula06.png?height=300&width=400"
                alt="Atividades Práticas para o Dia a Dia"
                width={400}
                height={300}
                className="w-full h-auto rounded-xl"
              />
            </div>
            <div className="order-1">
              <div className="text-pink-500 font-medium mb-2">MÓDULO 6</div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">Como você ouve seu filho?</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <div className="w-5 h-5 rounded-full bg-pink-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                  </div>
                  <span className="text-sm text-slate-600">
                    Jogos e brincadeiras para desenvolver inteligência emocional
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-5 h-5 rounded-full bg-pink-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                  </div>
                  <span className="text-sm text-slate-600">Rotinas que promovem o equilíbrio emocional</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-5 h-5 rounded-full bg-pink-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                  </div>
                  <span className="text-sm text-slate-600">Atividades para momentos de crise</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Módulo 7 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1">
              <div className="text-pink-500 font-medium mb-2">MÓDULO 7</div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">Linguagens de Amor na Educação dos Filhos</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <div className="w-5 h-5 rounded-full bg-pink-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                  </div>
                  <span className="text-sm text-slate-600">Desenvolva habilidades de comunicação não-violenta</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-5 h-5 rounded-full bg-pink-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                  </div>
                  <span className="text-sm text-slate-600">Como estabelecer limites com amor e firmeza</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-5 h-5 rounded-full bg-pink-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                  </div>
                  <span className="text-sm text-slate-600">Técnicas de validação emocional</span>
                </li>
              </ul>
            </div>
            <div className="order-1 md:order-2">
              <Image
                src="/aulas/aula07.png?height=300&width=400"
                alt="Comunicação Efetiva e Limites Amorosos"
                width={400}
                height={300}
                className="w-full h-auto rounded-xl"
              />
            </div>
          </div>

          {/* Módulo 8 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="order-2">
              <Image
                src="/aulas/aula08.png?height=300&width=400"
                alt="Atividades Práticas para o Dia a Dia"
                width={400}
                height={300}
                className="w-full h-auto rounded-xl"
              />
            </div>
            <div className="order-1">
              <div className="text-pink-500 font-medium mb-2">MÓDULO 8</div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">Mindset Na Educação dos Filhos</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <div className="w-5 h-5 rounded-full bg-pink-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                  </div>
                  <span className="text-sm text-slate-600">
                    Jogos e brincadeiras para desenvolver inteligência emocional
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-5 h-5 rounded-full bg-pink-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                  </div>
                  <span className="text-sm text-slate-600">Rotinas que promovem o equilíbrio emocional</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-5 h-5 rounded-full bg-pink-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                  </div>
                  <span className="text-sm text-slate-600">Atividades para momentos de crise</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Módulo 9 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1">
              <div className="text-pink-500 font-medium mb-2">MÓDULO 9</div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">Educação Emocional</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <div className="w-5 h-5 rounded-full bg-pink-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                  </div>
                  <span className="text-sm text-slate-600">Desenvolva habilidades de comunicação não-violenta</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-5 h-5 rounded-full bg-pink-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                  </div>
                  <span className="text-sm text-slate-600">Como estabelecer limites com amor e firmeza</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-5 h-5 rounded-full bg-pink-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                  </div>
                  <span className="text-sm text-slate-600">Técnicas de validação emocional</span>
                </li>
              </ul>
            </div>
            <div className="order-1 md:order-2">
              <Image
                src="/aulas/aula09.png?height=300&width=400"
                alt="Comunicação Efetiva e Limites Amorosos"
                width={400}
                height={300}
                className="w-full h-auto rounded-xl"
              />
            </div>
          </div>

          {/* Módulo 10 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="order-2">
              <Image
                src="/aulas/aula10.png?height=300&width=400"
                alt="Atividades Práticas para o Dia a Dia"
                width={400}
                height={300}
                className="w-full h-auto rounded-xl"
              />
            </div>
            <div className="order-1">
              <div className="text-pink-500 font-medium mb-2">MÓDULO 10</div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">Educação Emocional</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <div className="w-5 h-5 rounded-full bg-pink-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                  </div>
                  <span className="text-sm text-slate-600">
                    Jogos e brincadeiras para desenvolver inteligência emocional
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-5 h-5 rounded-full bg-pink-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                  </div>
                  <span className="text-sm text-slate-600">Rotinas que promovem o equilíbrio emocional</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-5 h-5 rounded-full bg-pink-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                  </div>
                  <span className="text-sm text-slate-600">Atividades para momentos de crise</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
