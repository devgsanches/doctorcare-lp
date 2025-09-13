import Image from 'next/image'
import { Header } from './components/Header'

export default function Home() {
  return (
    <div className="w-screen h-screen bg-[#DCE9E2]">
      <Header />
      <main className="px-6">
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
      </main>
    </div>
  )
}
