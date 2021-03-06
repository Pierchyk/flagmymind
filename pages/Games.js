import React, { useState } from "react";
import { useSession } from "next-auth/client";
import Navbar from "../components/Navbar";
import Image from "next/image";
import zoneList from "../utils/zoneList";
import { useRouter } from "next/router";
import Footer from "../components/Footer";

//Page où il y aura le jeu, il faut y récupérer les ID du user si ils existent, ainsi que les scores si login, puis envoyer dans la DB

export default function Games(props) {
  const [session, loading] = useSession();
  const router = useRouter();
  //pendant que loading === true, les props de session n'existent pas. Les récups que quand
  //loading === false
  console.log(loading);
  console.log(session);

  function play(e) {
    e.preventDefault;
    router.push(`/zone/${e.target.id}`);
  }

  const zoneCard = zoneList.map((key) => (
    <div class="w-fit md:w-1/2 xl:w-4/5 px-4">
      <div class="bg-white rounded-lg overflow-hidden mb-10">
        <div class="">
          <Image src={key.image} alt="image" />
        </div>
        <div class="pb-5 sm:pb-5 md:pb-5 xl:pb-5 text-center">
          <h3>
            <p
              class="
          font-semibold
          text-black text-xl
          sm:text-[22px]
          md:text-xl
          lg:text-[22px]
          xl:text-xl
          2xl:text-[22px]
          mb-4
          block
          "
            >
              {key.title}
            </p>
          </h3>

          <button
            id={key.title}
            onClick={play}
            class="
              inline-block
              py-2
              px-7
              border
              border-[#E5E7EB]
              rounded-full
              text-base
              text-black
              font-medium
              hover:border-primary
              hover:bg-primary
              hover:text-gray-500
              transition"
          >
            Jouer
          </button>
        </div>
      </div>
    </div>
  ));

  return (
    <div className="bg-slate-500 h-full w-full">
      <Navbar />
      <div class="flex flex-col justify-center items-center">
        <h1 className="text-black text-2xl text-center my-10">
          {" "}
          Choisissez une zone{" "}
        </h1>
        <div class="flex flex-wrap -mx-4 w-4/5">
          <div className="grid gap-5 grid-cols-3 grid-rows-2">{zoneCard}</div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
