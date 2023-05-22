import { useState } from "react";
import { Navbar } from "./Navbar";

// const crimeCase = {
//   name: "The DAO Hack",
//   defendant: "The DAO",
// };

export const Game = () => {
  const [currentPrompt, setCurrentPrompt] = useState<string>();
  //   const [injectedPrompts, setInjectedPrompts] = useState<{
  //     role: "user" | "assistant";
  //     content: string;
  //   }>();

  const handleTextInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentPrompt(event.target.value);
  };

  const handleInteract = () => {
    if (!currentPrompt) {
      return;
    }
  };

  return (
    <div className="min-w-screen flex min-h-screen flex-col items-center justify-between bg-[url('assets/img/attorney-female.png')] bg-cover bg-top bg-no-repeat p-4">
      <Navbar />
      <div className="flex flex-col items-center justify-end">
        <form
          className="flex h-full w-full flex-col gap-2 p-4"
          onSubmit={handleInteract}
        >
          <input
            className="input flex h-48 w-screen max-w-xl items-start justify-start text-start md:h-80"
            type="text"
            placeholder="Time to lawyer up!"
            value={currentPrompt}
            onChange={handleTextInput}
          />
          <button
            className="btn btn-outline rounded-md text-2xl font-extralight normal-case md:text-3xl"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
