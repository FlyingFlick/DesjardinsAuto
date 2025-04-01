import { cn } from "@/lib/utils"
import { CheckCircle } from 'lucide-react';

interface CardItem {
  id: string;
  text: string;
}

interface CardProps {
  items?: CardItem[];
  className?: string;
}

export function Card({ 
  items = [],
  className 
}: CardProps) {
  return (
    <div className={cn("grid md:grid-cols-3 gap-8", className)}>
      {items.map((item) => (
        <div
          key={item.id}
          className="group flex items-center gap-2 cursor-pointer rounded-lg border border-slate-700/40 bg-gradient-to-b from-slate-800/80 to-slate-900/80 p-6 shadow-md transition-all duration-300 ease-in-out hover:scale-105 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-xl"
        >
          <CheckCircle className="h-8 w-8 mr-4 stroke-blue-400/40 transition-colors group-hover:stroke-blue-400" />
          <p className="text-gray-400 transition-colors group-hover:text-white text-lg">
            {item.text}
          </p>
        </div>
      ))}
    </div>
  )
}