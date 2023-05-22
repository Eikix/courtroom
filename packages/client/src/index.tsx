import ReactDOM from "react-dom/client";
import { mount as mountDevTools } from "@latticexyz/dev-tools";
import { App } from "./App";
import { setup } from "./mud/setup";
import { MUDProvider } from "./MUDContext";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Courtroom } from "./Courtroom";
import { NotFound } from "./404";
import { Game } from "./Game";

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
    <MUDProvider value={result}>
      <RouterProvider router={router} />
    </MUDProvider>,
  );
  mountDevTools();
});
