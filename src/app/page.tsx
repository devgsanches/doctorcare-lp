import Image from 'next/image'
import { Header } from './components/Header'
import { Button } from '@/components/ui/button'
import { ServiceCard } from './components/Card'
import { Facebook, Instagram, Mail, MapPin, Youtube } from 'lucide-react'
import { Card } from '@/components/ui/card'

export default function Home() {
  const services = [
    {
      title: 'Problemas digestivos',
      description:
        'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim.',
    },
    {
      title: 'Saúde Hormonal',
      description:
        'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim.',
    },
    {
      title: 'Bem-estar mental',
      description:
        'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim.',
    },
    {
      title: 'Cuidados Pediátricos',
      description:
        'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim.',
    },
    {
      title: 'Autoimune e Inflamação',
      description:
        'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim.',
    },
    {
      title: 'Saúde do Coração',
      description:
        'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim.',
    },
  ]
  return (
    <div className="min-h-dvh w-full">
      <Header />
      <main>
        <section className="bg-[#DCE9E2] px-6 pb-6">
          <Card className="flex flex-col gap-4 items-center pt-10 bg-transparent border-none shadow-none pb-0">
            <p className="text-sm font-bold text-[#00856F] uppercase">
              BOAS-VINDAS A DOCTORCARE 👋
            </p>
            <h2 className="text-4xl text-[#212529] text-center font-bold max-w-md sm:max-w-full">
              Assistência médica simplificada para todos
            </h2>
          </Card>
          <Card className="mt-6 flex items-center bg-transparent border-none shadow-none py-0">
            <p className="text-lg text-[#495057] text-center max-w-md sm:max-w-full">
              Os médicos da DoctorCare vão além dos sintomas para tratar a causa
              raiz de sua doença e proporcionar uma cura a longo prazo.
            </p>
          </Card>
          <div className="flex justify-center mt-8">
            <Button
              variant="default"
              size="lg"
              className="bg-[#00856F] rounded-full"
            >
              <Image
                src="/whatsapp.svg"
                alt="Whatsapp"
                width={24}
                height={24}
              />{' '}
              Agende sua consulta
            </Button>
          </div>
          <div className="flex flex-col items-center mt-15">
            <Image
              src={'/ilustration.png'}
              alt="Mulher jovem com blusa verde sorrindo."
              width={262}
              height={341}
            />
            <Card className="w-full flex flex-col items-center py-10 bg-[#FFFAF1] rounded-lg gap-12">
              <div className="flex flex-col items-center gap-2.5">
                <p className="font-bold text-5xl text-[#212529]">+3.500</p>
                <p className="text-[#00856F] text-center">
                  Pacientes atendidos
                </p>
              </div>
              <div className="flex flex-col items-center">
                <p className="font-bold text-5xl text-[#212529]">+15</p>
                <p className="text-[#00856F] text-center">
                  Especialistas disponíveis
                </p>
              </div>
              <div className="flex flex-col items-center">
                <p className="font-bold text-5xl text-[#212529] ">+10</p>
                <p className="text-[#00856F] text-center">Anos no mercado</p>
              </div>
            </Card>
          </div>
        </section>
        <section className="bg-[#F7F9F9] px-6 pb-6">
          <Card className="flex flex-col items-center gap-4 pt-10 bg-transparent border-none shadow-none pb-0">
            <h2 className="text-sm font-bold text-[#00856F] uppercase">
              Serviços
            </h2>
            <p className="text-3xl font-bold text-[#212529] text-center px-6">
              Como podemos ajudá-lo a se sentir melhor?
            </p>
          </Card>
          <Card className="mt-15 space-y-2 bg-transparent border-none shadow-none py-0">
            {services.map((service) => {
              return (
                <ServiceCard
                  key={service.title}
                  title={service.title}
                  description={service.description}
                />
              )
            })}
          </Card>
        </section>
        <section className="bg-[#FFFFFF] px-6 pb-20.5">
          <Card className="flex flex-col gap-4 pt-10 bg-transparent border-none shadow-none pb-0">
            <h2 className="text-sm font-bold text-[#00856F] uppercase">
              Sobre nós
            </h2>
            <p className="text-3xl font-bold text-[#212529] max-w-md sm:max-w-full">
              Entenda quem somos e por que existimos
            </p>
          </Card>
          <Card className="mt-6 bg-transparent border-none shadow-none py-0">
            <p className="text-[#495057]">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim. Amet minim mollit
              non deserunt ullamco est sit aliqua dolor do amet sint. Velit
              officia consequat duis enim. Amet minim mollit non deserunt
              ullamco est sit aliqua dolor do amet sint. Velit officia consequat
              duis enim. Amet minim mollit non deserunt ullamco est sit aliqua
              dolor do amet sint. Velit officia consequat duis enim. Amet minim
              mollit non deserunt ullamco est sit aliqua dolor do amet sint.
            </p>
          </Card>
          <div className="pt-15 flex justify-center">
            <Image
              src={'/happy-doctor-holding-a-clipboard-with-patients.png'}
              alt="Médico atendendo família."
              width={327}
              height={282}
            />
          </div>
        </section>
        <section className="bg-[#FFFFFF] px-6 pb-25">
          <h2 className="text-3xl font-bold text-[#212529] max-w-md sm:max-w-full mt-6">
            Entre em contato com a gente!
          </h2>
          <Card className="mt-8 space-y-4 bg-transparent border-none shadow-none py-0 gap-0">
            <div className="flex items-center space-x-2">
              <MapPin color="#00856F" size={24} />
              <p className="text-[#495057]">R. Amauri Souza, 346</p>
            </div>
            <div className="flex items-center space-x-2">
              <Mail color="#00856F" size={24} />
              <p className="text-[#495057]">contato@doctorcare.com</p>
            </div>
          </Card>
          <div className="mt-8">
            <Button
              variant="default"
              size="lg"
              className="bg-[#00856F] rounded-full"
            >
              <Image
                src="/whatsapp.svg"
                alt="Whatsapp"
                width={24}
                height={24}
              />{' '}
              Agende sua consulta
            </Button>
          </div>
          <div className="pt-15 flex justify-center">
            <Image
              src={
                '/man-using-modern-smartphone-device-while-on-couch-at-home.jpg'
              }
              width={364}
              height={213}
              alt="Homem sorrindo mexendo no celular."
            />
          </div>
        </section>
      </main>
      <footer className="bg-[#00856F] px-6.5 py-15">
        <Card className="flex flex-col bg-transparent border-none shadow-none p-0 gap-0 text-white items-start">
          <p className="text-4xl">
            Doctor<span className="font-bold">Care</span>
          </p>
          <div className="flex flex-col gap-3 mt-6">
            <span>©2025 Beautysalon.</span>
            <span>Todos os direitos reservados.</span>
          </div>
          <div className="flex space-x-8.5 mt-8">
            <Instagram color="#FFFFFF" size={24} />
            <Facebook color="#FFFFFF" size={24} />
            <Youtube color="#FFFFFF" size={24} />
          </div>
        </Card>
      </footer>
    </div>
  )
}
