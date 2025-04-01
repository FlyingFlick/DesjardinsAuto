import { cn } from "@/lib/utils";
import {
  IconAdjustmentsBolt,
  IconCloud,
  IconCurrencyDollar,
  IconEaseInOut,
  IconHeart,
  IconHelp,
  IconRouteAltLeft,
  IconTerminal2,
} from "@tabler/icons-react";

const features = [
  {
    title: "Always On",
    description: "Our AI assistant is available 24/7, ensuring every customer interaction becomes a sales opportunity.",
    icon: <IconCloud className="w-8 h-8" />,
  },
  {
    title: "Deep Inventory Knowledge",
    description: "Instant access to detailed specs, pricing, and availability for your entire inventory.",
    icon: <IconTerminal2 className="w-8 h-8" />,
  },
  {
    title: "Proactive Engagement",
    description: "Initiates relevant conversations based on user behavior and browsing patterns.",
    icon: <IconEaseInOut className="w-8 h-8" />,
  },
  {
    title: "Cost-Effective",
    description: "Maximize ROI with our affordable pricing and no hidden fees.",
    icon: <IconCurrencyDollar className="w-8 h-8" />,
  },
  {
    title: "Smart Routing",
    description: "Automatically directs inquiries to the right department or sales representative.",
    icon: <IconRouteAltLeft className="w-8 h-8" />,
  },
  {
    title: "24/7 Support",
    description: "Our team is here to help you get the most out of your AI assistant.",
    icon: <IconHelp className="w-8 h-8" />,
  },
  {
    title: "Easy Integration",
    description: "Seamlessly integrates with your existing website and CRM systems.",
    icon: <IconAdjustmentsBolt className="w-8 h-8" />,
  },
  {
    title: "Customer-Centric",
    description: "Designed to provide the best possible experience for your customers.",
    icon: <IconHeart className="w-8 h-8" />,
  },
];

export function FeaturesSectionWithHoverEffects() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 py-10 max-w-7xl mx-auto">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r py-10 relative group/feature border-slate-700",
        (index === 0 || index === 4) && "lg:border-l border-slate-700",
        index < 4 && "lg:border-b border-slate-700"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-blue-900/50 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-blue-900/50 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-blue-400">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-slate-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-white">
          {title}
        </span>
      </div>
      <p className="text-sm text-gray-400 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};