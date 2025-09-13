import Image from 'next/image'

interface CardProps {
  title: string
  description: string
}

export function Card({ title, description }: CardProps) {
  return (
    <div className="bg-[#FFFFFF] rounded-lg p-6 border border-[#DCE9E2] space-y-4">
      <div>
        <Image
          src={'/icon-check.png'}
          alt={'Check Icon'}
          width={24}
          height={24}
        />
      </div>

      <h3 className="text-2xl font-bold text-[#212529]">{title}</h3>
      <div>
        <p className="text-[#495057]">{description}</p>
      </div>
    </div>
  )
}
