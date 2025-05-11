'use client'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, Instagram, Facebook, Youtube, TwitterIcon as TikTok } from "lucide-react"
import emailjs from 'emailjs-com';
import { useState } from "react";
import { toast } from "react-toastify"; // Certifique-se de instalar react-toastify

export default function ContactSection() {
  const [loading, setLoading] = useState(false);

  const disparoEmail = async (e: any) => {
    e.preventDefault(); // Previne o comportamento padrão do formulário
    setLoading(true);
    const templateParams: any = {
      title: "Mentoria a mamãe é top e o papai também",
      name: (document.getElementById('name') as HTMLInputElement).value,
      email: (document.getElementById('email') as HTMLInputElement).value,
      time: (document.getElementById('phone') as HTMLInputElement).value,
      message: (document.getElementById('message') as HTMLTextAreaElement).value
    };
    try {
      await emailjs.send(
        'service_z58lhj8',    // ID do serviço
        'template_t3lld3s',
        templateParams,   // ID do template
        'drtHBCiEaIHw6saX6'        // ID do usuário
      );
      toast.success('Mensagem enviada com sucesso!');
    } catch (error) {
      console.error('Erro:', error);
      toast.error('Erro ao enviar a mensagem. Tente novamente.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="contato" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-gray-400">
            Entre em <span className="text-pink-500">Contato</span>
          </h2>
          <div className="w-24 h-1 bg-pink-500 mx-auto mt-2 mb-8"></div>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2">
            <h3 className="text-2xl font-semibold mb-4 text-gray-300">
              Tem alguma dúvida sobre o evento? Nossa equipe está pronta para ajudar você
            </h3>

            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Nome completo
                </label>
                <Input id="name" type="text" className="w-full p-3 border border-gray-300 rounded-md" />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  E-mail
                </label>
                <Input id="email" type="email" className="w-full p-3 border border-gray-300 rounded-md" />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Telefone
                </label>
                <Input id="phone" type="tel" className="w-full p-3 border border-gray-300 rounded-md" />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Mensagem
                </label>
                <Textarea id="message" className="w-full p-3 border border-gray-300 rounded-md h-32" />
              </div>

              <Button 
                onClick={(e) => {disparoEmail(e)}} 
                className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-md w-full"
                disabled={loading}
              >
                {loading ? "Enviando..." : "Enviar mensagem"}
              </Button>
            </form>
          </div>

          <div className="md:w-1/2 bg-pink-50 p-8 rounded-lg">
            <h3 className="text-2xl font-semibold mb-6 text-gray-400">Informações de Contato</h3>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-pink-100 p-3 rounded-full">
                  <Mail className="h-6 w-6 text-pink-500" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-400">E-mail</h4>
                  <p className="text-gray-600">suporte.amamaeetopeopapaitambem@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-pink-100 p-3 rounded-full">
                  <Phone className="h-6 w-6 text-pink-500" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-400">Telefone</h4>
                  <p className="text-gray-600">(62) 99261-5459</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-pink-100 p-3 rounded-full">
                  <Instagram className="h-6 w-6 text-pink-500" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-400">Instagram</h4>
                  <p className="text-gray-600">@gracebezerra1</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-pink-100 p-3 rounded-full">
                  <Facebook className="h-6 w-6 text-pink-500" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-400">Facebook</h4>
                  <p className="text-gray-600">Grace Bezerra Oficial</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="font-medium mb-4 text-gray-400">Siga-nos nas redes sociais</h4>
              <div className="flex space-x-4">
                <a href="https://www.instagram.com/gracebezerra1?igsh=MXVyYjE2YWsxcGV5aQ== " className="bg-pink-100 p-3 rounded-full text-pink-500 hover:bg-pink-200 transition-colors">
                  <Instagram size={20} />
                </a>
                <a href="#" className="bg-pink-100 p-3 rounded-full text-pink-500 hover:bg-pink-200 transition-colors">
                  <Facebook size={20} />
                </a>
                <a href="https://www.youtube.com/@PoddaGRACE" className="bg-pink-100 p-3 rounded-full text-pink-500 hover:bg-pink-200 transition-colors">
                  <Youtube size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
