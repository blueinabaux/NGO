"use client"
import Image from "next/image";
import green from "../assets/greenmain.png";
const LandingPage = () => {
    return ( 
        <>
            <div className="landingMain h-[100vh] w-[100vw] bg--500 flex flex-col justify-center items-center relative">
                <div className="mainTitle h-[30vh] w-[70vw] bg--500 flex justify-center items-center text-center absolute z-[2]">
                    <h1 className="text-[4vw] font-medium text-black">Empowering Communities, One Cleanup at a Time</h1>
                </div>
            </div>
        </>
     );
}
 
export default LandingPage;