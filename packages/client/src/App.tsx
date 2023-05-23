import "tailwindcss/tailwind.css";
// import { useComponentValue } from "@latticexyz/react";
// import { useMUD } from "./MUDContext";
import { Link } from "react-router-dom";
import { Navbar } from "./Navbar";

export const App = () => {
  // const {
  //   components: { Counter },
  //   systemCalls: { increment },
  //   network: { singletonEntity },
  // } = useMUD();

  // const counter = useComponentValue(Counter, singletonEntity);

  return (
    <div className="min-w-screen flex min-h-screen flex-col items-center justify-normal bg-[url('assets/img/courtroom_pov.png')] bg-cover bg-center bg-no-repeat p-4">
      <Navbar />
      <div className="mt-96 flex h-full flex-col items-center justify-center gap-36 p-4 lowercase">
        <div className="from-primary to-accent text-neutral flex flex-col items-center justify-center gap-3 rounded-lg bg-gradient-to-br px-6 py-4">
          <h1 className="font-mono text-3xl font-extrabold tracking-wide md:text-5xl">
            Courtroom
          </h1>
          <h2 className="max-w-xs text-center italic md:text-2xl">
            Become An On-chain Lawyer For the Most Notorious Defendants: Dao
            Hack, etc.
          </h2>
        </div>
        <button className="btn btn-outline rounded-md text-2xl font-extralight normal-case md:text-3xl">
          <Link to="/courtroom">Play now!</Link>
        </button>
      </div>
    </div>
  );
};
