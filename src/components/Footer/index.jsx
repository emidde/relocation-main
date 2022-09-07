import React from 'react'
import { FaFacebook, FaInstagram, FaTelegram, FaWhatsapp } from 'react-icons/fa';
import segurosec from '../../img/cert-seguro.png'
import footerlogo from '../../img/FACILITY.png'
import './footer.css'
import '../../App.css'
import segurobit from '../../img/bit-seg.png'
import seguroblindado from '../../img/side-blind.png'
import '../../index.css'



const Footer = () => {
  return (
    <footer>
        <div className="container-relocation">
            <div className="content-footer">
            <div className="email-content">
                <div className="img-email">
                    <h3 className='iphone:text-normal sm:text-xl md:px-20 md:text-3xl sm:font-semibold' >Se inscreva para receber mais informações
                        sobre as nossas últimas ofertas de Relocation.
                    </h3>
                </div>
                <div className="input-email">
                    <form action="">
                        <div className="email-input">
                        <input placeholder='Insira o seu email aqui...' type="email" name="email" id="" />
                        </div>
                        <button className='button-email sm:bg-violet-700 sm:p-3' type="submit">Se inscrever</button>
                    </form>
                </div>
            </div>
            <div className="content-footer container-relocation md:flex sm:blok 
        md:justify-around md:items-center md:text-center 
        md:pt-1 sm:text-center sm:block sm:mt-20">
                <div className="logotipo-footer">
                    <img src={footerlogo} alt="" />
                </div>
                <div className="links-footer">
                    <div className="nav">
                        <ul className='links-home-footer sm:justify-center sm:gap-x-5 sm:mt-8 md:mt-0 sm:mb-12 md:mb-0'>
                            <CustomLink>Blog</CustomLink>
                            <CustomLink>Quem somos</CustomLink>
                            <CustomLink>Parcerias</CustomLink>
                        </ul>
                    </div>
                </div>
                <div className="redes-sociais sm:flex md:mb-0 sm:mb-12 sm:gap-x-5 sm:justify-center">
                    <CustomLink href="https://www.instagram.com/facility_4u/">
                        <FaWhatsapp color='green' size='30px' />
                    </CustomLink>
                    <CustomLink href="https://wa.me/351913177319">
                        <FaInstagram className='text-pink-900' size='30px' />
                    </CustomLink>
                    <CustomLink href="https://t.me/facility4u_bot">
                        <FaTelegram className='text-blue-500' size="30px" />
                    </CustomLink>
                </div>
            </div>
            <div className="img-seguros sm:hidden md:flex sm:block sm:items-center sm:text-center sm:justify-center md:mb-12">
                <div className="segurosec">
                <img src={segurosec} alt="" />
                </div>
                <div className="segurobit">
                <img src={segurobit} alt="" />
                </div>
                <div className="seguroblindado  sm:mt-8 md:mt-0 md:ml-8">
                <img src={seguroblindado}  alt="" />
                </div>
    </div>
            </div>
        </div>
        <div className="direitos-reservados sm:mt-12">
            <small>
            Todos os direitos reservados - Facility4u 2022
            </small>
        </div>
    </footer>
  )
}

export default Footer;


function CustomLink({ href, children, ...props }) {
    const path = window.location.pathname
    return (
        <li className={path === href ? 'active' : ''}>
            <a href={href} {...props}>
                {children}
            </a>
        </li>
    )
}