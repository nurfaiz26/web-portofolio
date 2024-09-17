"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa"

const info = [
    {
        icon: <FaPhoneAlt />,
        title: "Phone",
        description: "(+62) 813 3440 7008",
    },
    {
        icon: <FaEnvelope />,
        title: "Email",
        description: "mnurfaiz26@gmail.com",
    },
    {
        icon: <FaMapMarkedAlt />,
        title: "Address",
        description: "Surabaya, East Java, Indonesia, 60283",
    }
]

import { motion } from "framer-motion"
import { useState } from 'react';

const Contact = () => {
    const [email, setEmail] = useState('');
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [phone, setPhone] = useState('');
    const [service, setService] = useState('');
    const [text, setText] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        const phoneNumber = "6281334407008"; // Replace with the recipient's phone number
        let message =`Name\t: ${firstname} ${lastname}\nEmail\t: ${email}\nPhone\t: ${phone}\nService\t: ${service}\nMessage\t:\n${text}`

        window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
    };

    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" } }}
            className="py-6"
        >
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row gap-[30px]">
                    {/* form */}
                    <div className="xl:w-[54%] order-2 xl:order-none">
                        <form onSubmit={handleSubmit} className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
                            <h3 className="text-4xl text-accent">Let's work together</h3>
                            <p className="text-white/60">Sent your message by whatsApp</p>
                            {/* input */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <Input
                                    value={firstname}
                                    onChange={(e) => setFirstname(e.target.value)}
                                    type="text"
                                    placeholder="Firstname"
                                />
                                <Input
                                    value={lastname}
                                    onChange={(e) => setLastname(e.target.value)}
                                    type="text"
                                    placeholder="Lastname"
                                />
                                <Input
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    type="email"
                                    placeholder="Email address"
                                />
                                <Input
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    type="tel"
                                    placeholder="Phone number"
                                />
                            </div>
                            {/* select */}
                            <Select
                                value={service}
                                onValueChange={(value) => {
                                  setService(value)
                                }}
                            >
                                <SelectTrigger>
                                    <SelectValue placeholder="Select a service" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Select a service</SelectLabel>
                                        <SelectItem value="Web Development">Web Development</SelectItem>
                                        <SelectItem value="Mobile Development">Mobile Development</SelectItem>
                                        <SelectItem value="Machine Learning">Machine Learning Development</SelectItem>
                                        <SelectItem value="Integration and Deployment">Integration and Deployment</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                            <Textarea
                                value={text}
                                onChange={(e) => setText(e.target.value)}
                                className="h-[200px]"
                                placeholder="Type your message here."
                            />
                            {/* button */}
                            <Button type="submit" size="md" className="max-w-40 p-2">
                                Send message
                            </Button>
                        </form>
                    </div>
                    {/* info */}
                    <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
                        <ul className="flex flex-col gap-10">
                            {info.map((item, index) => {
                                return (
                                    <li key={index} className="flex items-center gap-6">
                                        <div className="w-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                                            <div className="text-[28px]">{item.icon}</div>
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-white/60">{item.title}</p>
                                            <h3 className="text-xl">{item.description}</h3>
                                        </div>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </motion.section>
    )
}

export default Contact