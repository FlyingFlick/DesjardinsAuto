import React, { useState, useEffect } from 'react';
import { IconCheck } from "@tabler/icons-react";
import { Badge } from "@/components/ui/badge";

function Feature() {
  return (
    <div className="w-full py-20 lg:py-40">
      <div className="container mx-auto">
        <div className="grid border border-slate-700 rounded-2xl container p-12 grid-cols-1 gap-12 items-center lg:grid-cols-2 bg-slate-900/30 backdrop-blur-sm">
          <div className="flex gap-10 flex-col">
            <div className="flex gap-4 flex-col">
              <div>
                <Badge variant="outline">The Challenge</Badge>
              </div>
              <div className="flex gap-2 flex-col">
                <h2 className="text-3xl lg:text-5xl tracking-tighter max-w-xl text-left font-regular text-white">
                  Dealerships are losing leads daily.
                </h2>
                <p className="text-lg leading-relaxed tracking-tight text-gray-300 max-w-xl text-left">
                  Twice as many vehicle buyers start their search online vs at a dealer, so it's more important than ever to capture that attention. There's a few problems that get in the way.
                </p>
              </div>
            </div>
            <div className="grid lg:pl-6 grid-cols-1 items-start gap-8">
              <div className="flex flex-row gap-6 items-start group">
                <IconCheck className="w-5 h-5 mt-2 text-blue-400" />
                <div className="flex flex-col gap-1">
                  <p className="text-white font-medium group-hover:text-blue-400 transition-colors">Lost After-Hours Leads</p>
                  <p className="text-gray-400 text-base">
                    Potential customers browse and inquire outside business hours, when no one is available to respond.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start group">
                <IconCheck className="w-5 h-5 mt-2 text-blue-400" />
                <div className="flex flex-col gap-1">
                  <p className="text-white font-medium group-hover:text-blue-400 transition-colors">Expensive Chat Solutions</p>
                  <p className="text-gray-400 text-base">
                    Traditional chat services are costly and often provide inconsistent customer experiences.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start group">
                <IconCheck className="w-5 h-5 mt-2 text-blue-400" />
                <div className="flex flex-col gap-1">
                  <p className="text-white font-medium group-hover:text-blue-400 transition-colors">Limited Bot Capabilities</p>
                  <p className="text-gray-400 text-base">
                    Basic chatbots frustrate customers with canned responses and inability to handle complex inquiries.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start group">
                <IconCheck className="w-5 h-5 mt-2 text-blue-400" />
                <div className="flex flex-col gap-1">
                  <p className="text-white font-medium group-hover:text-blue-400 transition-colors">Poor Trust Building</p>
                  <p className="text-gray-400 text-base">
                    Instead of providing valuable information first, bots rush to collect contact details, damaging customer trust.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-slate-800/50 rounded-xl p-8 flex items-center justify-center shadow-2xl relative h-[600px]">
            <div className="absolute -top-12 right-0">
              <Badge variant="outline">
                Competitor's Chat Example
              </Badge>
            </div>
            <div className="relative h-full">
              <img 
                src="/chat-example.png"
                alt="AI Chat Interface Example"
                className="rounded-xl h-full w-100 shadow-2xl border border-slate-700/50"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Feature };