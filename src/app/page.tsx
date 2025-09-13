import Image from 'next/image'
import { Header } from './components/Header'
import { Button } from './components/Button'
import { Card } from './components/Card'

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
    <div className=" h-screen ">
      <Header />
      <main>
        <section className="bg-[#DCE9E2] px-6 pb-6">
          <div className="flex flex-col gap-4 items-center pt-10">
            <p className="text-sm font-bold text-[#00856F] uppercase">
              BOAS-VINDAS A DOCTORCARE 👋
            </p>
            <h2 className="text-4xl text-[#212529] text-center font-bold">
              Assistência médica simplificada para todos
            </h2>
          </div>
          <div className="mt-6 px-8">
            <p className="text-lg text-[#495057] text-center">
              Os médicos da DoctorCare vão além dos sintomas para tratar a causa
              raiz de sua doença e proporcionar uma cura a longo prazo.
            </p>
          </div>
          <div className="mt-8 flex justify-center">
            <Button
              icon={
                <Image
                  src="/whatsapp.svg"
                  alt="Whatsapp"
                  width={20}
                  height={20}
                />
              }
              text="Agende sua consulta"
              className="bg-[#00856F] text-white"
            />
          </div>
          <div className="flex flex-col items-center mt-15">
            <Image
              src={'/ilustration.png'}
              alt="Mulher jovem com blusa verde sorrindo."
              width={262}
              height={341}
            />
            <div className="w-full flex flex-col items-center py-10 bg-[#FFFAF1] rounded-lg gap-12">
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
            </div>
          </div>
        </section>
        <section className="bg-[#F7F9F9] px-6">
          <div className="flex flex-col items-center gap-4 pt-10">
            <h2 className="text-sm font-bold text-[#00856F] uppercase">
              Serviços
            </h2>
            <p className="text-3xl font-bold text-[#212529] text-center px-6">
              Como podemos ajudá-lo a se sentir melhor?
            </p>
          </div>
          <div className="mt-15 space-y-2">
            {services.map((service) => {
              return (
                <Card
                  key={service.title}
                  title={service.title}
                  description={service.description}
                />
              )
            })}
          </div>
        </section>
      </main>
    </div>
  )
}
