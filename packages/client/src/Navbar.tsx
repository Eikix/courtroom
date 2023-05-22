import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="w-full md:h-12">
      <Link to="/">
        <span className="text-neutral from-primary to-secondary rounded-lg bg-gradient-to-br p-2 font-mono text-2xl tracking-wide md:text-3xl">
          Home
        </span>
      </Link>
    </div>
  );
};
