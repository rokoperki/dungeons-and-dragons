"use client";

import Image from "next/image";
import { LayoutBackgroundPng } from "@/assets/images";
import { useState } from "react";
import Register from "@/components/home/register";
import Login from "@/components/home/login";

type AuthorizePages = "main" | "login" | "register";

export default function Home() {
  const [authorizePage, setAuthorizePage] = useState<AuthorizePages>("main");
  return (
    <div className="relative h-screen w-screen">
      <div className="bg-amber-100 w-[90%] h-[90%] absolute top-[5%] left-[5%] text-amber-950 text-center p-[30px]">
        {
          {
            main: <Main setAuthorizePage={setAuthorizePage} />,
            login: <Login setAuthorizePage={setAuthorizePage} />,
            register: <Register setAuthorizePage={setAuthorizePage} />,
          }[authorizePage]
        }
      </div>
      <Image
        src={LayoutBackgroundPng}
        alt="Landing background"
        className="w-screen h-screen object-cover"
      />
    </div>
  );
}

const Main = ({
  setAuthorizePage,
}: {
  setAuthorizePage: React.Dispatch<React.SetStateAction<AuthorizePages>>;
}) => {
  return (
    <div>
      <p>Teski Cardak</p>
      <p>Create account</p>
      <button
        className="bg-amber-950 text-amber-100 rounded-lg p-[5px]"
        onClick={() => setAuthorizePage("register")}
      >
        Sign up
      </button>
      <p>Already have account?</p>
      <button
        className="bg-amber-950 text-amber-100 rounded-lg p-[5px]"
        onClick={() => setAuthorizePage("login")}
      >
        Login
      </button>
    </div>
  );
};
