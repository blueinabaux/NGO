"use client"
import gsap from "gsap";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import member from "../assets/memberImage.jpg";
import donate from "../assets/donateImage.jpg";
import { useRouter } from 'next/navigation'


const OptionsPage = () => {
    const router = useRouter();

    useEffect(() => {
        const donate = document.querySelector(".donateImg");
        const member = document.querySelector(".memberImg");

        // donate.addEventListener("mouseenter", () => {
        //     gsap.to(donate,{
        //         grayScale:"0%"
        //     })
        // })

    },[]);
    return ( 
        <>
            <div className="optionsMain h-[100vh] w-full bg-red-500 flex justify-center items-center">
                <div onClick={() => router.push('/donation')} className="donateSide h-full w-[50%] bg--500 flex justify-center items-center relative">
                    <Image className="donateImg absolute z-[1] h-[100%] w-[100%] object-cover grayscale-[100%] hover:grayscale-[30%]" src={donate} />
                    <h1 className="text-[10vw] text-white font-bold absolute z-[10]">DONATE</h1>
                </div>

                <div className="memberSide h-full w-[50%] bg--500 flex justify-center items-center relative">
                    <Image className="memberImg absolute z-[1] h-[100%] w-[100%] object-cover grayscale-[100%] hover:grayscale-[0%] hover:duration-[1] hover:ease-in-out" src={member} />
                    <h1 className="text-[10vw] text-white font-bold absolute z-[10]">JOIN</h1>

                </div>
            </div>
        </>
     );
}
 
export default OptionsPage;