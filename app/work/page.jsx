"use client"

import { motion } from "framer-motion"
import React, { useState } from "react"

import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"

import { BsArrowUpRight, BsGithub, BsTypeH1 } from "react-icons/bs"

import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
    TooltipProvider
} from "@/components/ui/tooltip"

import Link from "next/link"
import Image from "next/image"
import WorkSliderBtns from "@/components/WorkSliderBtns"

const projects = [
    {
        num: "01",
        category: "Backend and AR Development",
        title: "Mirai",
        description: 'Mirai is a make up online shop afiliation application with real time virtual make application with computer vision. Developed with Flutter for the mobile frontend and Python CV2',
        stack: [
            { name: "Flutter" },
            { name: "Dart" },
            { name: "Python" },
            { name: "CV2" },
        ],
        image: "/assets/work/hallotax.png",
        live: "https://drive.google.com/file/d/1GEMMFg93ImFN37JCdHO6N1-0ZRfJgl2y/view?usp=sharing",
        github: "https://github.com/HalloTaxApps/mobile-v2",
    },
    {
        num: "02",
        category: "Mobile & Backend Development",
        title: "HalloTax",
        description: 'HalloTax is an application for tax consultation. Developed with Flutter for the mobile frontend and Laravel for backend',
        stack: [
            { name: "Flutter" },
            { name: "Dart" },
            { name: "Laravel" },
            { name: "PHP" },
        ],
        image: "/assets/work/hallotax.png",
        live: "https://drive.google.com/file/d/1GEMMFg93ImFN37JCdHO6N1-0ZRfJgl2y/view?usp=sharing",
        github: "https://github.com/HalloTaxApps/mobile-v2",
    },
    {
        num: "03",
        category: "Mobile Development",
        title: "Patani",
        description: 'Patani is an application for connecting between farmers and buyers with price prediction feature using time series. The frontend side is an Android native application developed with Kotlin and Jetpack Compose',
        stack: [
            { name: "Android" },
            { name: "Kotlin" }
        ],
        image: "/assets/work/patani.png",
        live: "",
        github: "",
    },
    {
        num: "04",
        category: "Web Fullstack & Machine Learning Development",
        title: "Ichwunden",
        description: 'Ichwunden is an application for detecting Intracaranial Hemorrhage Classification using Vision Transformer architecture. Developed with ReactJs for the frontend web, Expressjs for the backend web, and Django for backend Machine Learning process',
        stack: [
            { name: "Javascript" },
            { name: "ReactJs" },
            { name: "ExpressJs" },
            { name: "MySQL" },
            { name: "Tailwind" },
            { name: "Python" },
            { name: "Django" },
        ],
        image: "/assets/work/patani.png",
        live: "",
        github: "",
    },
    {
        num: "05",
        category: "Frontend Development",
        title: "Web Portofolio",
        description: 'This web application is the one what you see it right now. Developed with NextJs, Tailwind, and Framer Motion',
        stack: [
            { name: "HTML 5" },
            { name: "CSS 3" },
            { name: "Javascript" },
            { name: "NextJs" },
            { name: "Tailwind" },
        ],
        image: "/assets/work/patani.png",
        live: "",
        github: "",
    },
]

const Work = () => {
    const [project, setProject] = useState(projects[0])

    const handleSlideChange = (swiper) => {
        // get current slide index
        const currentIndex = swiper.activeIndex
        // update project state based on current slide index
        setProject(projects[currentIndex])
    }
    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: {delay: 2.4, duration: 0.4, ease: "easeIn"} }}
            className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
        >
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row xl:gap-[30px]">
                    <div className="w-full xl:w-[50%] xl:h-[406px] flex flex-col xl:justify-between order-2 xl:order-none">
                        <div className="flex flex-col gap-[30px] h-[50%]">
                            {/* outline num */}
                            <div className="text-8xl leading-none font-extralight text-transparent text-outline">
                                {project.num}
                            </div>
                            {/* project category */}
                            <h2 className="text-[48px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                                {project.title}
                            </h2>
                            {/* project category */}
                            <h3 className="text-[24px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                                {project.category} project
                            </h3>
                            {/* project description */}
                            <p className="text-white/60">
                                {project.description}
                            </p>
                            {/* project stacks */}
                            
                            <ul className="flex flex-wrap gap-4">
                                {project.stack.map((item, index) => {
                                    return (
                                        <li key={index} className="text-xl text-accent">
                                            {item.name}
                                            {/* add and remove last comma */}
                                            {index !== project.stack.length - 1 && ","}
                                        </li>
                                    )
                                })}
                            </ul>
                            
                            {/* border */}
                            <div className="border border-white/20"></div>
                            {/* button */}
                            <div className="flex items-center gap-4">
                                {/* live project button */}
                                <Link href={project.live} target="_blank">
                                    <TooltipProvider delayDuration={100}>
                                        <Tooltip>
                                            <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                                                <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>Live project</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </Link>

                                {/* live github button */}
                                <Link href={project.github} target="_blank">
                                    <TooltipProvider delayDuration={100}>
                                        <Tooltip>
                                            <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                                                <BsGithub className="text-white text-3xl group-hover:text-accent" />
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>Github repository</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="w-full xl:w-[50%]">
                        <Swiper
                            spaceBetween={30}
                            slidesPerView={1}
                            className="xl:h-[520px] mb-12"
                            onSlideChange={handleSlideChange}
                        >
                            {projects.map((project, index) => {
                                return (
                                    <SwiperSlide
                                        key={index}
                                        className="w-full"
                                    >
                                        <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                                            {/* overlay */}
                                            <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                                            {/* image */}
                                            <div className="relative w-full h-full">
                                                <Image
                                                    src={project.image}
                                                    fill
                                                    className="object-cover"
                                                    alt=""
                                                />
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                )
                            })}
                            {/* slider buttons */}
                            <WorkSliderBtns 
                                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
                            />
                        </Swiper>
                    </div>
                </div>
            </div>
        </motion.section>
    )
}

export default Work