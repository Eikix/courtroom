import { TypeAnimation } from "react-type-animation";
import { useReducedMotion } from "framer-motion";
import { Navbar } from "./Navbar";
import { Link } from "react-router-dom";

const waitTime = 500;

const messages = [
  "Oh, hi, it's you...",
  waitTime,
  "I'm sorry to say, but your client's going to jail...",
  waitTime,
  "Oh well, anyway, are you ready? Here's a few information on The DAO Hack before we start...",
  waitTime,
  "The DAO (Decentralized Autonomous Organization) was a decentralized venture capital fund built on Ethereum, launched in April 2016.",
  waitTime,
  "Its purpose was to provide a new decentralized business model for organizing both commercial and non-profit enterprises.",
  waitTime,
  "The DAO was crowdfunded via a token sale in May 2016, and it was the largest crowdfunding event in history, raising over $150 million in ether (ETH).",
  waitTime,
  "A few weeks after the fund raising, in June 2016, an unknown attacker exploited a flaw in The DAO's code.",
  waitTime,
  "The flaw exploited was a recursive calling vulnerability, allowing the hacker to 'ask' the smart contract to give the Ether back multiple times before the contract could update its own balance.",
  waitTime,
  "Approximately 3.6 million ETH (around $50 million at the time) was stolen by the hacker.",
  waitTime,
  "It led to a hard fork in the Ethereum blockchain to restore virtually all funds to the original contract.",
  waitTime,
  "This hard fork resulted in two separate Ethereum chains: Ethereum (ETH) and Ethereum Classic (ETC).",
  waitTime,
  "Ethereum (ETH) is the chain where the effects of the hack were reversed, while Ethereum Classic (ETC) continued on the original chain where the hack remained intact.",
  waitTime,
  "The hack exposed issues with smart contract security and led to a greater emphasis on smart contract auditing in the Ethereum community.",
  waitTime,
  "The DAO itself was discontinued, but it spurred the development of many other DAOs with improved security measures.",
  waitTime,
];

export const Courtroom = () => {
  const shouldReduceMotion = useReducedMotion();
  return (
    <div className="min-w-screen flex min-h-screen flex-col items-center justify-start bg-[url('assets/img/obnoxious_jury.png')] bg-cover bg-top bg-no-repeat p-4">
      <Navbar />
      <div className="flex h-[600px] min-w-full flex-col items-center justify-end p-6 md:h-[800px] md:p-16">
        <div className="flex w-full flex-col items-baseline justify-normal md:w-1/2">
          <h3 className="bg-neutral flex rounded-lg px-2 py-1">
            Attorney General
          </h3>
          <p className="from-primary to-neutral h-full w-full rounded-lg bg-gradient-to-br p-4 font-mono text-xl md:text-2xl">
            {shouldReduceMotion ? (
              messages.map(
                (message, index) =>
                  index % 2 == 0 && (
                    <>
                      {message} <br />
                    </>
                  ),
              )
            ) : (
              <TypeAnimation
                sequence={messages.map(message => message)}
                wrapper="span"
                cursor={true}
                repeat={0}
                omitDeletionAnimation={true}
                speed={70}
              />
            )}
          </p>
          <button className="bg-neutral my-6 rounded-lg px-4 py-2">
            <Link to="/game">Defend the DAO Hack case 🥷</Link>
          </button>
        </div>
      </div>
    </div>
  );
};
