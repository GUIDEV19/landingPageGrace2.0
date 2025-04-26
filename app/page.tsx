'use client'
import Image from "next/image"
import Link from "next/link"
import { Instagram, Facebook, Youtube, CheckCircle2 } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import PriceCard from "@/components/price-card"
import TestimonialCard from "@/components/testimonial-card"
import SocialProof from "@/components/social-proof"
import CourseModules from "@/components/course-modules"
import FAQ from "@/components/faq"

declare global {
  interface Window {
      fbq: any;
  }
}

export default function Home() {
  const handleClick = () => {
    // Rastreia o clique do botão
    if (typeof window !== 'undefined' && window.fbq) {
        window.fbq('track', 'ViewContent', {
            value: 197.00,
            currency: 'BRL',
        });
    }

    window.location.href = 'https://pay.kiwify.com.br/Q6p0tJ4'
};
  return (
    <main className="flex min-h-screen flex-col">
      <Header />

      {/* Hero Section */}
      <section className="bg-pink-50 py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800">
                Eduque com
                <br />
                Inteligência Emocional
              </h1>
              <p className="text-slate-600 text-lg">
                Transforme a maneira como você se conecta com seu filho e construa uma relação baseada em compreensão,
                empatia e desenvolvimento emocional saudável.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="#pricing"
                  className="bg-pink-500 hover:bg-pink-600 text-white font-medium py-3 px-6 rounded-full text-center transition-colors"
                >
                  Quero transformar minha maternidade
                </Link>
                <Link
                  href="#depoimentos"
                  className="border border-pink-500 text-pink-500 hover:bg-pink-50 font-medium py-3 px-6 rounded-full text-center transition-colors"
                >
                  Ver depoimentos
                </Link>
              </div>
            </div>
            <div className="relative aspect-video rounded-lg overflow-hidden">
              <div className="relative w-full h-full">
                <iframe
                  className="absolute inset-0 w-full h-full rounded-lg"
                  src="https://www.youtube.com/embed/VdRd1F9GTqs?autoplay=1"
                  title="Vídeo sobre Inteligência Emocional"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Por que educar com Inteligência Emocional */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="relative rounded-xl overflow-hidden">
              <Image
                src="/container02.png?height=500&width=500"
                alt="Mãe e filho interagindo com carinho"
                width={500}
                height={500}
                className="w-full h-auto object-cover rounded-xl"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-800">
                Por que educar com Inteligência Emocional?
              </h2>
              <p className="text-slate-600">
                A inteligência emocional é a base para relacionamentos saudáveis e um desenvolvimento infantil
                equilibrado. Quando educamos nossos filhos reconhecendo e validando suas emoções, estamos:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-pink-500 mt-1">❤️</span>
                  <span>Fortalecendo o vínculo afetivo e a confiança</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-pink-500 mt-1">🧠</span>
                  <span>Desenvolvendo habilidades sociais essenciais para toda a vida</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-pink-500 mt-1">🛡️</span>
                  <span>Prevenindo problemas comportamentais e emocionais futuros</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-pink-500 mt-1">🏠</span>
                  <span>Criando um ambiente familiar mais harmonioso e acolhedor</span>
                </li>
              </ul>
              <p className="text-slate-600 italic">
                A maneira como lidamos com as emoções dos nossos filhos hoje determinará como eles lidarão com suas
                próprias emoções amanhã.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Conheça sua mentora */}
      <section className="py-16 bg-pink-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6 order-2 md:order-1">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-800">Conheça sua mentora nessa jornada</h2>
              <h3 className="text-xl font-semibold text-pink-500">Grace Bezerra</h3>
              <p className="text-slate-600">
                Pedagoga, Neuropsicopedagoga e Especialista em  <span style={{ color: "#59D6FF" }}>Educação de Filhos</span> através da Inteligência Emocional para crianças, adolescentes e famílias.
              </p>
              <p className="text-slate-600">
                Ao longo de 10 anos ajuda milhares de mães e educadores em todo o Brasil com seus cursos, mentorias e palestras.
              </p>
              <p className="text-slate-600">
                Após muitos anos de experiência e vivências no ambiente escolar e no seu consultório desenvolveu um Método de Inteligência Emocional na Educação dos filhos com técnicas avançadas.
              </p>
              <p className="text-slate-600">
                Seu método tem como base Respeito e amor, já conquistou o coração dos Pais e Educadores!
              </p>
              <div className="flex gap-4">
                <Link href="#" aria-label="Instagram">
                  <Instagram className="h-5 w-5 text-pink-500 hover:text-pink-600" />
                </Link>
                <Link href="#" aria-label="Facebook">
                  <Facebook className="h-5 w-5 text-pink-500 hover:text-pink-600" />
                </Link>
                <Link href="#" aria-label="YouTube">
                  <Youtube className="h-5 w-5 text-pink-500 hover:text-pink-600" />
                </Link>
              </div>
            </div>
            <div className="relative rounded-xl overflow-hidden order-1 md:order-2">
              <Image
                src="/grace.png?height=500&width=500"
                alt="Ana Paula Silva - Mentora"
                width={500}
                height={500}
                className="w-full h-auto object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA 1 */}
      <section className="py-16 bg-pink-500 text-white">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Transforme sua maternidade hoje mesmo!</h2>
          <p className="text-lg mb-8">
            Aprenda técnicas práticas para lidar com as emoções do seu filho e construa uma relação mais harmoniosa e
            amorosa.
          </p>

          <div className="bg-white p-6 rounded-xl shadow-lg max-w-md mx-auto">
            <div className="text-left mb-4">
              <p className="text-gray-500 text-sm">De R$ 497,00</p>
              <div className="flex items-center gap-3">
                <p className="text-pink-500 text-3xl font-bold">R$ 197,00</p>
                <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full">60% OFF</span>
              </div>
              <p className="text-gray-500 text-sm">ou 12x de R$ 19,78</p>
            </div>

            <div className="space-y-2 mb-4">
              <div className="flex items-center gap-2 text-gray-700">
                <CheckCircle2 className="h-4 w-4 text-green-500" />
                <span className="text-sm">Acesso vitalício</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <CheckCircle2 className="h-4 w-4 text-green-500" />
                <span className="text-sm">Comunidade exclusiva</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <CheckCircle2 className="h-4 w-4 text-green-500" />
                <span className="text-sm">Bônus especiais</span>
              </div>
            </div>

            <button
              onClick={handleClick}
              className="block w-full bg-pink-500 hover:bg-pink-600 text-white font-medium py-3 px-6 rounded-full text-center transition-colors"
            >
              Quero garantir minha vaga
            </button>

            <div className="flex justify-center mt-3 text-gray-500 text-xs items-center gap-1">
              <span>Pagamento seguro</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section id="depoimentos" className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-slate-800 mb-12">
            O que dizem as mães que transformaram sua educação
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TestimonialCard
              url="/data/aluna01.mp4"
              name="Tatiane Sousa"
              role="Mãe de Paulo, 4 anos"
              quote="Gente esse curso apareceu pra mim quando eu estava vivendo uma crise na minha maternidade, eu precisa de algo para abrir a minha mente e os meus olhos, no curso encontrei ferramentas que abriram meus olhos e mudou minha mentalidade."
            />
            <TestimonialCard
              url="/data/aluna02.mp4"
              name="Lara Rodrigues"
              role="Mãe de Júlia, 6 anos"
              quote="O curso A mamãe é top foi um divisor de águas na minha vida e na vida da minha família, o curso é maravilhoso, eu aprendi levar a maternidade com mais leveza."
            />
            <TestimonialCard
              url="/data/aluna03.mp4"
              name="Elaine Oliveira"
              role="Mãe de Lucas e Beatriz"
              quote="O curso fez uma transformação na minha maternidade. Eu não sabia lidar com conflitos com minhas 2 filhas. o curso é muito explicativo"
            />
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <SocialProof />

      {/* CTA 2 */}
      <section className="py-16 bg-pink-500 text-white">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Não perca mais tempo!</h2>
          <p className="text-lg mb-8">
            Junte-se a milhares de mães que estão transformando a educação de seus filhos com inteligência emocional.
          </p>

          <div className="bg-white p-6 rounded-xl shadow-lg max-w-md mx-auto">
            <div className="text-left mb-4">
              <p className="text-gray-500 text-sm">De R$ 497,00</p>
              <div className="flex items-center gap-3">
                <p className="text-pink-500 text-3xl font-bold">R$ 197,00</p>
                <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full">60% OFF</span>
              </div>
              <p className="text-gray-500 text-sm">ou 12x de R$ 19,78</p>
            </div>

            <div className="space-y-2 mb-4">
              <div className="flex items-center gap-2 text-gray-700">
                <CheckCircle2 className="h-4 w-4 text-green-500" />
                <span className="text-sm">Acesso vitalício</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <CheckCircle2 className="h-4 w-4 text-green-500" />
                <span className="text-sm">Comunidade exclusiva</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <CheckCircle2 className="h-4 w-4 text-green-500" />
                <span className="text-sm">Bônus especiais</span>
              </div>
            </div>

            <button
              onClick={handleClick}
              className="block w-full bg-pink-500 hover:bg-pink-600 text-white font-medium py-3 px-6 rounded-full text-center transition-colors"
            >
              Quero transformar minha maternidade
            </button>

            <div className="flex justify-center mt-3 text-gray-500 text-xs items-center gap-1">
              <span>Pagamento seguro</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Metodologia do Curso */}
      <CourseModules />

      {/* O que você vai receber */}
      <section id="pricing" className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-slate-800 mb-12">
            Transforme sua maternidade hoje mesmo
          </h2>
          <p className="text-center text-slate-600 max-w-2xl mx-auto mb-12">
            Invista em uma educação consciente e emocionalmente inteligente para criar filhos emocionalmente saudáveis e
            felizes
          </p>

          <PriceCard handleClick={handleClick}/>
        </div>
      </section>

      {/* FAQ */}
      <FAQ />

      <Footer />
    </main>
  )
}
