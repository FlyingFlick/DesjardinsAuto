"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { DivideIcon as LucideIcon } from "lucide-react";

interface SocialLink {
  name: string;
  href: string;
}

interface FooterLink {
  name: string;
  Icon: LucideIcon | React.FC<React.SVGProps<SVGSVGElement>>;
  href?: string;
  onClick?: () => void;
}

interface FooterColumn {
  title: string;
  links: FooterLink[];
  className?: string;
}

interface FooterProps extends React.HTMLAttributes<HTMLDivElement> {
  brand: {
    name: string;
    description: string;
  };
  socialLinks: SocialLink[];
  columns: FooterColumn[];
  copyright?: string;
}

export const Footer = React.forwardRef<HTMLDivElement, FooterProps>(
  ({ className, brand, socialLinks, columns, copyright, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("relative pt-24", className)}
        {...props}
      >
        <div className="absolute inset-0 bg-slate-925" />
        <div className="max-w-screen-xl mx-auto px-4 lg:px-8">
          <div className="relative grid grid-cols-1 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <a href="#" className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600">
                {brand.name}
              </a>
              <p className="text-sm text-foreground/60">
                {brand.description}
              </p>

              <p className="text-sm font-light text-foreground/55 mt-3.5">
                {socialLinks.map((link, index) => (
                  <React.Fragment key={link.name}>
                    <a
                      className="hover:text-foreground/90"
                      target="_blank"
                      href={link.href}
                      rel="noopener noreferrer"
                    >
                      {link.name}
                    </a>
                    {index < socialLinks.length - 1 && " | "}
                  </React.Fragment>
                ))}
              </p>
            </div>

            <div className="grid grid-cols-1 mt-16 md:grid-cols-3 lg:col-span-8 lg:mt-0">
              {columns.map(({ title, links, className }) => (
                <div key={title} className={cn("flex flex-col items-start", 
                  title === "Company" && "lg:pr-4",
                  title === "Contact" && "lg:px-4",
                  title === "Legal" && "lg:pl-16",
                  className
                )}>
                  <h3 className="text-sm font-semibold">{title}</h3>
                  <ul className="mt-4 space-y-2.5">
                    {links.map(({ name, Icon, href, onClick }) => (
                      <li key={name}>
                        <a
                          href={href}
                          onClick={(e) => {
                            if (onClick) {
                              e.preventDefault();
                              onClick();
                            }
                          }}
                          className="text-sm transition-all text-foreground/60 hover:text-foreground/90 group flex items-center gap-1.5 whitespace-nowrap"
                        >
                          <Icon className="flex-shrink-0 stroke-2 h-4 transition-all stroke-foreground/60 group-hover:stroke-foreground/90" />
                          <span>{name}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {copyright && (
            <div className="relative mt-20 border-t border-slate-800/50 pt-6 pb-8">
              <p className="text-xs text-foreground/55">{copyright}</p>
            </div>
          )}
        </div>
      </div>
    );
  }
);

Footer.displayName = "Footer";