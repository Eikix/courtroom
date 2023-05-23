import { Navbar } from "./Navbar";

export const NotFound = () => {
  return (
    <div className="min-w-screen flex min-h-screen flex-col  bg-[url('assets/img/judge.png')] bg-cover bg-top bg-no-repeat p-4">
      <Navbar />
      <div className="flex min-h-[200px] w-full flex-col items-center justify-center md:min-h-[600px] lg:min-h-[768px]">
        <p className="from-primary to-neutral max-w-md rounded-md bg-gradient-to-br p-4 font-mono text-3xl font-extrabold md:max-w-xl md:text-4xl">
          Oops! I am afraid what you are looking for cannot be found.
        </p>
      </div>
    </div>
  );
};
