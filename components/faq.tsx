import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FAQ() {
  return (
    <section id="duvidas" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-slate-800 mb-4">Perguntas Frequentes</h2>
        <p className="text-center text-slate-600 max-w-2xl mx-auto mb-12">
          Tire suas dúvidas sobre o curso Eduque com Inteligência Emocional
        </p>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="border border-gray-200 rounded-lg overflow-hidden">
              <AccordionTrigger className="px-6 py-4 hover:bg-gray-50 text-left font-medium">
                Quanto tempo posso acessar o curso "A mamãe é top e o papai também?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 pt-2 text-slate-600">
                Você terá 1 ano de acesso, qualquer problema pode entrar em contato com nosso suporte pelo direct do Instagram ou pelo e-mail (kidscoach.grace@gmail.com).
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border border-gray-200 rounded-lg overflow-hidden">
              <AccordionTrigger className="px-6 py-4 hover:bg-gray-50 text-left font-medium">
                Por quanto tempo terei acesso ao curso?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 pt-2 text-slate-600">
                Você terá acesso vitalício ao curso e a todas as atualizações futuras. Uma vez adquirido, o conteúdo
                ficará disponível para você consultar sempre que precisar.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border border-gray-200 rounded-lg overflow-hidden">
              <AccordionTrigger className="px-6 py-4 hover:bg-gray-50 text-left font-medium">
                O curso A mamãe é top e o papai também! é para aprender desenvolver a Inteligência Emocional dos filhos com qual idade?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 pt-2 text-slate-600">
                O curso A mamãe é top e o papai também é para desenvolver a Inteligência Emocional dos pais e serve para todas as fases do desenvolvimento: Filhos que ainda não se tornaram pais, gestantes, filhos na primeira infância, pré-adolescentes, adolescentes e fase adulta.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border border-gray-200 rounded-lg overflow-hidden">
              <AccordionTrigger className="px-6 py-4 hover:bg-gray-50 text-left font-medium">
                É possível aplicar o método mesmo se o pai/mãe não participar do curso?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 pt-2 text-slate-600">
                Sim, é possível! Embora seja ideal que ambos os pais estejam alinhados, muitas mães conseguem
                implementar as técnicas sozinhas e, com o tempo, o outro responsável acaba percebendo os resultados
                positivos e se engajando naturalmente.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="border border-gray-200 rounded-lg overflow-hidden">
              <AccordionTrigger className="px-6 py-4 hover:bg-gray-50 text-left font-medium">
                Como funciona a garantia de satisfação?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 pt-2 text-slate-600">
                Oferecemos uma garantia incondicional de 7 dias. Se você não ficar satisfeita com o conteúdo do curso,
                basta nos enviar um e-mail dentro desse período e devolveremos 100% do seu investimento, sem
                questionamentos.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  )
}
