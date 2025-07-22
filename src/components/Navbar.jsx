import React from 'react'
import {navLinks} from '../constants/indes'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
const Navbar = () => {
    useGSAP(()=>{
        const navTween = gsap.timeline({
            ScrollTrigger:{
                trigger:'nav',
                start:'bottom top', //enables change of background of nav when we scroll
            }
        });
        navTween.fromTo('nav',{
            backgroundColor: 'transparent',    
        },
    {
        backgroundColor:'#00000050',
        backgroundFilter:'blur(10px)',
        duration: 0.5,
        ease: 'power1.inOut',
    });
    })
  return (
    <nav>
        <div>
            <a href="#home" className="flex items-center gap-2">
                <img src="/images/logo.png" alt="" />
                <p>Velvet Pour</p>
            </a>
            <ul>
                {navLinks.map((link)=>(
                    <li key={link.id}>
                        <a href="#${link.id}">{link.title}</a>
                    </li>
                )

                )}
            </ul>
        </div>
    </nav>
  )
}

export default Navbar