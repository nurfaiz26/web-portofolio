"use client"
import { FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs, FaPython, FaPhp } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiFlutter, SiKotlin, SiJetpackcompose, SiLaravel, SiDjango, SiDart, SiExpress } from "react-icons/si"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@radix-ui/react-tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";

import { motion } from "framer-motion";

// about data
const about = {
    title: 'About me',
    description: 'Here is my biography:',
    info: [
        {
            fieldName: "Name",
            fieldValue: "Muhammad Nur Faiz"
        },
        {
            fieldName: "Phone",
            fieldValue: "(+62) 813 3440 7008"
        },
        {
            fieldName: "Experience",
            fieldValue: "1+ Years"
        },
        {
            fieldName: "Instagram",
            fieldValue: "@nurfaiz26"
        },
        {
            fieldName: "Nationality",
            fieldValue: "Indonesian"
        },
        {
            fieldName: "Email",
            fieldValue: "mnurfaiz26@gmail.com"
        },
        {
            fieldName: "Freelance",
            fieldValue: "Available"
        },
        {
            fieldName: "Languanges",
            fieldValue: "English, Indonesian, Javanese"
        },
    ]
}

// experience data
const experience = {
    icon: '',
    title: "My experience",
    description: 'Here are my experiences building some projects:',
    items: [
        {
            company: "PT Otak Kanan",
            position: "Backend Laravel Developer Intern",
            duration: "January 2023 - July 2023"
        },
        {
            company: "PT Otak Kanan",
            position: "Mobile Flutter Developer Intern",
            duration: "January 2023 - July 2023"
        },
        {
            company: "Bangkit Academy",
            position: "Mobile Development Capstone Project",
            duration: "November 2023 - January 2024"
        },
        {
            company: "Politeknik Elektronika Negeri Surabaya",
            position: "Machine Learning Developer Final Project",
            duration: "August 2023 - July 2024"
        },
        {
            company: "Politeknik Elektronika Negeri Surabaya",
            position: "ReactJs Frontend Final Project",
            duration: "August 2023 - July 2024"
        },
        {
            company: "Politeknik Elektronika Negeri Surabaya",
            position: "ExpressJs Backend Final Project",
            duration: "August 2023 - July 2024"
        },
        {
            company: "Politeknik Elektronika Negeri Surabaya",
            position: "Django Backend Final Project",
            duration: "August 2023 - July 2024"
        },
    ]
}

// education data
const education = {
    icon: '',
    title: "My Education",
    description: 'Here are my education background and certifications:',
    items: [
        {
            institution: "State High School 6 Surabaya",
            degree: "Science Major",
            duration: "2017 - 2020"
        },
        {
            institution: "Politeknik Elektronika Negeri Surabaya",
            degree: "Applied Informatics Engineering Bachelor",
            duration: "2020 - 2024"
        },
        {
            institution: "Bangkit Academy",
            degree: "Mobile Development",
            duration: "2023 - 2024"
        },
        {
            institution: "PKS Digital School",
            degree: "ReactJs Frontend",
            duration: "2023"
        },
        {
            institution: "PLCC Politeknik Elektronika Surabaya",
            degree: "TOEFL PEPT Score 460",
            duration: "2023"
        },
        {
            institution: "Dicoding Academy",
            degree: "Android Intermediate",
            duration: "2023"
        },
        {
            institution: "Dicoding Academy",
            degree: "Android Jetpack Compose",
            duration: "2023"
        },
        {
            institution: "Kominfo VSGA Digital Talent Scholarship",
            degree: "Junior Mobile Programmer",
            duration: "2024"
        },
        {
            institution: "Dicoding Academy",
            degree: "Flutter Fundamental",
            duration: "2024"
        },
        {
            institution: "Badan Nasional Sertifikasi Profesi",
            degree: "Junior Mobile Programmer",
            duration: "2024"
        },
        {
            institution: "The British Institute",
            degree: "English for Business Communication ",
            duration: "2024"
        },
    ]
}

