"use client"
import gsap from "gsap";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import garbageImg1 from "../assets/garbage1.jpg";
import garbageImg2 from "../assets/garbage2.jpg";
import garbageImg3 from "../assets/garbage3.jpg";


import Image from "next/image";
const AboutPage = () => {
    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
        let t1 = gsap.timeline({
            scrollTrigger: {
                trigger: ".about-1",
                start: "00% 50%",
                end: "100% 100%",
                scrub: true,
                markers: false
            }
        });
        let t2 = gsap.timeline({
            scrollTrigger: {
                trigger: ".about-2",
                start: "00% 00%",
                end: "30% 50%",
                scrub: true,
                markers: false
            }
        });

        t1.to(".navbar a", {
            color:"white",
            ease:"power1.inOut",
            duration:1,
            delay:0.5,
        },"nav");
        t2.to(".navbar a", {
            color:"black",
            ease:"power1.inOut",
            duration:1,
            delay:0.5,
        });
        // t1.from(".about-1", {
        //     y:"-30vh",
        //     ease:"expo.inOut",
        //     duration:1,
        //     delay:0.5,
        // });
        
    },[]);
    return ( 
        <>
                <div className="about-1 h-[100vh] w-[100vw] bg-purple-500 flex justify-center items-center relative ">
                    {/* <video src={garbageVid} autoplay loop muted></video> */}
                    <Image className="image1 absolute z-[1] h-[100%] w-full object-cover" src={garbageImg3} />
                    <div className="abtOne h-[100%] w-full z-[10] flex justify-center items-center bg-[#00000069] ">
                        <div className="text1 h-[50vh] w-full bg--500 flex flex-col justify-center items-start px-[5vw]">
                            <h1 className="text-white text-[4vw]">We Encourage.</h1>
                            <p className="text-white text-[1vw] font-light w-[50vw]">Lorem Ipsum is simply dummy text of the printing and  typesetting industry. Lorem Ipsum has been the industry's standard dummy  text ever since the 1500s.</p>
                            <button className="bookBtn h-[5.5vh] w-[7.5vw] bg-[#00BD13] text-white rounded-full text-[1vw] flex justify-center items-center mt-[4vh] ">Our Work</button>
                        </div>
                    </div>
                </div>
                <div className="about-2 h-[100vh] w-full bg-white flex justify-center items-center relative ">
                    <Image className="image1  z-[1] h-[100%] w-[50%] object-cover" src={garbageImg1} />
                    <div className="abtOne h-[100%] w-[50%] z-[10] flex justify-center items-center bg-transparent ">
                        <div className="text1 h-[50vh] w-full bg--500 flex flex-col justify-center items-start px-[3vw]">
                            <h1 className="text-black text-[4vw]">We Trust.</h1>
                            <p className="text-black text-[1vw] font-light w-[40vw]">Lorem Ipsum is simply dummy text of the printing and  typesetting industry. Lorem Ipsum has been the industry's standard dummy  text ever since the 1500s.</p>
                            <button className="bookBtn h-[5.5vh] w-[7.5vw] bg-[#00BD13] text-white rounded-full text-[1vw] flex justify-center items-center mt-[4vh] ">Our Work</button>
                        </div>
                    </div>
                </div>
        </>
     );
}
 
export default AboutPage;