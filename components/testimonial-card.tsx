import Image from "next/image"

interface TestimonialCardProps {
  name: string
  role: string
  quote: string
  url: string
}

export default function TestimonialCard({ name, role, quote, url }: TestimonialCardProps) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
      <div className="relative aspect-video rounded-lg overflow-hidden mb-6">
        <div className="relative w-full h-full">
          <video className="absolute inset-0 w-full h-full rounded-lg" autoPlay preload="metadata" controls style={{ borderRadius: '19px' }}>
            <source src={url} type="video/mp4" />
            Seu navegador não suporta o elemento de vídeo.
          </video>
          {/* <iframe
            className="absolute inset-0 w-full h-full rounded-lg"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="Depoimento"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe> */}
        </div>
      </div>

      <div className="flex items-center gap-3 mb-3">
        <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-200">
          <Image
            src="/placeholder.svg?height=40&width=40"
            alt={name}
            width={40}
            height={40}
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h4 className="font-medium text-slate-800">{name}</h4>
          <p className="text-xs text-slate-500">{role}</p>
        </div>
      </div>

      <p className="text-slate-600 text-sm italic">"{quote}"</p>
    </div>
  )
}
