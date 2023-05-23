import ReactDOM from "react-dom/client";
import { mount as mountDevTools } from "@latticexyz/dev-tools";
import { App } from "./App";
import { setup } from "./mud/setup";
import { MUDProvider } from "./MUDContext";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Courtroom } from "./Courtroom";
import { NotFound } from "./404";
import { Game } from "./Game";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WagmiConfig, createConfig, sepolia } from "wagmi";
import { createPublicClient, http } from "viem";

// Create a client
const queryClient = new QueryClient();

const config = createConfig({
  autoConnect: true,
  publicClient: createPublicClient({
    chain: sepolia,
    transport: http(),
  }),
});

const rootElement = document.getElementById("react-root");
if (!rootElement) throw new Error("React root not found");
const root = ReactDOM.createRoot(rootElement);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
  },
  {
    path: "/courtroom",
    element: <Courtroom />,
    errorElement: <NotFound />,
  },
  {
    path: "/game",
    element: <Game />,
    errorElement: <NotFound />,
  },
]);

// TODO: figure out if we actually want this to be async or if we should render something else in the meantime
setup().then(result => {
  root.render(
    <QueryClientProvider client={queryClient}>
      <MUDProvider value={result}>
        <WagmiConfig config={config}>
          <RouterProvider router={router} />
        </WagmiConfig>
      </MUDProvider>
    </QueryClientProvider>,
  );
  mountDevTools();
});