// skills data
const skills = {
    title: "My skills",
    description: "Here are some tech stacks that i\'ve experienced:",
    skilllist: [
        {
            icon: <FaHtml5 />,
            name: 'HTML5',
        },
        {
            icon: <FaCss3 />,
            name: 'CSS3',
        },
        {
            icon: <SiTailwindcss />,
            name: 'Tailwind CSS',
        },
        {
            icon: <FaJs />,
            name: 'JavaScript',
        },
        {
            icon: <FaNodeJs />,
            name: 'NodeJs',
        },
        {
            icon: <FaReact />,
            name: 'ReactJs',
        },
        {
            icon: <SiNextdotjs />,
            name: 'NextJs',
        },
        {
            icon: <SiExpress />,
            name: 'ExpressJs',
        },
        {
            icon: <SiDart />,
            name: 'Dart',
        },
        {
            icon: <SiFlutter />,
            name: 'Flutter',
        },
        {
            icon: <SiKotlin />,
            name: 'Kotlin',
        },
        {
            icon: <SiJetpackcompose />,
            name: 'Jetpack Compose',
        },
        {
            icon: <FaPython />,
            name: 'Python',
        },
        {
            icon: <SiDjango />,
            name: 'Django',
        },
        {
            icon: <FaPhp />,
            name: 'PHP',
        },
        {
            icon: <SiLaravel />,
            name: 'Laravel',
        },
    ]

}

const Resume = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
            }}

            className="min-h-[80vh] flex py-12 xl:py-0"
        >
            <div className="container mx-auto">
                <Tabs
                    defaultValue="experience"
                    className="flex flex-col xl:flex-row gap-[60px]"
                >
                    <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
                        <TabsTrigger value="experience">Experience</TabsTrigger>
                        <TabsTrigger value="education">Education</TabsTrigger>
                        <TabsTrigger value="skills">Skills</TabsTrigger>
                        <TabsTrigger value="about">About me</TabsTrigger>
                    </TabsList>

                    {/* content */}
                    <div className="min-h-[70vh] w-full">
                        {/* experience */}
                        <TabsContent value="experience" className="w-full">
                            <div className=" flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold">{experience.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{experience.description}</p>
                                <ScrollArea className="h-[400px]">
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                        {experience.items.map((item, index) => {
                                            return (
                                                <li
                                                    key={index}
                                                    className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                                                >
                                                    <span className="text-accent">{item.duration}</span>
                                                    <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left line-clamp-2">
                                                        {item.position}
                                                    </h3>
                                                    <div className="flex items-center gap-3">
                                                        {/* dot */}
                                                        <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                        <p className="text-white/60">{item.company}</p>
                                                    </div>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>
                        {/* education */}
                        <TabsContent value="education" className="w-full">
                            <div className=" flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold">{education.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{education.description}</p>
                                <ScrollArea className="h-[400px]">
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                        {education.items.map((item, index) => {
                                            return (
                                                <li
                                                    key={index}
                                                    className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                                                >
                                                    <span className="text-accent">{item.duration}</span>
                                                    <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left line-clamp-2">
                                                        {item.degree}
                                                    </h3>
                                                    <div className="flex items-center gap-3">
                                                        {/* dot */}
                                                        <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                        <p className="text-white/60">{item.institution}</p>
                                                    </div>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>
                        {/* skills */}
                        <TabsContent value="skills" className="w-full h-full mb-0 xl:mb-12">
                            <div className="flex flex-col gap-[30px]">
                                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                    <h3 className="text-4xl font-bold">{skills.title}</h3>
                                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                                        {skills.description}
                                    </p>
                                    <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                                        {skills.skilllist.map((skill, index) => {
                                            return (
                                                <li key={index}>
                                                    <TooltipProvider delayDuration={100}>
                                                        <Tooltip>
                                                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                                                                <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                                                    {skill.icon}
                                                                </div>
                                                            </TooltipTrigger>
                                                            <TooltipContent>
                                                                <p className="capitalize">{skill.name}</p>
                                                            </TooltipContent>
                                                        </Tooltip>
                                                    </TooltipProvider>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </div>
                            </div>
                        </TabsContent>
                        {/* about */}
                        <TabsContent value="about" className="w-full text-center xl:text-left">
                            <div className="flex flex-col gap-[30px]">
                                <h3 className="text-4xl font-bold">{about.title}</h3>
                                <p className=" max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
                                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                                    {about.info.map((item, index) => {
                                        return(
                                            <li 
                                            key={index}
                                            className="flex items-center justify-center xl:justify-start gap-4"
                                            >
                                                <span className="text-white/60">{item.fieldName}</span>
                                                <span className="text-xl">{item.fieldValue}</span>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </TabsContent>
                    </div>
                </Tabs>
            </div>
        </motion.div>
    )
}

export default Resume