import Image from "next/image";
import LandingPage from "./pages/LandingPage";
import AboutPage from "./pages/AboutPage";

export default function Home() {
  return (
    <>
      <div className="min-h-[100vh] w-[100vw] overflow-x-hidden containerMain bg-[#FFF]">
        <LandingPage/>
        <AboutPage/>
      </div>
    </>
  );
}
