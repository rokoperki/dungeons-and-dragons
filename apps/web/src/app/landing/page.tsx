import { LandingBackgroundPng } from "@/assets/images";
import Image from "next/image";

export default function Landing() {
  return (
    <div className="relative h-screen w-screen">
      <Image
        src={LandingBackgroundPng}
        alt="Landing background"
        className="w-full h-full object-cover"
      />
      <div className="w-[50%]  absolute left-1/4 top-[30%] bg-[rgba(91,45,45,0.9)]">
        <p className="text-center text-[32px] font-[700] mt-[30px]">
          Teski Cardak
        </p>
        <p className="text-center mb-[50px]">
          For using app open site on mobile phone
        </p>
      </div>
    </div>
  );
}
