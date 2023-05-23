import { Link } from "react-router-dom";
import { useAccount, useConnect, useDisconnect } from "wagmi";
import { InjectedConnector } from "wagmi/connectors/injected";

export const Navbar = () => {
  const { address, isConnected } = useAccount();
  const { connect } = useConnect({
    connector: new InjectedConnector(),
  });
  const { disconnect } = useDisconnect();

  return (
    <div className="flex w-full justify-between p-4 md:h-12">
      <Link to="/">
        <span className="text-neutral from-primary to-secondary rounded-lg bg-gradient-to-br p-2 font-mono text-2xl tracking-wide md:text-3xl">
          Home
        </span>
      </Link>
      {isConnected ? (
        <div className="flex flex-col items-center justify-center gap-1 p-4">
          <span>
            {address?.substring(0, 4)}...
            {address?.substring(address.length - 5, address.length - 1)}
          </span>
          <button
            className="btn btn-outline text-md rounded-md font-extralight normal-case md:text-xl"
            onClick={() => disconnect()}
          >
            Disconnect
          </button>
        </div>
      ) : (
        <button
          className="btn btn-outline rounded-md text-2xl font-extralight normal-case md:text-3xl"
          onClick={() => connect()}
        >
          Connect
        </button>
      )}
    </div>
  );
};
