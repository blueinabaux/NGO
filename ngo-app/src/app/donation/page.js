"use client"

import { useEffect, useState } from "react";
import Input from "../components/inputs/Input";
import gsap from "gsap";
import QrModal from "../components/modals/QrModal";

const DonationPage = () => {

    // Set UPI (id: 1) as the default active button
    const [activeButton, setActiveButton] = useState(null);

    const donArray = [
        { id: 1, name: "Full Name" },
        { id: 2, name: "Contact No." },
        { id: 3, name: "Address" },
        { id: 4, name: "Date of Donation" },
        { id: 5, name: "Amount Donated" },
        { id: 6, name: "Donation for Any Specific Cause" },
    ];

    const paymentArray = [
        { id: 1, pay: "UPI" },
        { id: 2, pay: "RTGS" },
        { id: 3, pay: "NEFT" },
    ];

    useEffect(() => {
        // Set all buttons to gray initially
        gsap.to(".payBtn", { backgroundColor: "#b8b8b8", duration: 0.3 });
        // Set the active button (UPI by default) to green
        gsap.to(`.${activeButton}`, { backgroundColor: "#00B800", duration: 0.3 });
 
        
    }, [activeButton]);
    
    const payClick = () => {
        if(activeButton == "upi"){
            gsap.to(".qr", {
                display:"flex",
                ease:"power1.inOut",
                duration:0.5,
                opacity:1
            })
        }
        else{
            gsap.to(".qr", {
                display:"none"
            })
        }
    }

    return (
        <>
            <div className="donationPage h-[100vh] w-[100vw] bg--500 flex flex-col justify-center items-center relative">
            <QrModal/>
                <div className="titleDonation h-[25vh] w-full bg--500 flex justify-center items-end">
                    <h1 className="text-[3vw] font-regular">Donation Form</h1>
                </div>
                <div className="donationForm h-[75vh] w-full bg--500 flex justify-center items-center">
                    <div className="don-left h-full w-[50%] bg--300 flex flex-col justify-center items-center gap-[3vh]">
                        {donArray.slice(0, 4).map((don) => (
                            <Input key={don.id} name={don.name} />
                        ))}
                    </div>
                    <div className="don-right h-full w-[50%] bg--300 flex flex-col justify-center items-center gap-[3vh]">
                        {donArray.slice(4, 6).map((don) => (
                            <Input key={don.id} name={don.name} />
                        ))}
                        <div className="payment h-[20vh] w-full bg--500 flex flex-col justify-center items-center ">
                            <div className="payText h-[5vh] w-[60%] bg--400 flex justify-start items-end">
                                <h1>Mode Of Payment</h1>
                            </div>
                            <div className="modes h-[12vh] bg--200 w-[100%] flex justify-center items-center gap-[3vw]">
                                {paymentArray.map((item) => (
                                    <button
                                        key={item.id}
                                        className={`payBtn ${item.pay.toLowerCase()} h-[6vh] w-[8vw] text-white rounded-[0.8vh]`}
                                        onClick={() => setActiveButton(item.pay.toLowerCase())}
                                    >
                                        {item.pay}
                                    </button>
                                ))}
                            </div>
                        </div>
                        <button onClick={payClick} className="w-[30vw] h-[7vh] bg-[#00B800] text-white rounded-[0.8vh] hover:bg-[#289b28]">Pay</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default DonationPage;
