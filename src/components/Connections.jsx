import React from 'react'
import { BsGithub, BsLinkedin, BsFacebook, BsInstagram } from 'react-icons/bs';
import { FaTwitterSquare, FaAngellist } from 'react-icons/fa';

const Connections = () => {
    return (
        <div className="flex gap-6 justify-center items-center">
            <BsGithub className="cursor-pointer" onClick={() => window.open("https://github.com/roniy68", "_blank")} size={30} />
            <BsLinkedin className="cursor-pointer" onClick={() => window.open("https://www.linkedin.com/in/ahroniy", "_blank")} size={30} />
            <FaTwitterSquare className="cursor-pointer" onClick={() => window.open("https://twitter.com/ahroniy", "_blank")} size={35} />
            <BsFacebook className="cursor-pointer" onClick={() => window.open("https://www.facebook.com/AHRoniy", "_blank")} size={30} />
            <FaAngellist className="cursor-pointer" onClick={() => window.open("https://wellfound.com/u/ah-roniy", "_blank")} size={35} />
            <BsInstagram className="cursor-pointer" onClick={() => window.open("https://www.instagram.com/ahroniy", "_blank")} size={30} />
        </div>

    )
}

export default Connections
