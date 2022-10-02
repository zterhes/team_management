import type { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { MouseEvent } from "react";
import RouterConfig from "../config/routingConfig";

const Home: NextPage = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1 className="text-white align text-2xl text-center">
        "Welcome to Gorillák Management Platform"
      </h1>
      <Link href={RouterConfig.PlayersListRoute}>
        <a className="w-1/5 bg-teamRed hover:bg-teamRed-700 text-white font-bold py-2 px-4 rounded-full text-center">
          Players
        </a>
      </Link>
    </div>
  );
};

export default Home;
