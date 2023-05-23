import { useState } from "react";
import { Navbar } from "./Navbar";
import { useMutation } from "@tanstack/react-query";
import { BodySchema } from "server";

const crimeCase = {
  name: "The DAO Hack",
  defendant: "The DAO",
};

type Prompt = BodySchema["pastPrompts"][number];

export const Game = () => {
  const [currentPrompt, setCurrentPrompt] = useState<string>("");
  const [injectedPrompts, setInjectedPrompts] = useState<Prompt[]>([]);

  const handleTextInput = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCurrentPrompt(event.target.value);
  };

  const handleInteract = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!currentPrompt) {
      return;
    }
    const promptPayload: BodySchema = {
      prompt: currentPrompt,
      pastPrompts: injectedPrompts,
      crimeCase,
    };

    mutatePrompt.mutate(promptPayload);
  };

  const postPrompt = async (promptPayload: BodySchema) => {
    try {
      console.log(promptPayload);
      const response = await fetch("http://localhost:8080/interact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...promptPayload }),
      });
      const data = await response.json();
      console.log(data);
      console.log(injectedPrompts);
      console.log(currentPrompt);

      setInjectedPrompts(prev => [
        ...prev,
        { role: "user", content: currentPrompt },
        data,
      ]);
      setCurrentPrompt("");
    } catch (error) {
      console.log(error);
    }
  };

  // Mutations
  const mutatePrompt = useMutation({
    mutationFn: postPrompt,
  });

  return (
    <div className="min-w-screen flex min-h-screen flex-col items-center justify-between bg-[url('assets/img/attorney-female.png')] bg-cover bg-top bg-no-repeat p-4">
      <Navbar />
      <div>
        {injectedPrompts.map(prompt => (
          <div
            key={prompt.content}
            className={
              "chat" + prompt.role === "user" ? "chat-start" : "chat-end"
            }
          >
            <div className="chat-bubble">{prompt.content}</div>
          </div>
        ))}
      </div>
      <div className="flex flex-col items-center justify-end">
        <form
          className="flex h-full w-full flex-col gap-2 p-4"
          onSubmit={handleInteract}
        >
          <textarea
            className="textarea flex h-48 w-screen max-w-xl items-start justify-start p-3 text-start text-lg md:text-xl"
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
