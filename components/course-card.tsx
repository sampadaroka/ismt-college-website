import Link from 'next/link'
import Image from 'next/image'
import { Clock, DollarSign, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface CourseCardProps {
  title: string
  description: string
  duration: string
  fee: string
  image: string
}

export function CourseCard({ title, description, duration, fee, image }: CourseCardProps) {
  return (
    <div className="bg-card rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col h-full border border-border">
      {/* Image */}
      <div className="relative h-48 w-full overflow-hidden bg-muted">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-foreground mb-2">{title}</h3>
        <p className="text-muted-foreground mb-4 flex-grow">{description}</p>

        {/* Details */}
        <div className="space-y-3 mb-6 pt-4 border-t border-border">
          <div className="flex items-center gap-2 text-sm">
            <Clock size={16} className="text-primary flex-shrink-0" />
            <span className="text-muted-foreground">{duration}</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <DollarSign size={16} className="text-primary flex-shrink-0" />
            <span className="text-foreground font-semibold">{fee}</span>
          </div>
        </div>

        {/* Button */}
        <Button className="w-full gap-2 bg-primary hover:bg-primary/90">
          Learn More <ArrowRight size={16} />
        </Button>
      </div>
    </div>
  )
}
