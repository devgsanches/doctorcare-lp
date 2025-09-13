import Image from 'next/image'
import { Header } from './components/Header'
import { Button } from './components/Button'

export default function Home() {
  return (
    <div className="w-screen h-screen bg-[#DCE9E2]">
      <Header />
      <main className="px-6">
        <section>
        <div className="flex flex-col gap-4 items-center">
          <p className="text-sm font-bold text-[#00856F]">
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
              <p className="text-[#00856F] text-center">Pacientes atendidos</p>
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
        <section>
          
        </section>
      </main>
    </div>
  )
}
