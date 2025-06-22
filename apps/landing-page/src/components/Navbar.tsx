import Link from "next/link";
import { Button } from "./ui/button";

export default function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between py-4 px-8 border-b bg-white/80 backdrop-blur-md sticky top-0 z-50">
      <div className="flex items-center gap-2">
        <span className="font-bold text-xl tracking-tight italic">revellier</span>
      </div>
      <div className="flex gap-4">
        <Button asChild variant="ghost">
          <Link href="/">Home</Link>
        </Button>
        <Button asChild variant="ghost">
          <Link href="#features">Features</Link>
        </Button>
        <Button asChild variant="ghost">
          <Link href="/login">Login/Signup</Link>
        </Button>
        <Button asChild variant="ghost">
          <Link href="#contact">Contact</Link>
        </Button>
      </div>
    </nav>
  );
} 