import { LucideIcon } from 'lucide-react'

interface FeatureCardProps {
  icon: LucideIcon
  title: string
  description: string
}

export function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <div className="bg-card rounded-xl p-6 border border-border hover:shadow-md transition-all duration-300 flex flex-col items-center text-center">
      <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
        <Icon size={28} className="text-primary" />
      </div>
      <h3 className="text-lg font-bold text-foreground mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  )
}
