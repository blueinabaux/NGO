"use client"

import Link from "next/link";
import gsap from "gsap";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { useRouter } from "next/router";
const Navbar = () => {
    gsap.registerPlugin(ScrollTrigger);


    // const navigate = useNavigate();

    // const joinNavigate = () => {
    //     navigate("/join")
    // }

    useEffect(() => {
        let t1 = gsap.timeline({
            scrollTrigger: {
                trigger: "body",
                start: "20% 00%",
                end: "40% 100%",
                scrub: true,
                markers: false
            }
        });

        t1.to(".navbar", {
            height:"12vh",
            backdropFilter: "blur(3px)",
            ease:"power1.inOut",
            duration:1,
            delay:0.5,
        },"nav");
        
    },[]);
    return ( 
        <>
            <div className="navbar h-[14vh] w-full bg-[#ffffff10] flex justify-center items-center fixed top-0 left-0 z-[1000]">
                <div className="nav-left h-full w-[20%] bg--400 flex justify-center items-center">
                    <Link href="/" className="LogoText text-[2vw] text-black font-extrabold">NP</Link>
                </div>
                <div className="nav-mid h-full w-[60%] bg--400 flex justify-center items-center gap-[6vw]">
                    <Link href="/about" className="text-black font-light text-[1vw]">About</Link>
                    <Link href="/media" className="text-black font-light text-[1vw]">Media</Link>
                    <Link href="/services" className="text-black font-light text-[1vw]">Blogs</Link>
                    <Link href="/contact" className="text-black font-light text-[1vw]">Contact</Link>
                </div>
                <div className="nav-right h-full w-[20%] bg--400 flex justify-center items-center">
                    <Link href="/join" className="bookBtn h-[5.5vh] w-[7.5vw] bg-[#00BD13] text-white rounded-full text-[1.1vw] flex justify-center items-center ">Join</Link>
                </div>
            </div>
        </>
     );
}
 
export default Navbar;