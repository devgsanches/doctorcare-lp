import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { Instagram, Youtube, Menu, Facebook } from 'lucide-react'

export function Header() {
  return (
    <header className="px-6 py-4 flex justify-between bg-[#DCE9E2]">
      <h1 className="text-2xl text-[#212529]">
        Doctor<span className="font-semibold text-[#00856F]">Care</span>
      </h1>

      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="p-0">
            <Menu color="#00856F" />
          </Button>
        </SheetTrigger>
        <SheetContent className="bg-[#00856F] border-none">
          <SheetHeader>
            <SheetTitle className="text-2xl text-white font-normal">
              Doctor<span className="font-semibold text-white">Care</span>
            </SheetTitle>
          </SheetHeader>
          <div className="mt-8">
            <ul className="text-lg font-bold flex flex-col items-center gap-10 text-[#FFFAF1]">
              <li>Início</li>
              <li>Sobre</li>
              <li>Serviços</li>
              <li>Depoimentos</li>
            </ul>
          </div>
          <div className="flex justify-center mt-4">
            <Button
              variant="default"
              className="bg-[#FFFFFF] rounded-full uppercase text-[#00856F] w-[14rem] font-bold"
              size="lg"
            >
              Agende sua consulta
            </Button>
          </div>
          <div className="flex justify-center mt-4 gap-8">
            <Instagram color="#FFFFFF" size={24} />
            <Facebook color="#FFFFFF" size={24} />
            <Youtube color="#FFFFFF" size={24} />
          </div>
        </SheetContent>
      </Sheet>
    </header>
  )
}
