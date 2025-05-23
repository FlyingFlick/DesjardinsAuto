"use client";

import { motion } from "framer-motion";
import clsx from "clsx";
import { useState } from "react";
import { SparklesCore } from "./sparkles";

interface BackgroundCirclesProps {
    title?: string;
    description?: string;
    className?: string;
    variant?: keyof typeof COLOR_VARIANTS;
}

const COLOR_VARIANTS = {
    primary: {
        border: [
            "border-emerald-500/60",
            "border-cyan-400/50",
            "border-slate-600/30",
        ],
        gradient: "from-emerald-500/30",
    },
    secondary: {
        border: [
            "border-violet-500/60",
            "border-fuchsia-400/50",
            "border-slate-600/30",
        ],
        gradient: "from-violet-500/30",
    },
    tertiary: {
        border: [
            "border-orange-500/60",
            "border-yellow-400/50",
            "border-slate-600/30",
        ],
        gradient: "from-orange-500/30",
    },
    quaternary: {
        border: [
            "border-purple-500/60",
            "border-pink-400/50",
            "border-slate-600/30",
        ],
        gradient: "from-purple-500/30",
    },
    quinary: {
        border: [
            "border-red-500/60",
            "border-rose-400/50",
            "border-slate-600/30",
        ],
        gradient: "from-red-500/30",
    },
    senary: {
        border: [
            "border-blue-500/60",
            "border-sky-400/50",
            "border-slate-600/30",
        ],
        gradient: "from-blue-500/30",
    },
    septenary: {
        border: [
            "border-gray-500/60",
            "border-gray-400/50",
            "border-slate-600/30",
        ],
        gradient: "from-gray-500/30",
    },
    octonary: {
        border: [
            "border-red-500/60",
            "border-rose-400/50",
            "border-slate-600/30",
        ],
        gradient: "from-red-500/30",
    },
} as const;

export function BackgroundCircles({
    title = "Background Circles",
    description = "Optional Description",
    className,
    variant = "octonary",
}: BackgroundCirclesProps) {
    const variantStyles = COLOR_VARIANTS[variant];

    return (
        <div 
            className={clsx(
                "relative flex h-screen w-full items-center justify-center overflow-hidden",
                "bg-transparent",
                "Howdy"
            )}
        >
            <motion.div
                className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
                animate={{
                    backgroundPosition: ["0% 0%", "100% 100%"],
                }}
                transition={{
                    duration: 40,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                }}
            >
                <div className="relative h-[200vh] w-[200vw] -translate-x-1/4 -translate-y-1/4">
                    <div 
                        className="absolute inset-0 [background-image:linear-gradient(100deg,#64748B_0%,#64748B_1px,transparent_1px)] [background-size:4%_4%] opacity-20"
                        style={{
                            maskImage: 'linear-gradient(to bottom, black, transparent)',
                            WebkitMaskImage: 'linear-gradient(to bottom, black, transparent)'
                        }}
                    />
                </div>
            </motion.div>
            <motion.div className="absolute h-[480px] w-[480px]">
                {[0, 1, 2].map((i) => (
                    <motion.div
                        key={i}
                        className={clsx(
                            "absolute inset-0 rounded-full",
                            "border-2 bg-gradient-to-br to-transparent",
                            variantStyles.border[i],
                            variantStyles.gradient
                        )}
                        animate={{
                            rotate: 360,
                            scale: [1, 1.05 + i * 0.05, 1],
                            opacity: [0.8, 1, 0.8],
                        }}
                        transition={{
                            duration: 5,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "easeInOut",
                        }}
                    >
                        <div
                            className={clsx(
                                "absolute inset-0 rounded-full mix-blend-screen",
                                `bg-[radial-gradient(ellipse_at_center,${variantStyles.gradient.replace(
                                    "from-",
                                    ""
                                )}/10%,transparent_70%)]`
                            )}
                        />
                    </motion.div>
                ))}
            </motion.div>
            <div className="absolute inset-0 z-10">
                <SparklesCore
                    background="transparent"
                    minSize={0.4}
                    maxSize={1}
                    particleDensity={70}
                    className="w-full h-full"
                    particleColor="#FFFFFF"
                    speed={0.5}
                />
            </div>

            <motion.div
                className="relative z-10 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <div className="flex justify-center mb-8">
                    <img 
                        src="/logo.png" 
                        alt="Desjardins Automation Logo" 
                        className="h-24 w-auto"
                    />
                </div>
                <h1
                    className={clsx(
                        "text-5xl font-bold tracking-tight md:text-7xl",
                        "text-white",
                        "drop-shadow-[0_0_32px_rgba(94,234,212,0.4)]"
                    )}
                >
                    {title}
                </h1>

                <motion.p
                    className="mt-6 text-lg md:text-xl text-gray-300"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                >
                    {description}
                </motion.p>
            </motion.div>

            <div className="absolute inset-0 [mask-image:radial-gradient(90%_60%_at_50%_50%,#000_40%,transparent)]">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,#0F766E/30%,transparent_70%)] blur-[120px]" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,#2DD4BF/15%,transparent)] blur-[80px]" />
            </div>
        </div>
    );
}