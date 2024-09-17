import React from "react";
import Link from "next/link";

import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa"

const socials = [
    { icon: <FaGithub />, path: 'https://github.com/nurfaiz26' },
    { icon: <FaLinkedin />, path: 'https://www.linkedin.com/in/mnurfaiz/' },
    { icon: <FaInstagram />, path: 'https://www.instagram.com/nurfaiz26/' },
]

const Social = ({ containerStyles, iconStyles }) => {
    return (
        <>
            <div className={containerStyles}>
                {socials.map((item, index) => {
                    return (
                        <>
                            <Link
                                target="_blank"
                                key={index}
                                href={item.path}
                                className={iconStyles}
                            >
                                {item.icon}
                            </Link>
                        </>
                    )
                })}
            </div>
        </>
    )
}

export default Social